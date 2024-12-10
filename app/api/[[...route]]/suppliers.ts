import { clerkMiddleware, getAuth } from '@hono/clerk-auth';
import { zValidator } from '@hono/zod-validator';
import { eq, inArray, sql } from 'drizzle-orm';
import { Hono } from 'hono';
import { z } from 'zod';

import { db } from '@/db/drizzle';
import { suppliers, locations, insertsuppliersSchema } from '@/db/schema';

const patchSupplierSchema = z.object({
  name: z.string().optional(),
  type: z.string().optional(),
  locationId: z.number().optional(),
  products: z.record(z.unknown()).optional(),
  inclusionType: z.enum(['Include', 'Exclude', 'Consider']).optional(),
  additionalParameters: z.record(z.unknown()).optional(),
  icon: z.string().optional(),
});

const app = new Hono()
  .get('/', clerkMiddleware(), async (c) => {
    const auth = getAuth(c);
    if (!auth?.userId) {
      return c.json({ error: 'Unauthorized' }, 401);
    }
    const data = await db
      .select({
        id: suppliers.id,
        name: suppliers.name,
        type: suppliers.type,
        locationId: locations.id,
        products: suppliers.products,
        inclusionType: suppliers.inclusionType,
        additionalParameters: suppliers.additionalParameters,
        updatedAt: suppliers.updatedAt,
        createdAt: suppliers.createdAt,
        icon: suppliers.icon,
        locationName: locations.name
      })
      .from(suppliers)
      .innerJoin(locations, eq(suppliers.locationId, locations.id));

    return c.json({ data });
  })
  .get(
    '/:id',
    zValidator(
      'param',
      z.object({
        id: z.string()
      })
    ),
    clerkMiddleware(),
    async (c) => {
      const auth = getAuth(c);
      const { id } = c.req.valid('param');
      if (!auth?.userId) {
        return c.json({ error: 'Unauthorized' }, 401);
      }
      const [data] = await db
        .select()
        .from(suppliers)
        .where(eq(suppliers.id, parseInt(id)));
      if (!data) {
        return c.json({ error: 'Not found' }, 404);
      }
      return c.json({ data });
    }
  )
  .post(
    '/',
    clerkMiddleware(),
    zValidator('json', insertsuppliersSchema),
    async (c) => {
      const auth = getAuth(c);
      const values = c.req.valid('json');
      if (!auth?.userId) {
        return c.json({ error: 'Unauthorized' }, 401);
      }
      const [data] = await db.insert(suppliers).values(values).returning();
      return c.json({ data });
    }
  )
  .post(
    '/bulk-create',
    clerkMiddleware(),
    zValidator(
      'json',
      z.array(
        insertsuppliersSchema
          .omit({
            id: true,
            locationId: true,
          })
          .extend({
            location_name: z.string()
          })
      )
    ),
    async (c) => {
      try {
        const auth = getAuth(c);
        const values = c.req.valid('json');

        console.log(`bulk create values`, values);

        if (!auth?.userId) {
          return c.json({ error: 'Unauthorized' }, 401);
        }

        // Get all unique location names
        const locationNames = Array.from(
          new Set(values.map((v) => v.location_name))
        );

        const locationMap = new Map();
        const existingLocations = await db
          .select({ id: locations.id, name: locations.name })
          .from(locations)
          .where(inArray(locations.name, locationNames));

        existingLocations.forEach((loc) => locationMap.set(loc.name, loc.id));

        const supplierData = values.map((value) => {
          const locationId = locationMap.get(value.location_name);
          if (!locationId) {
            throw new Error(`Location not found: ${value.location_name}`);
          }
          const { location_name, ...supplierFields } = value;
          return {
            ...supplierFields,
            locationId,
            userId: auth.userId
          };
        });

        // Insert new suppliers
        const data = await db.insert(suppliers).values(supplierData).returning();
        return c.json({ data });
      } catch (error) {
        console.error('Bulk create error:', error);
        if (error instanceof z.ZodError) {
          console.error('Validation error:', error.errors);
          return c.json(
            { error: 'Validation error', details: error.errors },
            400
          );
        }
        return c.json({ error: 'Internal Server Error' }, 500);
      }
    }
  )
  .post(
    '/bulk-delete',
    clerkMiddleware(),
    zValidator('json', z.object({ ids: z.array(z.number()) })),
    async (c) => {
      const auth = getAuth(c);
      const { ids } = c.req.valid('json');
      if (!auth?.userId) {
        return c.json({ error: 'Unauthorized' }, 401);
      }
      try {
        const data = await db
          .delete(suppliers)
          .where(inArray(suppliers.id, ids))
          .returning({ id: suppliers.id });
        return c.json({ data });
      } catch (error) {
        console.error('Bulk delete error:', error);
        return c.json({ error: 'Internal Server Error' }, 500);
      }
    }
  )
  .delete(
    '/:id',
    clerkMiddleware(),
    zValidator('param', z.object({ id: z.string() })),
    async (c) => {
      const auth = getAuth(c);
      const { id } = c.req.valid('param');
      if (!auth?.userId) {
        return c.json({ error: 'Unauthorized' }, 401);
      }
      const [data] = await db
        .delete(suppliers)
        .where(eq(suppliers.id, parseInt(id)))
        .returning();
      if (!data) {
        return c.json({ error: 'Not found' }, 404);
      }
      return c.json({ data });
    }
  )
  .patch(
    '/:id',
    clerkMiddleware(),
    zValidator(
      'param',
      z.object({
        id: z.string()
      })
    ),
    zValidator('json', patchSupplierSchema),
    async (c) => {
      try {
        const auth = getAuth(c);
        const { id } = c.req.valid('param');
        const values = c.req.valid('json');

        if (!auth?.userId) {
          throw new Error('Unauthorized');
        }

        const [data] = await db
          .update(suppliers)
          .set(values)
          .where(eq(suppliers.id, parseInt(id)))
          .returning();

        if (!data) {
          throw new Error('Not found');
        }

        return c.json({ data });
      } catch (error) {
        console.error('❌ PATCH ERROR:', error);
        if (error instanceof z.ZodError) {
          console.error('Validation error:', error.errors);
          return c.json(
            { error: 'Validation error', details: error.errors },
            400
          );
        }
        const errorMessage =
          error instanceof Error ? error.message : 'Unknown error';
        return c.json(
          { error: errorMessage },
          errorMessage === 'Unauthorized' ? 401 : 404
        );
      }
    }
  );

export default app;

import { Hono } from 'hono';
import { handle } from 'hono/vercel';

// import plaid from "./plaid";
import summary from './summary';
import accounts from './accounts';
import categories from './categories';
import transactions from './transactions';

import customers from './customers';
import locations from './locations';
import products from './products';
import groups from './groups';
import units from './units';
import facilities from './facilities';
import demands from './demands';
import periods from './periods';
import vehicleTypes from './vehicleTypes';
import cogLocations from './coglocations';
import demandByDistances from './demandbydistances';
import distanceByDemands from './distancebydemands';
import productFlows from './productflows';
import demandFulfillments from './demandfulfillments';

export const runtime = 'nodejs';

const app = new Hono().basePath('/api');

const routes = app
  // .route("/plaid", plaid)
  .route('/summary', summary)
  .route('/accounts', accounts)
  .route('/categories', categories)
  .route('/transactions', transactions)
  .route('/customers', customers)
  .route('/locations', locations)
  .route('/products', products)
  .route('/groups', groups)
  .route('/units', units)
  .route('/facilities', facilities)
  .route('/demands', demands)
  .route('/periods', periods)
  .route('/vehicleTypes', vehicleTypes)
  .route('/coglocations', cogLocations)
  .route('/demandbydistances', demandByDistances)
  .route('/distancebydemands', distanceByDemands)
  .route('/productflows', productFlows)
  .route('/demandfulfillments', demandFulfillments)

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);

export type AppType = typeof routes;

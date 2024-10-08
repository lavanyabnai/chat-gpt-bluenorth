import { kv } from "@vercel/kv";
// import { revalidatePath } from 'next/cache'

import { type Chat } from "@/lib/types";
// import { requireUserId } from "~/session.server";

export async function getChats(userId?: string | null) {
  if (!userId) {
    return [];
  }

  try {
    const pipeline = kv.pipeline();
    const chats: string[] = await kv.zrange(`user:chat:${userId}`, 0, -1, {
      rev: true,
    });

    for (const chat of chats) {
      pipeline.hgetall(chat);
    }

    const results = await pipeline.exec();

    return results as Chat[];
  } catch (error) {
    return [];
  }
}

export async function getChat(id: string, userId: string) {
  const chat = await kv.hgetall(`chat:${id}`);

  if (!chat || (userId && chat.userId !== userId)) {
    return null;
  }

  return chat;
}

export async function removeChat({
  id,
  userId,
}: {
  id: string;
  userId: string;
}) {
  // const session = await auth()

  if (!userId) {
    return {
      error: "Unauthorized",
    };
  }

  //Convert uid to string for consistent comparison with session.user.id
  const uid = String(await kv.hget(`chat:${id}`, "userId"));

  if (uid !== userId) {
    return {
      error: "Unauthorized",
    };
  }

  await kv.del(`chat:${id}`);
  await kv.zrem(`user:chat:${userId}`, `chat:${id}`);
  return { success: true };
}

export async function clearChats(
  userId: string,
): Promise<{ error?: string; success?: boolean }> {
  // const session = await auth();

  if (!userId) {
    return {
      error: "Unauthorized",
    };
  }

  const chats: string[] = await kv.zrange(`user:chat:${userId}`, 0, -1);
  if (!chats.length) {
    return { error: "No chat history" };
  }
  const pipeline = kv.pipeline();

  for (const chat of chats) {
    pipeline.del(chat);
    pipeline.zrem(`user:chat:${userId}`, chat);
  }

  await pipeline.exec();

  return { success: true };
}

export async function getSharedChat(id: string) {
  const chat = await kv.hgetall<Chat>(`chat:${id}`);

  if (!chat || !chat.sharePath) {
    return null;
  }

  return chat;
}

export async function shareChat(id: string, userId: string) {
  // const session = await auth();

  if (!userId) {
    return {
      error: "Unauthorized",
    };
  }

  const chat = await kv.hgetall<Chat>(`chat:${id}`);

  if (!chat || chat.userId !== userId) {
    return {
      error: "Something went wrong",
    };
  }

  const payload = {
    ...chat,
    sharePath: `/share/${chat.id}`,
  };

  await kv.hmset(`chat:${chat.id}`, payload);

  return payload;
}

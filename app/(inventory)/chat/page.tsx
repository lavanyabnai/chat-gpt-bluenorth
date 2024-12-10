import { nanoid } from '@/lib/utils';
import { Chat } from '@/components/chat';
import { AI } from '@/lib/chat/actions';

import { auth } from '@/auth';
// import { Session } from '@/lib/types';
import { getMissingKeys } from '../../actions';
import { Header } from '@/components/header';

import { SignedIn, SignedOut } from '@clerk/nextjs';



export default async function IndexPage() {
  const session = await auth();
  // const { userId } = session;

  const id = nanoid();
  // const session = (await auth()) as Session;
  const missingKeys = await getMissingKeys();
  return (
    <div>
      <AI initialAIState={{ chatId: id, messages: [] }}>
        <Chat id={id} session={session || undefined} missingKeys={missingKeys} />
      </AI>
    </div>
  );
}
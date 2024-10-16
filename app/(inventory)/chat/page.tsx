import { nanoid } from '@/lib/utils';
import { Chat } from '@/components/chat';
import { AI } from '@/lib/chat/actions';

// import { auth } from '@/auth';
// import { Session } from '@/lib/types';
import { getMissingKeys } from '../../actions';
import { Header } from '@/components/header';
import { useAuth, useUser } from '@clerk/nextjs';

import { SignedIn, SignedOut } from '@clerk/nextjs';

export const metadata = {
  title: 'BlueNorth AI EnterpriseGPT'
};

export default async function IndexPage() {
  const { userId, sessionId } = useAuth();
  const id = nanoid();
  // const session = (await auth()) as Session;
  const missingKeys = await getMissingKeys();
  return (
    <div>
      <AI initialAIState={{ chatId: id, messages: [] }}>
        <Chat id={id} session={session} missingKeys={missingKeys} />
      </AI>
    </div>
  );
}

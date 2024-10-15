import { atom, useAtom } from 'jotai';

import { Mail, allTables } from '@/app/(inventory)/mail/data';

type Config = {
  selected: Mail['id'] | null;
};

const configAtom = atom<Config>({
  selected: allTables[0].id
});

export function useMail() {
  return useAtom(configAtom);
}

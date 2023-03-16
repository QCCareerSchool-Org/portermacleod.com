import type { ReactNode } from 'react';

import { SetNav } from '@/components/setNav';
import { Split } from '@/components/split';

export default function Home(): ReactNode {
  return (
    <>
      <SetNav nav="home" />
      <Split>
        <h1>Porter &amp; MacLeod Collection Agency</h1>
      </Split>
    </>
  );
}

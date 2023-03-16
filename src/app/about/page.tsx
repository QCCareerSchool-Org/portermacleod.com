import type { ReactNode } from 'react';

import { SetNav } from '@/components/setNav';
import { Split } from '@/components/split';

export default function About(): ReactNode {
  return (
    <>
      <SetNav nav="about" />
      <Split>
        <h1>About the Company</h1>
      </Split>
    </>
  );
}

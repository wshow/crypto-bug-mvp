import { getServerSession } from 'next-auth/next';
import { ContextParams } from './helper';
import { SignIn } from './signin';

export default async function Home({ params: { lang } }: ContextParams) {
  const session = getServerSession();
  return (
    <>
      {!session?.user && <SignIn />}
      <pre>{JSON.stringify(session || '{}', null, 2)}</pre>
    </>
  );
}

export const runtime = 'edge';

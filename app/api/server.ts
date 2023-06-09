import { NextResponse } from 'next/server';
import { authOptions } from '@/lib/next-auth';
import { getServerSession } from 'next-auth/next';
import { AdminId, AdminType } from '@/lib/config';

export async function checkAuth() {
  // Session Check
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ status: 0 }, { status: 401 });
  if ((session.user as { [k: string]: string })?.[AdminType] !== AdminId)
    return NextResponse.json({ status: 0 }, { status: 403 });
}

export function defaultHandler() {
  return NextResponse.json({ status: 404 }, { status: 404 });
}

export function catchServerError<T = any>(defaultValue: T) {
  return (e: Error) => {
    console.error(e);
    return defaultValue;
  };
}

export type ApiContextParams = { params: { [k: string]: string } };

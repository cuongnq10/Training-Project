import { NextResponse } from 'next/server';
import accountData from '../../data/account-data.json';

export async function GET() {
  return NextResponse.json({
    status: 'success',
    data: {
      accountData,
    },
  });
}



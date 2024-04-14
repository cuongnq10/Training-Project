import fsPromises from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';

const dirname = path.join(process.cwd(), '/src/app/data/account-data.json');

export async function GET() {
  const data = await fsPromises.readFile(dirname);
  return NextResponse.json({
    status: 'success',
    data: {
      account: JSON.parse(data),
    },
  });
}

export async function PUT(req) {
  const data = await req.json();
  await fsPromises.writeFile(dirname, JSON.stringify(data, null, 2), 'utf-8');
  return NextResponse.json({
    status: 'success',
    message: 'Updated data successfully',
  });
}

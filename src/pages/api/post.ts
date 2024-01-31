import type { NextApiRequest, NextApiResponse } from 'next';
import { IMAGE_PATH } from '@/constants/constants';
import { generateFrameRing } from '@/utils';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const html = generateFrameRing(IMAGE_PATH);

  return res.status(200).setHeader('Content-Type', 'text/html').send(html);
}

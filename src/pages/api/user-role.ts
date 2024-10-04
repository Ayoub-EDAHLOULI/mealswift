import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    try {
      const restaurant = await prisma.restaurant.findFirst({ where: { email: email as string } });
      if (restaurant) {
        return res.status(200).json({ role: 'restaurant' });
      }

      const driver = await prisma.driver.findUnique({ where: { email: email as string } });
      if (driver) {
        return res.status(200).json({ role: 'driver' });
      }

      const admin = await prisma.admin.findUnique({ where: { email: email as string } });
      if (admin) {
        return res.status(200).json({ role: 'admin' });
      }

      return res.status(200).json({ role: 'default' });
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
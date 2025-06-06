import { supabase } from '../../lib/supabase';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { productId } = req.body;

  if (!productId) return res.status(400).json({ error: 'productId é obrigatório' });

  const { error } = await supabase.from('product_views').insert([{ product_id: productId }]);

  if (error) return res.status(500).json({ error: error.message });

  return res.status(200).json({ success: true });
}

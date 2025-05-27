import { supabase } from '../../lib/supabase';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const { data, error } = await supabase
    .from('product_views')
    .select('product_id, viewed_at')
    .order('viewed_at', { ascending: false });

  if (error) return res.status(500).json({ error: error.message });

  // Contagem dos mais acessados
  const countByProduct: Record<string, number> = {};
  data?.forEach((item) => {
    countByProduct[item.product_id] = (countByProduct[item.product_id] || 0) + 1;
  });

  const sorted = Object.entries(countByProduct)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([productId]) => productId);

  res.status(200).json(sorted);
}

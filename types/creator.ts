export type Creator = {
  id: number;
  created_at: string;

  name: string;
  username: string | null;
  slug: string | null;

  niche: string;

  subscribers: string;
  monthly_views: string;

  engagement: string;

  platform: string;
  language: string;

  image: string;

  bio: string;

  email: string;
  phone: string;

  instagram: string | null;
  youtube: string | null;

  country: string;

  status: string;
};
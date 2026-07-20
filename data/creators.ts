export type Creator = {
  id: number;
  slug: string;
  name: string;
  username: string;
  niche: string;
  subscribers: string;
  monthlyViews: string;
  engagement: string;
  platform: string;
  language: string;
  image: string;
  bio: string;
};

export const creators: Creator[] = [
  {
    id: 1,
    slug: "ayush-bhandari",
    name: "Ayush Bhandari",
    username: "@ayushbhandari",
    niche: "Entertainment",
    subscribers: "6.21M",
    monthlyViews: "42M",
    engagement: "8.4%",
    platform: "YouTube",
    language: "Hindi",
    image: "/creators/ayush.jpg",
    bio: "Entertainment creator creating engaging and viral content.",
  },

  {
    id: 2,
    slug: "senpai-spider",
    name: "SenpaiSpider",
    username: "@senpaispider",
    niche: "Gaming",
    subscribers: "2.54M",
    monthlyViews: "19M",
    engagement: "9.1%",
    platform: "YouTube",
    language: "Hindi",
    image: "/creators/senpai.jpg",
    bio: "Gaming creator focused on Minecraft and PC gaming.",
  },

  {
    id: 3,
    slug: "dimple-malhan-vlogs",
    name: "Dimple Malhan",
    username: "@dimplemalhan",
    niche: "Lifestyle",
    subscribers: "6.67M",
    monthlyViews: "38M",
    engagement: "7.8%",
    platform: "YouTube",
    language: "Hindi",
    image: "/creators/dimple.jpg",
    bio: "Lifestyle and family vlogs creator.",
  },
];
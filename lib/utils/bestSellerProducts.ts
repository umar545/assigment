export type Product = {
  id: number;
  name: string;
  originalPrice: string;
  price: string;
  rating: number;
  sold: string;
  image: string;
  badge: string;
  badgeColor: string;
};

export const bestSellerProducts: Product[] = [
  {
    id: 1,
    name: "UrbanEdge Men's Jeans Collection Premium Denim",
    originalPrice: "Rp380.000",
    price: "Rp253.000",
    rating: 4.9,
    sold: "10K+ Sold",
    image:
      "https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    badge: "1",
    badgeColor: "bg-orange-500",
  },
  {
    id: 2,
    name: "SHANTIAN Men's Slip on Shock Cloth Shoes Deck Casual",
    originalPrice: "Rp249.000",
    price: "Rp179.000",
    rating: 4.9,
    sold: "10K+ Sold",
    image:
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    badge: "2",
    badgeColor: "bg-gray-500",
  },
  {
    id: 3,
    name: "Mallodie Adult Male Distressed Cap Men Cotton Baseball",
    originalPrice: "Rp180.000",
    price: "Rp125.000",
    rating: 4.9,
    sold: "10K+ Sold",
    image:
      "https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    badge: "3",
    badgeColor: "bg-amber-600",
  },
  {
    id: 4,
    name: "SCOCI Men's Flannel Hoodie Shirts Long Sleeve Casual",
    originalPrice: "Rp325.000",
    price: "Rp150.000",
    rating: 4.9,
    sold: "10K+ Sold",
    image:
      "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    badge: "4",
    badgeColor: "bg-blue-500",
  },
  {
    id: 5,
    name: "Premium Cotton T-Shirt Men's Comfortable Fit",
    originalPrice: "Rp200.000",
    price: "Rp150.000",
    rating: 4.9,
    sold: "10K+ Sold",
    image:
      "https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    badge: "5",
    badgeColor: "bg-green-500",
  },
  {
    id: 6,
    name: "Classic Leather Wallet Men's Bifold Premium",
    originalPrice: "Rp300.000",
    price: "Rp225.000",
    rating: 4.9,
    sold: "10K+ Sold",
    image:
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    badge: "6",
    badgeColor: "bg-purple-500",
  },
];

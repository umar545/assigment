// Define product type
export type Product = {
  id: number;
  name: string;
  price: string; // formatted price "Rp220.000"
  oldPrice: string; // formatted old price "Rp360.000"
  image: string;
};

export const stylingProducts: Product[] = [
  {
    id: 1,
    name: "George Men's and Big Men's 100% Cotton Regular Fit Jeans",
    price: "Rp220.000",
    oldPrice: "Rp360.000",
    image:
      "https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Men's Easy Reader Date Black/Silver/White Watch",
    price: "Rp450.000",
    oldPrice: "Rp745.000",
    image:
      "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Sport Running Shoes for Men Mesh Breathable Sneakers",
    price: "Rp330.000",
    oldPrice: "Rp460.000",
    image:
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
];

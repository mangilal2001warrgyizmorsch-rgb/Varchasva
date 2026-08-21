export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image?: string;
  rating: number;
  content: string;
  date: string;
  verified: boolean;
  product?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Aditi Sharma",
    role: "Wholesale Distributor",
    rating: 5,
    content: "We have been distributing Varchasva cold-pressed oils for over a year now. The consistent quality and secure packaging make it a top-seller in our premium grocery segment.",
    date: "2024-05-12",
    verified: true,
    product: "Flaxseed Oil"
  },
  {
    id: "2",
    name: "Rajesh Kumar",
    role: "Retail Dealer",
    rating: 5,
    content: "Customer retention for Varchasva's Mustard Oil is incredibly high. Once families try it, they never go back to refined alternatives. The supply chain has been very reliable.",
    date: "2024-06-28",
    verified: true,
    product: "Mustard Oil"
  },
  {
    id: "3",
    name: "Meera Patel",
    role: "Organic Store Owner",
    rating: 5,
    content: "Partnering with Varchasva has elevated our store's reputation. The authentic aroma and purity of their Sesame Oil exactly match the traditional standards our health-conscious customers demand.",
    date: "2024-07-15",
    verified: true,
    product: "Sesame Oil"
  },
  {
    id: "4",
    name: "Sanjay Gupta",
    role: "Regional Distributor",
    rating: 5,
    content: "The market demand for authentic cold-pressed oils is surging, and Varchasva stands out. Their transparent manufacturing process and zero-adulteration promise make them an excellent brand to represent.",
    date: "2024-08-02",
    verified: true
  },
  {
    id: "5",
    name: "Sneha Reddy",
    role: "Supermarket Sourcing Manager",
    rating: 4,
    content: "Stocking Varchasva Groundnut Oil was a great decision. The premium packaging attracts buyers, and the taste ensures repeat purchases. Looking forward to larger bulk SKUs.",
    date: "2024-08-10",
    verified: true,
    product: "Groundnut Oil"
  },
  {
    id: "6",
    name: "Vikram Singh",
    role: "B2B Supply Partner",
    rating: 5,
    content: "We supply premium ingredients to high-end restaurants and wellness resorts. Varchasva's almond oil is consistently requested by our top chefs and spa managers for its unparalleled quality.",
    date: "2024-08-18",
    verified: true
  }
];

export const getProductReviews = (productName: string) => {
  return testimonials.filter(t => !t.product || t.product.toLowerCase() === productName.toLowerCase());
};

export const getAverageRating = (reviews: Testimonial[]) => {
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
  return (sum / reviews.length).toFixed(1);
};

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
    role: "Home Chef",
    rating: 5,
    content: "I just received my first bottle of Varchasva Mustard Oil last week. You can instantly tell the difference in purity just from the aroma. It brought back memories of the traditional oil my grandmother used to make. An incredible launch!",
    date: "2026-08-15",
    verified: true,
    product: "Mustard Oil"
  },
  {
    id: "2",
    name: "Rajesh Kumar",
    role: "Fitness Enthusiast",
    rating: 5,
    content: "I was looking for a genuinely cold-pressed groundnut oil and decided to try Varchasva since they just launched. The taste is remarkably fresh, and the packaging is premium. Truly a great start for a new brand!",
    date: "2026-08-18",
    verified: true,
    product: "Groundnut Oil"
  },
  {
    id: "3",
    name: "Meera Patel",
    role: "Wellness Coach",
    rating: 5,
    content: "Tried their Sesame Oil as soon as they launched. The texture and authentic nutty flavor are unmatched. It’s hard to find such unadulterated oils these days. So glad I discovered them early on.",
    date: "2026-08-12",
    verified: true,
    product: "Sesame Oil"
  },
  {
    id: "4",
    name: "Sanjay Gupta",
    role: "Food Blogger",
    rating: 5,
    content: "A newly launched brand that completely delivers on its promise. The traditional wooden ghani extraction makes a noticeable difference in the taste of their Flaxseed Oil. Highly recommended for anyone switching to healthy cooking.",
    date: "2026-08-20",
    verified: true,
    product: "Flaxseed Oil"
  },
  {
    id: "5",
    name: "Sneha Reddy",
    role: "Early Customer",
    rating: 5,
    content: "I pre-ordered their almond oil as soon as they announced their launch. It just arrived and the quality is absolutely stunning. It feels completely pure and natural. Wishing this new brand lots of success!",
    date: "2026-08-22",
    verified: true,
    product: "Almond Oil"
  },
  {
    id: "6",
    name: "Vikram Singh",
    role: "Health Conscious Parent",
    rating: 5,
    content: "Switched to Varchasva's Mustard Oil recently for daily cooking. The fact that it's freshly extracted in small batches convinced me to try it. The food tastes noticeably lighter and better. Will definitely order again.",
    date: "2026-08-21",
    verified: true,
    product: "Mustard Oil"
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

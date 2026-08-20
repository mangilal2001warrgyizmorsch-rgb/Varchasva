"use client";

export interface Product {
  slug: string;
  title: string;
  shortTitle: string;
  price: number;
  originalPrice?: number;
  size: string;
  sizes: string[];
  image: string;
  gallery: string[];
  rating: number;
  reviews: number;
  badge: string;
  category: string;
  description: string;
  longDescription: string;
  benefits: string[];
  nutrition: { label: string; value: string }[];
  usage: string;
  ingredients: string;
}

export const PRODUCTS: Product[] = [
  {
    slug: "cold-pressed-mustard-oil",
    title: "Cold-Pressed Mustard Oil",
    shortTitle: "Mustard Oil",
    price: 350,
    originalPrice: 450,
    size: "1 Litre",
    sizes: ["250 ml", "500 ml", "1 Litre", "5 Litres"],
    image: "/product_mustard.webp",
    gallery: ["/product_mustard.webp", "/process1.webp", "/process2.webp"],
    rating: 4.9,
    reviews: 128,
    badge: "Bestseller",
    category: "Cold-Pressed",
    description:
      "Our signature cold-pressed mustard oil, extracted from hand-selected Rajasthani Rai seeds using traditional wooden ghani.",
    longDescription:
      "Dharohar Cold-Pressed Mustard Oil is crafted from the finest Rajasthani Rai seeds, hand-selected from local farmers who practice sustainable agriculture. Each batch is slowly pressed in a traditional wooden ghani (cold-press) at temperatures below 40°C, ensuring that every drop retains its natural pungency, rich amber colour, and full spectrum of nutrients. Unlike refined oils that undergo chemical processing, our mustard oil preserves its natural allyl isothiocyanate — the compound responsible for its characteristic heat and antimicrobial properties. This oil has been the cornerstone of Indian kitchens for generations, trusted for its bold flavour in pickles, tadkas, and daily cooking.",
    benefits: [
      "Rich in Omega-3 and Omega-6 fatty acids",
      "Natural antimicrobial and anti-inflammatory properties",
      "Supports heart health and lowers bad cholesterol",
      "High smoke point — ideal for Indian cooking",
      "Promotes healthy skin and hair when used topically",
      "100% unrefined with zero chemical additives",
    ],
    nutrition: [
      { label: "Energy", value: "884 kcal / 100ml" },
      { label: "Total Fat", value: "100g" },
      { label: "Saturated Fat", value: "11g" },
      { label: "Monounsaturated Fat", value: "59g" },
      { label: "Polyunsaturated Fat", value: "21g" },
      { label: "Omega-3 (ALA)", value: "5.9g" },
      { label: "Vitamin E", value: "Naturally present" },
    ],
    usage:
      "Perfect for deep frying, tempering (tadka), pickles, marinades, and daily cooking. Also used in traditional Ayurvedic body massages.",
    ingredients: "100% Pure Cold-Pressed Mustard Seed Oil (Brassica juncea)",
  },
  {
    slug: "virgin-coconut-oil",
    title: "Virgin Coconut Oil",
    shortTitle: "Coconut Oil",
    price: 450,
    originalPrice: 550,
    size: "500 ml",
    sizes: ["200 ml", "500 ml", "1 Litre"],
    image: "/product_coconut.webp",
    gallery: ["/product_coconut.webp", "/process1.webp", "/process3.webp"],
    rating: 4.8,
    reviews: 94,
    badge: "Organic",
    category: "Cold-Pressed",
    description:
      "Pure virgin coconut oil cold-pressed from fresh, hand-picked Kerala coconuts. Retains natural aroma and lauric acid.",
    longDescription:
      "Our Virgin Coconut Oil is sourced from the lush coconut groves of Kerala, where skilled farmers hand-pick mature coconuts at the peak of their oil content. The fresh coconut meat is cold-pressed within hours of harvesting, locking in the delicate tropical aroma and the full nutritional profile. Rich in lauric acid — a medium-chain fatty acid known for its immune-boosting properties — this oil solidifies beautifully below 25°C and melts to a crystal-clear liquid when warmed. It's a true multi-purpose oil, equally at home in the kitchen, the bathroom, and the medicine cabinet.",
    benefits: [
      "Rich in lauric acid — supports immune function",
      "Medium-chain triglycerides for quick energy",
      "Natural moisturizer for skin and hair",
      "Supports healthy metabolism and weight management",
      "Anti-fungal and anti-bacterial properties",
      "Retains natural coconut aroma and flavor",
    ],
    nutrition: [
      { label: "Energy", value: "862 kcal / 100ml" },
      { label: "Total Fat", value: "100g" },
      { label: "Saturated Fat", value: "82g" },
      { label: "Lauric Acid", value: "49g" },
      { label: "Monounsaturated Fat", value: "6g" },
      { label: "Polyunsaturated Fat", value: "2g" },
      { label: "Vitamin E", value: "Naturally present" },
    ],
    usage:
      "Ideal for South Indian cooking, baking, smoothies, skin and hair care. Use as a healthy alternative to butter in recipes.",
    ingredients: "100% Pure Virgin Coconut Oil (Cocos nucifera)",
  },
  {
    slug: "pure-groundnut-oil",
    title: "Pure Groundnut Oil",
    shortTitle: "Groundnut Oil",
    price: 420,
    size: "1 Litre",
    sizes: ["500 ml", "1 Litre", "5 Litres"],
    image: "/product_groundnut.webp",
    gallery: ["/product_groundnut.webp", "/process2.webp", "/process3.webp"],
    rating: 5.0,
    reviews: 215,
    badge: "Top Rated",
    category: "Cold-Pressed",
    description:
      "Traditional wood-pressed groundnut oil with a naturally nutty aroma. A staple of Gujarat and Maharashtra kitchens.",
    longDescription:
      "Dharohar Pure Groundnut Oil is extracted from premium-grade Gujarat groundnuts using a centuries-old wood-pressing technique. The peanuts are gently roasted before pressing, which gives this oil its characteristic golden colour and warm, nutty aroma. Wood-pressing ensures zero chemical contact and temperatures that never exceed 40°C, preserving the oil's natural resveratrol, vitamin E, and heart-healthy monounsaturated fats. This is the oil your grandmother trusted — rich, honest, and full of flavour.",
    benefits: [
      "High in monounsaturated fats — supports heart health",
      "Natural source of Vitamin E and resveratrol",
      "High smoke point — perfect for deep frying",
      "Rich, nutty flavor enhances every dish",
      "Zero trans fats, zero cholesterol",
      "Supports healthy skin and fights free radicals",
    ],
    nutrition: [
      { label: "Energy", value: "884 kcal / 100ml" },
      { label: "Total Fat", value: "100g" },
      { label: "Saturated Fat", value: "17g" },
      { label: "Monounsaturated Fat", value: "46g" },
      { label: "Polyunsaturated Fat", value: "32g" },
      { label: "Vitamin E", value: "15.7mg / 100ml" },
      { label: "Resveratrol", value: "Naturally present" },
    ],
    usage:
      "The go-to oil for Gujarati and Maharashtrian cooking. Ideal for frying, sautéing, and making traditional snacks like fafda and chivda.",
    ingredients: "100% Pure Wood-Pressed Groundnut Oil (Arachis hypogaea)",
  },
  {
    slug: "pure-sesame-oil",
    title: "Pure Sesame Oil",
    shortTitle: "Sesame Oil",
    price: 380,
    originalPrice: 480,
    size: "500 ml",
    sizes: ["250 ml", "500 ml", "1 Litre"],
    image: "/product_sesame.webp",
    gallery: ["/product_sesame.webp", "/process1.webp", "/process2.webp"],
    rating: 4.7,
    reviews: 76,
    badge: "Ayurvedic",
    category: "Cold-Pressed",
    description:
      "Traditional cold-pressed sesame oil (til oil) revered in Ayurveda. Nutty golden oil extracted from untoasted white sesame seeds.",
    longDescription:
      "Our Pure Sesame Oil is cold-pressed from organically grown white sesame seeds (til), following the ancient extraction methods prescribed in Ayurvedic texts. Sesame oil has been called the 'Queen of Oils' in traditional Indian medicine, valued for its warming properties and deep nourishing effects. Each bottle captures the mild, nutty sweetness of pure til, uncontaminated by heat or chemicals. This versatile oil is as essential in a South Indian kitchen as it is in an Ayurvedic therapy room.",
    benefits: [
      "Rich in sesamin and sesamolin — powerful antioxidants",
      "Supports bone health with natural calcium and zinc",
      "Traditional Ayurvedic oil for massage (Abhyanga)",
      "Supports oral health — used in oil-pulling therapy",
      "Natural source of Vitamin E and B-complex",
      "Anti-inflammatory properties support joint health",
    ],
    nutrition: [
      { label: "Energy", value: "884 kcal / 100ml" },
      { label: "Total Fat", value: "100g" },
      { label: "Saturated Fat", value: "14g" },
      { label: "Monounsaturated Fat", value: "40g" },
      { label: "Polyunsaturated Fat", value: "42g" },
      { label: "Sesamin", value: "Naturally present" },
      { label: "Vitamin E", value: "1.4mg / 100ml" },
    ],
    usage:
      "Perfect for South Indian tempering, Ayurvedic massages, oil pulling, and as a finishing oil drizzled over dals and rice.",
    ingredients: "100% Pure Cold-Pressed Sesame Seed Oil (Sesamum indicum)",
  },
  {
    slug: "organic-flaxseed-oil",
    title: "Organic Flaxseed Oil",
    shortTitle: "Flaxseed Oil",
    price: 520,
    originalPrice: 650,
    size: "250 ml",
    sizes: ["100 ml", "250 ml", "500 ml"],
    image: "/product_flaxseed.webp",
    gallery: ["/product_flaxseed.webp", "/process1.webp", "/process3.webp"],
    rating: 4.6,
    reviews: 53,
    badge: "Superfood",
    category: "Essential",
    description:
      "Cold-pressed from certified organic golden flaxseeds. The richest plant source of Omega-3 fatty acids.",
    longDescription:
      "Dharohar Organic Flaxseed Oil is cold-pressed from certified organic golden flaxseeds (alsi) grown in the temperate regions of Madhya Pradesh. Flaxseed oil is the world's richest plant-based source of Alpha-Linolenic Acid (ALA), an essential Omega-3 fatty acid that the body cannot produce on its own. Our gentle cold-press extraction preserves the oil's delicate lignan compounds, which are powerful phytoestrogens with antioxidant properties. This light, nutty oil is best enjoyed raw — drizzled over salads, smoothies, or yogurt — to maximize its extraordinary health benefits.",
    benefits: [
      "Richest plant source of Omega-3 (ALA) fatty acids",
      "Supports brain health and cognitive function",
      "Natural anti-inflammatory — supports joint mobility",
      "High in lignans — supports hormonal balance",
      "Promotes healthy, glowing skin from within",
      "Supports digestive health and regularity",
    ],
    nutrition: [
      { label: "Energy", value: "884 kcal / 100ml" },
      { label: "Total Fat", value: "100g" },
      { label: "Saturated Fat", value: "9g" },
      { label: "Omega-3 (ALA)", value: "53g" },
      { label: "Omega-6", value: "13g" },
      { label: "Omega-9", value: "19g" },
      { label: "Lignans", value: "Naturally present" },
    ],
    usage:
      "Best consumed raw — drizzle over salads, smoothies, yogurt, or oatmeal. Not recommended for high-heat cooking. Store refrigerated after opening.",
    ingredients: "100% Pure Cold-Pressed Organic Flaxseed Oil (Linum usitatissimum)",
  },
  {
    slug: "wood-pressed-almond-oil",
    title: "Wood-Pressed Almond Oil",
    shortTitle: "Almond Oil",
    price: 680,
    originalPrice: 850,
    size: "200 ml",
    sizes: ["100 ml", "200 ml", "500 ml"],
    image: "/product_almond.webp",
    gallery: ["/product_almond.webp", "/process2.webp", "/process3.webp"],
    rating: 4.9,
    reviews: 67,
    badge: "Premium",
    category: "Essential",
    description:
      "Luxurious wood-pressed sweet almond oil from Kashmiri Mamra almonds. A premium elixir for skin, hair, and culinary use.",
    longDescription:
      "Our Wood-Pressed Almond Oil is crafted from the prized Kashmiri Mamra almonds — the most nutrient-dense almond variety in the world. These wild-grown almonds are hand-harvested from the orchards of Kashmir and gently pressed using a traditional wooden kolhu at ambient temperatures, yielding a pale golden oil with a subtle, sweet almond fragrance. This is a true luxury oil — rich in oleic acid, vitamin E, and natural emollients that have been treasured in royal Indian beauty rituals for centuries. Equally exquisite as a finishing culinary oil.",
    benefits: [
      "Exceptionally rich in Vitamin E — nature's skin vitamin",
      "Deep moisturizer for skin, under-eyes, and hair",
      "Supports brain health and memory (Ayurvedic 'medhya')",
      "Mild and gentle — safe for baby massage",
      "Natural source of oleic acid for heart health",
      "Reduces dark circles and promotes an even skin tone",
    ],
    nutrition: [
      { label: "Energy", value: "884 kcal / 100ml" },
      { label: "Total Fat", value: "100g" },
      { label: "Saturated Fat", value: "8g" },
      { label: "Monounsaturated Fat", value: "66g" },
      { label: "Polyunsaturated Fat", value: "26g" },
      { label: "Vitamin E", value: "39mg / 100ml" },
      { label: "Phytosterols", value: "Naturally present" },
    ],
    usage:
      "A multi-purpose luxury oil. Use for face and body massage, hair oiling, baby massage, or as a finishing oil on desserts and salads.",
    ingredients: "100% Pure Wood-Pressed Sweet Almond Oil (Prunus dulcis)",
  },
];

export const CATEGORIES = ["All", "Cold-Pressed", "Essential", "Wellness Bundles"];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string, count = 3): Product[] {
  return PRODUCTS.filter((p) => p.slug !== slug).slice(0, count);
}

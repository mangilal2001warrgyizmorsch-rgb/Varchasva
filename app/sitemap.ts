import { MetadataRoute } from 'next'
import connectToDatabase from '../lib/mongodb'
import { Article } from '../models/Article'
import { PRODUCTS } from '../constants/products'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://varchasva.com'

  // Fetch all published journal articles
  let journalRoutes: MetadataRoute.Sitemap = []
  try {
    await connectToDatabase()
    const articles = await Article.find({ isPublished: true }).select('slug updatedAt').lean()
    journalRoutes = articles.map((article: any) => ({
      url: `${baseUrl}/journal/${article.slug}`,
      lastModified: article.updatedAt || new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }))
  } catch (error) {
    console.error("Failed to fetch journal articles for sitemap:", error)
  }

  // Generate product routes
  const productRoutes: MetadataRoute.Sitemap = PRODUCTS.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/products`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/process`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/benefits`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/sustainability`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/journal`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/shipping`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
  ]

  return [...staticRoutes, ...productRoutes, ...journalRoutes]
}

import type { Metadata } from 'next'
import './globals.css'

import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import ThemeMenu from '@/components/Theme/ThemeMenu'
import { Fira_Code } from 'next/font/google'

const firaCode = Fira_Code({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

const title = 'NOVOO - ML/AI Portfolio | Novonil Basak'

const description =
  'AI Developer & Machine Learning Researcher combining biotechnology expertise with advanced AI. Specializing in RAG systems, medical imaging, and production ML deployments. Featured projects: CardioQA, Breast Cancer Detection, Kaggle Top 7.5%.'

const url = process.env.NEXT_PUBLIC_SITE_URL

export const metadata: Metadata = {
  title,
  description,
  category: 'technology',
  authors: [{ name: 'Novonil Basak (NOVOO)' }],
  keywords: [
    'Machine Learning',
    'Artificial Intelligence',
    'Medical AI',
    'RAG Systems',
    'Computer Vision',
    'Data Science',
    'Biotechnology',
    'Healthcare AI',
    'PyRadiomics',
    'FastAPI',
    'NLP',
    'ChromaDB',
    'Novonil Basak',
    'NOVOO',
    'ML Portfolio',
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  alternates: {
    canonical: url,
  },
  openGraph: {
    title,
    description,
    url,
    siteName: 'NOVOO - ML/AI Portfolio',
    type: 'website',
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    creator: '@novoo5',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${firaCode.className}`}>
        <header>
          <Navbar />
        </header>
        {children}
        <ThemeMenu />
        <Footer />
      </body>
    </html>
  )
}

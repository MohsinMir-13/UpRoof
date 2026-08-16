import {Suspense} from 'react';
import dynamicImport from 'next/dynamic';
import {useTranslations} from 'next-intl';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import StatsBar from '@/components/StatsBar';
import Footer from '@/components/Footer';
import type {Metadata} from 'next';

// Defer non-critical sections to improve FCP
const DynamicSolutions = dynamicImport(() => import('@/components/Solutions'), {
  loading: () => <div className="h-96 bg-gray-50" />,
  ssr: true,
});

const DynamicHomeClientSections = dynamicImport(() => import('@/components/HomeClientSections'), {
  loading: () => <div className="h-96 bg-gray-50" />,
  ssr: true,
});

const DynamicContactSection = dynamicImport(() => import('@/components/ContactSection'), {
  loading: () => <div className="h-96 bg-gray-50" />,
  ssr: true,
});

type Props = {
  params: Promise<{locale: string}>;
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const canonical = `https://uproof.eu/${locale}`;
  
  const languages: Record<string, string> = {
    lv: 'https://uproof.eu/lv',
    en: 'https://uproof.eu/en',
    'nl-BE': 'https://uproof.eu/nl-BE',
    'x-default': 'https://uproof.eu/lv',
  };

  const titles: Record<string, string> = {
    lv: 'UpRoof | Jumiķa pakalpojumi, jumta darbi, jumta remonts un jumta būvniecība Latvijā',
    en: 'Roof Repair, Roof Renovation & Roofing Services in Latvia | UpRoof',
    'nl-BE': 'Dakreparatie, dakrenovatie en dakdiensten in Letland | UpRoof',
  };

  const descriptions: Record<string, string> = {
    lv: 'Profesionāli jumta pakalpojumi Rīgā, Pierīgā un visā Latvijā: jumiķi, jumiķa pakalpojumi, jumta darbi, jumta renovācija, jumta remonts, jumta nomaiņa, jumta montāža, jumta atjaunošana, jumta labošana, jumta būvniecība, valcprofila jumts, metāla jumts, skārda jumts, dakstiņu jumts un jumta loksnes ar garantiju.',
    en: 'Professional roofing services in Riga and throughout Latvia: roof construction, roof renovation, roof repair, standing seam roofing, tile roofs, gutters, snow removal and maintenance with warranty.',
    'nl-BE': 'Professionele dakdiensten in Letland: dakbouw, dakrenovatie, dakreparatie, staande naad, pannendaken, goten, sneeuwruiming en onderhoud met garantie.',
  };

  return {
    title: titles[locale] || titles.lv,
    description: descriptions[locale] || descriptions.lv,
    alternates: {
      canonical,
      languages,
    },
  };
}

export default async function HomePage({params}: Props) {
  const {locale} = await params;

  const seoIntro: Record<string, string> = {
    lv: 'Jumiķa pakalpojumi, jumiķi, jumta darbi, jumta remonts, jumta labošana, jumta atjaunošana, jumta renovācija, jumta nomaiņa, jumta montāža, jumta būvniecība, jumta izbūve, jumta seguma nomaiņa, jumta seguma montāža, jumta uzstādīšana, jumta rekonstrukcija, jumta pārbūve, jumta maiņa, valcprofila jumts, metāla jumts, skārda jumts, dakstiņu jumts un jumta loksnes Rīgā, Mārupē, Jūrmalā, Ādažos, Siguldā, Pierīgā un visā Latvijā.',
    en: 'Our core focus is roofing services, roof repair, roof renovation, roof installation, standing seam roofing, gutter installation, snow removal and roof maintenance in Riga and throughout Latvia.',
    'nl-BE': 'Onze kernfocus ligt op dakdiensten, dakreparatie, dakrenovatie, dakinstallatie, staande naad, gootsystemen, sneeuwruiming en dakonderhoud in Letland.',
  };

  const seoPhrasesLv = [
    'Valcprofila montāža',
    'Jumta renovācija',
    'Jumta nomaiņa',
    'Jumta montāža',
    'Jumta būvniecība',
    'Jumiķa pakalpojumi',
    'Jumiķi',
    'Jumta darbi',
    'Jumta atjaunošana',
    'Jumta remonts',
    'Jumta labošana',
    'Jauns jumts',
    'Jumta izbūve',
    'Jumta seguma nomaiņa',
    'Jumta seguma montāža',
    'Jumta uzstādīšana',
    'Jumta rekonstrukcija',
    'Jumta pārbūve',
    'Jumta maiņa',
    'Valcprofila jumts',
    'Metāla jumts',
    'Skārda jumts',
    'Dakstiņu jumts',
    'Jumta loksnes',
    'Jumiķi Rīgā',
    'Jumta remonts Rīgā',
    'Jumta nomaiņa Rīgā',
    'Jumta montāža Rīgā',
    'Jumiķi Mārupē',
    'Jumiķi Jūrmalā',
    'Jumiķi Ādažos',
    'Jumiķi Siguldā',
  ];

  const statsData: Record<string, {value: string; label: string}[]> = {
    lv: [
      {value: '200+', label: 'Pabeigti projekti'},
      {value: '10+', label: 'Gadu pieredze'},
      {value: '10', label: 'Gadu garantija'},
      {value: '100%', label: 'Klientu apmierinātība'},
    ],
    en: [
      {value: '200+', label: 'Completed Projects'},
      {value: '10+', label: 'Years Experience'},
      {value: '10', label: 'Year Warranty'},
      {value: '100%', label: 'Client Satisfaction'},
    ],
    'nl-BE': [
      {value: '200+', label: 'Voltooide Projecten'},
      {value: '10+', label: 'Jaar Ervaring'},
      {value: '10', label: 'Jaar Garantie'},
      {value: '100%', label: 'Klanttevredenheid'},
    ],
  };

  return (
    <main className="min-h-screen">
  <Header showText={false} largeLogo={true} />
  <Hero />
        <div className="sr-only bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-center">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-4xl mx-auto">
              {seoIntro[locale] || seoIntro.lv}
            </p>
            {locale === 'lv' && (
              <div className="mt-5 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4 text-left">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-600 mb-3">Populāri meklējumi</h2>
                <div className="flex flex-wrap gap-2 text-sm text-gray-700">
                  {seoPhrasesLv.map((phrase) => (
                    <span key={phrase} className="rounded-full border border-gray-200 bg-white px-3 py-1.5 shadow-sm">
                      {phrase}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
  <Services limit={4} />
      <StatsBar stats={statsData[locale] || statsData.lv} />
      <Suspense fallback={<div className="h-96 bg-gray-50" />}>
        <DynamicHomeClientSections>
          <DynamicSolutions />
        </DynamicHomeClientSections>
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-gray-50" />}>
        <DynamicContactSection />
      </Suspense>
      <Footer />
      {/* LocalBusiness / Organization schema for Local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'UpRoof',
            url: `https://uproof.eu/${locale}`,
            image: 'https://uproof.eu/images/og-image.jpg',
            telephone: '+37125612440',
            priceRange: '€€',
            address: {
              '@type': 'PostalAddress',
              addressCountry: locale === 'nl-BE' ? 'BE' : 'LV',
              addressLocality: locale === 'nl-BE' ? 'Kortrijk' : 'Rīga'
            },
            areaServed: locale === 'nl-BE' ? ['Kortrijk','Gent','Brugge','Antwerpen','Brussel'] : ['Rīga','Jūrmala','Jelgava','Ogre','Salaspils','Ķekava','Mārupe','Ādaži','Sigulda'],
            openingHoursSpecification: [
              { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '18:00' }
            ],
            sameAs: [
              'https://www.tiktok.com/@uproof',
              'https://www.instagram.com/up_roof',
              'https://www.facebook.com/share/1BgDDjXKHX/',
              'https://www.linkedin.com/company/uproof-jumti/',
            ],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: locale === 'lv' ? 'Jumta pakalpojumi' : locale === 'nl-BE' ? 'Dakdiensten' : 'Roofing Services',
              itemListElement: [
                {'@type': 'Service', name: locale === 'lv' ? 'Jumta renovācija' : locale === 'nl-BE' ? 'Dakrenovatie' : 'Roof Renovation'},
                {'@type': 'Service', name: locale === 'lv' ? 'Jumta būvniecība' : locale === 'nl-BE' ? 'Dakbouw' : 'Roof Construction'},
                {'@type': 'Service', name: locale === 'lv' ? 'Jumta remonts' : locale === 'nl-BE' ? 'Dakreparatie' : 'Roof Repair'},
                {'@type': 'Service', name: locale === 'lv' ? 'Sniega un ledus tīrīšana no jumta' : locale === 'nl-BE' ? 'Sneeuw- en ijsverwijdering van dak' : 'Snow & Ice Removal from Roof'},
                {'@type': 'Service', name: locale === 'lv' ? 'Jumta apkope' : locale === 'nl-BE' ? 'Dakonderhoud' : 'Roof Maintenance'},
              ],
            },
            description: locale === 'nl-BE'
              ? 'Professionele dakdiensten: renovatie, pannendaken, metaal, onderhoud. Gecertificeerde kwaliteit met garantie.'
              : locale === 'en'
              ? 'Professional roofing services: construction, renovation, metal, tiles, maintenance, snow and ice removal. Certified quality with warranty.'
              : 'Profesionāli jumta pakalpojumi: jumiķa pakalpojumi, jumta darbi, jumta remonts, jumta labošana, jumta atjaunošana, jumta renovācija, jumta nomaiņa, jumta montāža, jumta būvniecība, metāla jumti, valcprofila montāža, valcprofila jumta montāža, metāla jumta montāža, dakstiņi, apkope, sniega un ledus tīrīšana no jumta. Sertificēta kvalitāte ar garantiju.'
          })
        }}
      />
    </main>
  );
}

// Prefer static generation to reduce TTFB and stabilize LCP
export const dynamic = 'force-static';
export const revalidate = 3600; // Re-generate once per hour

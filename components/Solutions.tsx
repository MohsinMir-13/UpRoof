'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Solutions() {
  const t = useTranslations('home.solutions');

  const solutions = [
    { key: 'renovation', image: '/images/icons/renovation.webp' },
    { key: 'profiling', image: '/images/icons/profiling.webp' },
    { key: 'repair', image: '/images/icons/repair.webp' },
    { key: 'drainage', image: '/images/icons/drainage.webp' },
    { key: 'painting', image: '/images/icons/painting.webp' },
    { key: 'cleaning', image: '/images/icons/cleaning.webp' },
  ];

  return (
  <section className="relative bg-gradient-to-br from-gray-900 via-primary-900 to-gray-800 text-white overflow-hidden py-16" style={{contentVisibility: 'auto'}}>
      {/* Top accent */}
      <div className="absolute top-0 left-0 w-full h-24 bg-white transform -skew-y-2 -translate-y-12 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
            {t('title')}
          </h2>
          <div className="w-24 h-1 bg-primary-400 mx-auto mt-4" />
        </div>

  {/* 2×3 grid (a bit taller to show more image content) */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-6 w-full h-[80vh] sm:h-[88vh] lg:h-[95vh]">
          {solutions.map((solution) => (
            <div
              key={solution.key}
              className="relative h-full rounded-2xl overflow-hidden border border-white/10 bg-white/10"
            >
              <div className="relative flex flex-col h-full">
                <div className="relative flex-1">
                  <Image
                    src={solution.image}
                    alt={t(solution.key)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    quality={60}
                  />
                </div>

                <div className="shrink-0 p-4 text-center bg-black/30 backdrop-blur-sm">
                  <h3 className="text-base sm:text-lg font-semibold tracking-wide leading-tight">
                    {t(solution.key)}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional bottom gradient tint */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-gray-900/40 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}

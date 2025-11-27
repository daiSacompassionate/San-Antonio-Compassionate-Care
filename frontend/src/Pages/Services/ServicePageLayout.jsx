import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import { useInquiryModal, useScheduleTourModal } from '../../context/InquiryModalContext';

const ServicePageLayout = ({
  hero,
  focusAreas = [],
  programs = [],
  wellness = [],
  testimonials = [],
  cta,
}) => {
  const { openModal } = useInquiryModal();
  const { openModal: openTourModal } = useScheduleTourModal();
  return (
    <>
      <Navbar />
      <main className="pt-16 bg-slate-50 min-h-screen font-sans">
        {/* Hero */}
        <motion.section 
          className="relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative z-10"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(15, 76, 129, 0.75), rgba(33, 158, 188, 0.7)), url(${hero?.image || ''})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="container mx-auto px-4 py-24 lg:py-32 text-white">
              <motion.div 
                className="max-w-4xl space-y-6"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {hero?.eyebrow && (
                  <motion.p 
                    className="text-xs uppercase tracking-[0.3em] text-blue-100"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {hero.eyebrow}
                  </motion.p>
                )}
                <div className="space-y-4">
                  <motion.h1 
                    className="text-3xl lg:text-5xl font-serif font-semibold leading-tight"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {hero?.title}
                  </motion.h1>
                  <motion.p 
                    className="text-lg lg:text-xl text-blue-50/90"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    {hero?.description}
                  </motion.p>
                </div>
                {hero?.highlights?.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {hero.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-4 py-2 rounded-full bg-white/15 border border-white/25 text-sm"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}
                {hero?.stats?.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
                    {hero.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-white/10 border border-white/15 rounded-2xl p-5 backdrop-blur-sm"
                      >
                        <p className="text-sm uppercase tracking-wide text-blue-100">
                          {stat.label}
                        </p>
                        <p className="text-3xl font-serif font-semibold">
                          {stat.value}
                        </p>
                        {stat.detail && (
                          <p className="text-sm text-blue-50/80">{stat.detail}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                <div className="flex flex-wrap gap-4 pt-4">
                  <button
                    onClick={openTourModal}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-blue-900 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition"
                  >
                    Book a Personal Tour
                  </button>
                  <a
                    href="tel:+12106061146"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/60 text-white font-semibold hover:bg-white/10 transition"
                  >
                    Call Us
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* Focus Areas */}
        {focusAreas.length > 0 && (
          <section className="container mx-auto px-4 py-16">
            <div className="grid gap-8 lg:grid-cols-[1fr,2fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-blue-500">
                  Care Focus
                </p>
                <h2 className="text-3xl font-serif font-semibold text-slate-900 mt-4">
                  {focusAreas.title || 'What families appreciate most'}
                </h2>
                {focusAreas.subtitle && (
                  <p className="mt-4 text-slate-600">{focusAreas.subtitle}</p>
                )}
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {focusAreas.items?.map((area) => (
                  <div
                    key={area.title}
                    className="bg-white rounded-2xl shadow-lg shadow-slate-200/60 border border-slate-100 p-6 space-y-3"
                  >
                    <div className="w-11 h-11 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xl">
                      {area.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {area.title}
                    </h3>
                    <p className="text-sm text-slate-600">{area.description}</p>
                    {area.points && (
                      <ul className="space-y-1 text-sm text-slate-500">
                        {area.points.map((point) => (
                          <li key={point} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Programs */}
        {programs.length > 0 && (
          <section className="bg-white py-16">
            <div className="container mx-auto px-4 space-y-10">
              <div className="max-w-3xl">
                <p className="text-sm uppercase tracking-[0.4em] text-blue-500">
                  Signature Programming
                </p>
                <h2 className="text-3xl font-serif font-semibold text-slate-900 mt-4">
                  Daily rhythms designed around residents
                </h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {programs.map((program) => (
                  <div
                    key={program.title}
                    className="rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-6 space-y-4 shadow-sm"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-[0.4em] text-blue-400">
                        {program.timeframe}
                      </p>
                      <h3 className="text-xl font-semibold text-slate-900 mt-2">
                        {program.title}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600">{program.description}</p>
                    <ul className="space-y-2">
                      {program.bullets?.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="mt-1 w-2 h-2 rounded-full bg-blue-400" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Wellness */}
        {wellness.length > 0 && (
          <section className="container mx-auto px-4 py-16">
            <div className="grid gap-10 lg:grid-cols-2">
              {wellness.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/70 p-8 space-y-4"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
                    {item.badge}
                  </div>
                  <h3 className="text-2xl font-serif text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">{item.description}</p>
                  <ul className="space-y-2">
                    {item.features?.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-slate-600">
                        <span className="w-2 h-2 rounded-full bg-blue-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Testimonials */}
        {testimonials.length > 0 && (
          <section className="bg-slate-900 text-white py-16 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white to-transparent" />
            <div className="container mx-auto px-4 relative z-10 space-y-8">
              <p className="text-sm uppercase tracking-[0.4em] text-blue-200">
                Family Reflections
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.name}
                    className="p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md space-y-4"
                  >
                    <p className="text-lg font-light leading-relaxed">
                      “{testimonial.quote}”
                    </p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-blue-100">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        {cta && (
          <section className="container mx-auto px-4 py-16">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-blue-500 to-teal-400 text-white p-10 shadow-xl">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div className="space-y-4 max-w-2xl">
                  <p className="text-sm uppercase tracking-[0.4em] text-blue-100">
                    {cta.eyebrow || 'Plan your visit'}
                  </p>
                  <h3 className="text-3xl font-serif font-semibold">
                    {cta.title}
                  </h3>
                  <p className="text-blue-50/90">{cta.description}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={openTourModal}
                    className="px-6 py-3 rounded-full bg-white text-blue-700 font-semibold shadow-lg hover:-translate-y-0.5 transition"
                  >
                    {cta.primaryAction || 'Schedule a Visit'}
                  </button>
                  <a
                    href="tel:+12106061146"
                    className="px-6 py-3 rounded-full border border-white/60 text-white font-semibold hover:bg-white/10 transition text-center"
                  >
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};

export default ServicePageLayout;



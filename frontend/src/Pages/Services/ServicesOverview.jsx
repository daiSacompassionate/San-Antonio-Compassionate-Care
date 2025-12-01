import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaUtensils, FaHouseDamage, FaPills, FaClipboardList, FaUserNurse } from 'react-icons/fa';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import heroImage from '../../Images/Homepage.png';
import assistedImg from '../../Images/nurse-tablet.avif';
import medImg from '../../Images/doctor-patient.png';
import imgIndependent from '../../Images/selfliving.jpg';
import imgTech from '../../Images/Homepage.png';
import imgGroom from '../../Images/grooming.jpg';
import imgTransport from '../../Images/transport.jpg';
import imgFamily from '../../Images/family.jpg';
import imgNurses from '../../Images/nurse-tablet.avif';
import { useInquiryModal } from '../../context/InquiryModalContext';

const ServicesOverview = () => {
  const { openModal } = useInquiryModal();

  // Framer Motion variants
  const heroVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, when: 'beforeChildren' } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen bg-slate-50 font-sans">
        {/* Hero - full viewport height (minus navbar) */}
        <motion.section className="relative overflow-hidden h-[calc(100vh-4rem)]" aria-labelledby="our-care-continuum"
          variants={heroVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 64, 175, 0.75)), url(${heroImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
            <motion.div className="text-white max-w-4xl" variants={containerVariants}>
              <motion.p id="our-care-continuum" className="text-xs uppercase tracking-[0.4em] text-blue-100 mb-4" variants={itemVariants}>OUR CARE CONTINUUM</motion.p>
              <motion.h1 className="text-3xl lg:text-5xl font-serif font-semibold leading-tight" variants={itemVariants}>
                Thoughtfully crafted services on a single page
              </motion.h1>
              <motion.p className="mt-6 text-lg max-w-3xl text-blue-100/90" variants={itemVariants}>
                Below you'll find detailed information starting with our Assisted Living approach followed by
                Medication Management and 24/7 Additional Care onsite. Other services are summarized below.
              </motion.p>
              <motion.div className="mt-8 flex flex-wrap gap-4" variants={itemVariants}>
                <button
                  onClick={openModal}
                  className="px-6 py-3 rounded-full bg-white text-blue-900 font-semibold shadow-lg hover:-translate-y-0.5 transition"
                >
                  Contact Us
                </button>
                <a href="tel:+12103226621" className="px-6 py-3 rounded-full border border-white/50 text-white font-semibold hover:bg-white/10 transition">
                  Call Us
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Assisted Living — main content */}
        <section id="assisted-living" className="container mx-auto px-4 py-16">
          <motion.div className="grid gap-8 lg:grid-cols-2 items-center" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <motion.div className="space-y-6" variants={itemVariants}>
              <div className="inline-flex items-center gap-3">
                <span className="inline-flex items-center justify-center bg-blue-100 text-blue-700 rounded-full p-3 shadow-sm">
                  <FaHouseDamage size={20} />
                </span>
                <p className="text-sm uppercase tracking-[0.4em] text-blue-500">ASSISTED LIVING</p>
              </div>
              <h2 className="text-3xl font-serif text-slate-900">Graceful daily living with 24/7 professional support.</h2>
              <p className="mt-2 text-slate-600 max-w-2xl">Residents enjoy boutique-style apartments, personalized care plans, and enrichment experiences that celebrate every win.</p>

              <div className="mt-4 grid gap-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-emerald-500 mt-1" />
                  <div>
                    <p className="font-medium">Medication reminders and licensed nurse oversight</p>
                    <p className="text-sm text-slate-600">Individualized administration and regular clinical reviews.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaUtensils className="text-rose-500 mt-1" />
                  <div>
                    <p className="font-medium">Chef-led dining and family communication</p>
                    <p className="text-sm text-slate-600">Restaurant-style meals and family-friendly updates.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaUserNurse className="text-blue-500 mt-1" />
                  <div>
                    <p className="font-medium">Neighborhood-based caregiving and programs</p>
                    <p className="text-sm text-slate-600">Small teams deliver consistent, relationship-centered care.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button onClick={openModal} className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl shadow hover:scale-[1.02] transition">Contact Us</button>
                <a href="#medication-management" className="inline-flex items-center gap-2 border border-slate-200 px-5 py-3 rounded-xl text-slate-700 hover:bg-slate-50 transition">See Medication Management</a>
              </div>
            </motion.div>

            <motion.div className="rounded-3xl overflow-hidden shadow-lg bg-white" variants={itemVariants}>
              <img src={assistedImg} alt="Assisted Living" className="w-full h-72 md:h-[420px] object-cover" />
            </motion.div>
          </motion.div>
        </section>

        {/* Medication Management - full viewport height */}
        <motion.section id="medication-management" className="relative h-[calc(100vh-4rem)] bg-white" aria-labelledby="med-management"
          variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}
        >
          <div className="container mx-auto px-4 h-full flex items-center">
            <motion.div className="w-full grid lg:grid-cols-2 gap-8 items-center" variants={containerVariants}>
              <motion.div className="order-2 lg:order-1" variants={itemVariants}>
                <div className="inline-flex items-center gap-3">
                  <span className="inline-flex items-center justify-center bg-emerald-100 text-emerald-700 rounded-full p-3 shadow-sm">
                    <FaPills size={20} />
                  </span>
                  <p id="med-management" className="text-sm uppercase tracking-[0.4em] text-blue-500">MEDICATION MANAGEMENT</p>
                </div>
                <h2 className="text-3xl font-serif text-slate-900 mt-4">Pharmacy partnerships and vigilant monitoring for every resident.</h2>
                <p className="mt-4 text-slate-600">Licensed nurses oversee every dose with triple-check systems, digital charting, and family transparency.</p>

                <div className="mt-4 grid gap-3">
                  <div className="flex items-start gap-3">
                    <FaClipboardList className="text-blue-500 mt-1" />
                    <div>
                      <p className="font-medium">Electronic MAR with barcode scanning and alerts</p>
                      <p className="text-sm text-slate-600">Real-time medication records and alerts for accuracy.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-emerald-500 mt-1" />
                    <div>
                      <p className="font-medium">Pharmacist reviews and polypharmacy oversight</p>
                      <p className="text-sm text-slate-600">Dedicated clinical reviews to reduce risk and interactions.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaUserNurse className="text-rose-500 mt-1" />
                    <div>
                      <p className="font-medium">24/7 clinical collaboration and fast response to changes</p>
                      <p className="text-sm text-slate-600">Continuous nurse oversight with rapid provider escalation.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <button onClick={openModal} className="inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-3 rounded-xl shadow hover:scale-[1.02] transition"><FaUserNurse /> Request Medication Review</button>
                </div>
              </motion.div>
              <motion.div className="order-1 lg:order-2" variants={itemVariants}>
                <img src={medImg} alt="Medication Management" className="w-full rounded-3xl shadow-lg object-cover h-64 lg:h-[60vh]" />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Additional Care Onsite */}
        <section id="additional-care" className="container mx-auto px-4 py-16">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-blue-500">24/7 ADDITIONAL CARE ONSITE</p>
              <h2 className="text-3xl font-serif text-slate-900 mt-4">Short-term stays, respite, and around-the-clock support.</h2>
              <p className="mt-4 text-slate-600">We offer furnished suites for trial or respite stays, a transition concierge, and on-site nursing so families can rest easy.</p>
              <ul className="mt-4 space-y-2 text-slate-600">
                <li>Move-in ready suites and arrival concierge</li>
                <li>24/7 nursing coverage and medication coordination</li>
                <li>Flexible trial stays that support caregiver transitions</li>
              </ul>
            </div>
            <div>
              <div className="rounded-3xl bg-gradient-to-br from-amber-50 to-white p-8 shadow-lg">
                <p className="font-semibold">One to twenty nurses available for you!</p>
                <p className="mt-2 text-slate-600">Flexible nursing coverage scaled to your needs — from short-term support to ongoing on-site care, staffed by licensed professionals.</p>
                <ul className="mt-3 space-y-2 text-slate-600">
                  <li>Personalized care plans matched to individual clinical needs</li>
                  <li>Scalable coverage: 1–20 nurses available for short or extended stays</li>
                  <li>Seamless coordination with families, transport, and discharge planning</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Other Services Summary */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <p className="text-sm uppercase tracking-[0.4em] text-blue-500">ADDITIONAL SERVICES</p>
            <h2 className="text-3xl font-serif text-slate-900 mt-4">Other ways we support residents</h2>
            <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
              <motion.div whileHover={{ y: -6 }} className="p-8 md:p-10 rounded-3xl border shadow-md flex items-center gap-8 bg-white min-h-[140px]">
                <img src={imgIndependent} alt="Independent Living" className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-lg object-cover shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Independent Living</h3>
                  <p className="text-sm md:text-base text-slate-600">Boutique residences with community programming and optional services.</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -6 }} className="p-8 md:p-10 rounded-3xl border shadow-md flex items-center gap-8 bg-white min-h-[140px]">
                <img src={imgTech} alt="Technology & Telehealth" className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-lg object-cover shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Technology & Telehealth</h3>
                  <p className="text-sm md:text-base text-slate-600">Virtual visits, telemedicine support, and tech concierge services.</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -6 }} className="p-8 md:p-10 rounded-3xl border shadow-md flex items-center gap-8 bg-white min-h-[140px]">
                <img src={imgGroom} alt="On-site grooming and wellness" className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-lg object-cover shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">On-site grooming and wellness</h3>
                  <p className="text-sm md:text-base text-slate-600">On-site grooming and wellness services for comfort and dignity.</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -6 }} className="p-8 md:p-10 rounded-3xl border shadow-md flex items-center gap-8 bg-white min-h-[140px]">
                <img src={imgTransport} alt="Transportation Concierge" className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-lg object-cover shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Transportation Concierge</h3>
                  <p className="text-sm md:text-base text-slate-600">Door-to-door transportation for appointments and outings.</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -6 }} className="p-8 md:p-10 rounded-3xl border shadow-md flex items-center gap-8 bg-white min-h-[140px]">
                <img src={imgFamily} alt="Family Concierge" className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-lg object-cover shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Family Concierge</h3>
                  <p className="text-sm md:text-base text-slate-600">Communication and coordination support for families and POAs.</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -6 }} className="p-8 md:p-10 rounded-3xl border shadow-md flex items-center gap-8 bg-white min-h-[140px]">
                <img src={imgNurses} alt="1-20 Nurses" className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-lg object-cover shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">1-20 Nurses</h3>
                  <p className="text-sm md:text-base text-slate-600">1–20 nurses for you caring!</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServicesOverview;



import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaHandsHelping,
  FaBrain,
  FaHome,
  FaCalendarCheck,
  FaPills,
  FaArrowRight,
} from 'react-icons/fa';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import heroImage from '../../Images/Homepage.png';
import { useInquiryModal } from '../../context/InquiryModalContext';

const services = [
  {
    name: 'Assisted Living',
    description: 'Personalized support, chef-crafted dining, and enriching routines.',
    icon: <FaHandsHelping />,
    path: '/services/assisted-living',
    color: 'from-blue-500/15 to-blue-200/20',
  },
  {
    name: 'Memory Care',
    description: 'Secure neighborhoods with sensory programming and dementia specialists.',
    icon: <FaBrain />,
    path: '/services/memory-care',
    color: 'from-purple-500/15 to-purple-200/20',
  },
  {
    name: 'Independent Living',
    description: 'Luxury residences, concierge services, and vibrant social calendars.',
    icon: <FaHome />,
    path: '/services/independent-living',
    color: 'from-emerald-500/15 to-emerald-200/20',
  },
  {
    name: 'Respite Care',
    description: 'Furnished short stays that support caregivers and delight guests.',
    icon: <FaCalendarCheck />,
    path: '/services/respite-care',
    color: 'from-orange-500/15 to-orange-200/20',
  },
  {
    name: 'Medication Management',
    description: 'Licensed nurse oversight, digital med records, and pharmacy partners.',
    icon: <FaPills />,
    path: '/services/medication-management',
    color: 'from-teal-500/15 to-teal-200/20',
  },
];

const ServicesOverview = () => {
  const { openModal } = useInquiryModal();
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen bg-slate-50 font-sans">
        <section className="relative overflow-hidden">
          <div
            className="relative z-10"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 64, 175, 0.75)), url(${heroImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="container mx-auto px-4 py-24 text-white">
              <p className="text-xs uppercase tracking-[0.4em] text-blue-100 mb-4">
                OUR CARE CONTINUUM
              </p>
              <h1 className="text-3xl lg:text-5xl font-serif font-semibold max-w-4xl leading-tight">
                Thoughtfully crafted services for every chapter of senior living.
              </h1>
              <p className="mt-6 text-lg max-w-3xl text-blue-100/90">
                From independent living to specialized memory care, San Antonio Senior Living empowers
                residents with flexible support, luxury amenities, and clinical confidence — all on one
                boutique campus.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={openModal}
                  className="px-6 py-3 rounded-full bg-white text-blue-900 font-semibold shadow-lg hover:-translate-y-0.5 transition"
                >
                  Connect with a Care Advisor
                </button>
                <a
                  href="tel:+12106061146"
                  className="px-6 py-3 rounded-full border border-white/50 text-white font-semibold hover:bg-white/10 transition"
                >
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <p className="text-sm uppercase tracking-[0.4em] text-blue-500">
              SERVICE MENU
            </p>
            <h2 className="text-3xl font-serif text-slate-900">
              Explore the care path that fits today and tomorrow.
            </h2>
            <p className="text-slate-600">
              Choose a service to see detailed programming, daily rhythms, and family resources. Our team
              will help you transition seamlessly between levels of care whenever needs evolve.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.name}
                to={service.path}
                className={`group relative overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-br ${service.color} shadow-lg shadow-slate-200/60 p-6 transition transform hover:-translate-y-1`}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-white text-blue-600 flex items-center justify-center text-xl shadow-md">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif text-slate-900">{service.name}</h3>
                      <p className="text-sm text-slate-500">Tap to view service details</p>
                    </div>
                  </div>
                  <p className="text-slate-600">{service.description}</p>
                  <div className="inline-flex items-center text-blue-700 font-semibold">
                    Explore this service
                    <FaArrowRight className="ml-2 transition group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container mx-auto px-4 grid gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.4em] text-blue-500">
                CONTINUUM OF CARE
              </p>
              <h2 className="text-3xl font-serif text-slate-900">
                Transition effortlessly as support needs change.
              </h2>
              <p className="text-slate-600">
                We maintain continuity by sharing care notes, introducing familiar team members, and
                keeping residents within their community of friends whenever possible.
              </p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-blue-500" />
                  Dedicated transition coordinator and move team
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-blue-500" />
                  Shared electronic health records for all service levels
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-blue-500" />
                  Family planning sessions for proactive decisions
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-100 bg-slate-900 text-white p-8 space-y-6 shadow-lg">
              <p className="text-sm uppercase tracking-[0.4em] text-blue-200">
                CARE ADVISORS
              </p>
              <h3 className="text-3xl font-serif">
                Not sure which service is right? Let’s map it together.
              </h3>
              <p className="text-blue-100">
                Share your loved one’s interests, care needs, and timeline. We will craft a
                personalized plan with pricing, availability, and next steps.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={openModal}
                  className="px-6 py-3 rounded-full bg-white text-blue-900 font-semibold shadow-lg hover:-translate-y-0.5 transition"
                >
                  Start Conversation
                </button>
                <a
                  href="mailto:CaraFaux@sacompassionatecare.com,DaiNguyen@sacompassionatecare.com"
                  className="px-6 py-3 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition"
                >
                  Email Cara & Dai
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServicesOverview;



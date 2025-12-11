import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInquiryModal, useScheduleTourModal } from '../context/InquiryModalContext';
import {
  FaPalette,
  FaGuitar,
  FaSeedling,
  FaWalking,
  FaUsers,
  FaCamera,
  FaLeaf,
  FaHeart,
} from 'react-icons/fa';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import heroImage from '../Images/Homepage.png';
import nurseImage from '../Images/nurse-tablet.avif';
import doctorImage from '../Images/doctor-patient.png';

const gardenImage =
  'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1200&q=80&ixlib=rb-4.0.3';
const shoppingImage =
  'https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=1200&q=80&ixlib=rb-4.0.3';
const culinaryImage =
  'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1200&q=80&ixlib=rb-4.0.3';
const musicImage =
  'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80&ixlib=rb-4.0.3';

const spotlightActivities = [
  {
    title: 'Creative Studio Residency',
    description:
      'Guided art therapy, pottery wheels, and watercolor labs celebrate lifelong imagination.',
    icon: <FaPalette />,
    highlights: ['Weekly gallery showcases', 'Guest artists-in-residence', 'Intergenerational classes'],
  },
  {
    title: 'Front Porch Sessions',
    description:
      'Acoustic concerts, poetry nights, and storytelling circles nurture connection every evening.',
    icon: <FaGuitar />,
    highlights: ['Resident emcee program', 'Song request library', 'Seasonal outdoor stage'],
  },
  {
    title: 'Roots & Blooms Garden Club',
    description:
      'Raised-bed gardens, herb tastings, and floral arranging keep hands in the soil year-round.',
    icon: <FaSeedling />,
    highlights: ['Chef partnerships', 'Butterfly habitat projects', 'Community farmers market'],
  },
];

const dayInLife = [
  {
    time: '8:30 AM',
    title: 'Mindful Riverwalk',
    details: 'Guided stretch + scenic stroll with our wellness coaches and hydration cart.',
    icon: <FaWalking />,
  },
  {
    time: '11:00 AM',
    title: 'Chef’s Table Tasting',
    details: 'Hands-on culinary demo focused on heart-healthy menus and Mediterranean flavors.',
    icon: <FaHeart />,
  },
  {
    time: '2:00 PM',
    title: 'Community Collaborations',
    details: 'Volunteer with local schools assembling care kits or mentoring young musicians.',
    icon: <FaUsers />,
  },
  {
    time: '6:30 PM',
    title: 'Golden Hour Photo Club',
    details: 'Learn composition tips, capture sunsets, and curate digital albums for families.',
    icon: <FaCamera />,
  },
];

const retreatExperiences = [
  {
    image: gardenImage,
    eyebrow: 'SOULFUL GARDENS',
    title: 'Sensory botanicals & tea rituals',
    description:
      'From lavender distilling to horticulture therapy, residents design arrangements for our boutique lobby and assisted living suites.',
    features: ['Hydroponic tower gardens', 'Seed exchange & storytelling', 'Tea tastings with wellness team'],
  },
  {
    image: nurseImage,
    eyebrow: 'WELLNESS POP-UPS',
    title: 'Restorative mini-retreats',
    description:
      'Sound baths, chair massage, and guided breathwork pop up in our atrium every Thursday, supporting balance and calm.',
    features: ['Licensed therapists on-site', 'Aromatherapy blending bar', 'Mindfulness journaling kits'],
  },
  {
    image: doctorImage,
    eyebrow: 'MEET THE DOCTOR ONSITE',
    title: 'Meet the doctor onsite',
    description:
      'Residents and families can sit down with our medical director for comforting check-ins, proactive care planning, and easy-to-understand wellness guidance without leaving campus.',
    features: ['Same-day wellness reviews', 'Family Q&A lounge sessions', 'Medication tune-up consultations'],
  },
  {
    image: shoppingImage,
    eyebrow: 'GROUP SHOPPING',
    title: 'Group shopping escapes',
    description:
      'Hop aboard our concierge shuttle to enjoy curated outings at botanical boutiques, artisan markets, and neighborhood grocers with a team member by your side.',
    features: ['Personalized shopping assistance', 'Fresh floral + produce runs', 'Story-sharing café breaks'],
  },
  {
    image: culinaryImage,
    eyebrow: 'CULINARY CREATORS',
    title: 'Heritage kitchen collaborations',
    description:
      'Residents and chefs swap family recipes, hand-roll pasta, and infuse teas in our demonstration kitchen before plating everything for neighbors and guests.',
    features: ['Chef-led masterclasses', 'Family recipe library', 'Tasting flights & storytelling'],
  },
  {
    image: musicImage,
    eyebrow: 'SUNSET SESSION',
    title: 'Sunset music salons',
    description:
      'Local musicians, resident pianists, and family guests gather for unplugged sets at dusk – complete with mocktails, terrace breezes, and sing-along moments.',
    features: ['Weekly guest performers', 'Lyric books & percussion props', 'All-abilities jam circles'],
  },
];

const CommunityActivities = () => {
  const { openModal } = useInquiryModal();
  const { openModal: openTourModal } = useScheduleTourModal();
  return (
    <>
      <Navbar />
      <main className="bg-slate-50 min-h-screen font-sans">
        {/* Hero */}
        <motion.section
          className="relative overflow-hidden min-h-screen flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative z-10 w-full min-h-screen flex items-center pt-20"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(15,23,42,0.85), rgba(37,99,235,0.75)), url(${heroImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="container mx-auto px-4 py-16 text-white space-y-6 w-full">
              <motion.p
                className="text-xs uppercase tracking-[0.4em] text-blue-100"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                COMMUNITY ACTIVITIES
              </motion.p>
              <motion.div
                className="max-w-4xl space-y-4"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h1 className="text-3xl lg:text-5xl font-serif font-semibold leading-tight">
                  Assisted living life at San Antonio is vibrant, purposeful, and full of beautiful surprises.
                </h1>
                <p className="text-lg text-blue-100/90">
                  Every gathering is designed with resident interests, clinical insights, and family feedback in mind.
                  Expect curated adventures, small joys, and heartfelt connections every day.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.button
                  onClick={openTourModal}
                  className="px-6 py-3 rounded-full bg-white text-blue-900 font-semibold shadow-lg hover:-translate-y-0.5 transition"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Plan a Visit
                </motion.button>
                <a
                  href="mailto:info@sacompassionatecare.com"
                  className="px-6 py-3 rounded-full border border-white/50 text-white font-semibold hover:bg-white/10 transition"
                >
                  Email Us
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* Spotlight */}
        <motion.section
          className="container mx-auto px-4 py-16 space-y-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="space-y-4 text-center max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.4em] text-blue-500">SPOTLIGHT SERIES</p>
            <h2 className="text-3xl font-serif text-slate-900">Signature gatherings rooted in joy.</h2>
            <p className="text-slate-600">
              Residents co-create our monthly calendar. We layer therapeutic goals with delightful experiences that
              keep bodies moving, minds curious, and spirits grounded.
            </p>
          </motion.div>
          <div className="grid gap-6 lg:grid-cols-3">
            {spotlightActivities.map((activity, index) => (
              <motion.div
                key={activity.title}
                className="bg-white rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/60 p-6 flex flex-col gap-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl">
                  {activity.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{activity.title}</h3>
                  <p className="mt-2 text-slate-600 text-sm">{activity.description}</p>
                </div>
                <ul className="space-y-2 mt-2">
                  {activity.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Day in life timeline */}
        <motion.section
          className="bg-white py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4 space-y-10">
            <div className="text-center space-y-4">
              <p className="text-sm uppercase tracking-[0.4em] text-blue-500">DAY IN THE LIFE</p>
              <h2 className="text-3xl font-serif text-slate-900">Moments that make each day meaningful.</h2>
              <p className="text-slate-600 max-w-3xl mx-auto">
                Our programming balances movement, creativity, social connection, and restorative downtime —
                essential for thriving in assisted living.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {dayInLife.map((event, index) => (
                <motion.div
                  key={event.title}
                  className="rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-6 flex gap-4 items-start shadow-sm"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-xl">
                    {event.icon}
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.4em] text-blue-500">{event.time}</p>
                    <h3 className="text-xl font-semibold text-slate-900">{event.title}</h3>
                    <p className="text-sm text-slate-600">{event.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Retreat experiences */}
        <motion.section
          className="container mx-auto px-4 py-16 space-y-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {retreatExperiences.map((experience, idx) => (
              <motion.div
                key={experience.title}
                className="rounded-3xl border border-white shadow-2xl bg-white/80 overflow-hidden flex flex-col"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ translateY: -6 }}
              >
                <motion.div className="h-48 overflow-hidden" whileHover={{ scale: 1.02 }}>
                  <motion.img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>
                <div className="flex-1 p-6 space-y-4">
                  <p className="text-xs uppercase tracking-[0.4em] text-blue-500">{experience.eyebrow}</p>
                  <h3 className="text-2xl font-serif text-slate-900">{experience.title}</h3>
                  <p className="text-slate-600 text-sm">{experience.description}</p>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    {experience.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <FaLeaf className="text-green-500 mt-1 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="container mx-auto px-4 pb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="rounded-3xl bg-gradient-to-r from-blue-700 via-blue-500 to-teal-400 text-white p-10 shadow-xl flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between"
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-blue-100">JOIN US</p>
              <h3 className="text-3xl font-serif">
                Visit during a community activity and feel the energy for yourself.
              </h3>
              <p className="text-blue-50/90">
                Bring family, plan a respite staycation, or attend one of our open workshops.
                We will reserve seats and introduce you to resident ambassadors.
              </p>
            </div>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.button
                onClick={openTourModal}
                className="px-6 py-3 rounded-full bg-white text-blue-700 font-semibold shadow-lg hover:-translate-y-0.5 transition text-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
              <a
                href="tel:+12103226621"
                className="px-6 py-3 rounded-full border border-white/60 text-white font-semibold hover:bg-white/10 transition text-center"
              >
                Call Us
              </a>
            </motion.div>
          </motion.div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
};

export default CommunityActivities;



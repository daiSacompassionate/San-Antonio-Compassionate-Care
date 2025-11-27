import React from 'react';
import {
  FaCalendarCheck,
  FaCoffee,
  FaUserNurse,
  FaBed,
  FaSun,
} from 'react-icons/fa';
import ServicePageLayout from './ServicePageLayout';
import heroImage from '../../Images/Homepage.png';

const RespiteCare = () => {
  const hero = {
    eyebrow: 'RESPITE CARE',
    title: 'Short-term stays that recharge caregivers and delight guests.',
    description:
      'Flexible stays from 7 to 60 days include furnished suites, full care support, and immersive programming.',
    image: heroImage,
    highlights: ['Move-in ready suites', 'Medication coordination', '24/7 nursing'],
    stats: [
      { label: 'Minimum stay', value: '7 days', detail: 'Flexible arrivals' },
      { label: 'Included services', value: 'All', detail: 'Dining, care, programs' },
      { label: 'Transition success', value: '82%', detail: 'Guests choose to extend' },
    ],
  };

  const focusAreas = {
    title: 'Everything is prepared before you arrive',
    subtitle:
      'Our transition concierge handles paperwork, transportation, and comfort preferences.',
    items: [
      {
        title: 'Arrival Concierge',
        description: 'Transportation, welcome basket, and technology setup.',
        icon: <FaCalendarCheck />,
        points: ['Physician paperwork coordination', 'Family orientation'],
      },
      {
        title: 'Clinical Confidence',
        description: 'RN assessments and medication management included.',
        icon: <FaUserNurse />,
        points: ['Care notes shared with physicians', '24/7 emergency response'],
      },
      {
        title: 'Comfort Menu',
        description: 'Hotel-style linens, curated snacks, and favorite beverages.',
        icon: <FaCoffee />,
        points: ['Custom pillow menu', 'Smart TV & Wi-Fi'],
      },
      {
        title: 'Restorative Routine',
        description: 'Wellness activities blended with downtime.',
        icon: <FaBed />,
        points: ['Daily housekeeping', 'Guided relaxation'],
      },
    ],
  };

  const programs = [
    {
      timeframe: 'Day 1',
      title: 'Settling In',
      description: 'Warm introductions and comfort-first orientation.',
      bullets: [
        'Personal host escort & unpacking assistance',
        'Nurse assessment & family conference call',
        'Dinner with welcome committee',
      ],
    },
    {
      timeframe: 'Stay Highlights',
      title: 'Choose Your Adventure',
      description: 'Guests curate their calendar based on interests.',
      bullets: [
        'Music, art, fitness & culinary socials',
        'Spa days and on-site salon services',
        'Faith-based and cultural gatherings',
      ],
    },
    {
      timeframe: 'Departure',
      title: 'Smooth Hand-off',
      description: 'We provide recap notes and recommendations.',
      bullets: [
        'Discharge summary for primary physician',
        'Transportation & home restock assistance',
        'Priority access for future stays',
      ],
    },
  ];

  const wellness = [
    {
      badge: 'Family Renewal',
      title: 'Caregiver relief with peace of mind',
      description:
        'Daily text updates, video calls, and transparent care notes make time away truly restful.',
      features: [
        'Secure family portal',
        'Weekly virtual care conferences',
        'Photo highlights from activities',
      ],
    },
    {
      badge: 'Bridge to Senior Living',
      title: 'Trial stays for future planning',
      description:
        'Experience our community before making a long-term decision. Many respite guests become residents.',
      features: [
        'Option to convert stay with preferred pricing',
        'Priority suite selection',
        'Move-in team ready if you choose to stay',
      ],
    },
  ];

  const testimonials = [
    {
      quote:
        'We booked a three-week respite stay before a family wedding. Mom was pampered, social, and now insists on returning for holidays.',
      name: 'Gabriela M.',
      role: 'Caregiver',
    },
    {
      quote:
        'As a full-time nurse, I needed a break I could feel good about. The updates and smiling photos eased every worry.',
      name: 'Anthony M.',
      role: 'Son & caregiver',
    },
  ];

  const cta = {
    eyebrow: 'PLAN A RESPITE',
    title: 'Reserve a furnished suite and customize your loved one’s stay.',
    description:
      'Share your preferred dates and we will coordinate everything from transportation to therapy appointments.',
    primaryAction: 'Request for visit',
    secondaryAction: 'Call Respite Concierge',
  };

  return (
    <ServicePageLayout
      hero={hero}
      focusAreas={focusAreas}
      programs={programs}
      wellness={wellness}
      testimonials={testimonials}
      cta={cta}
    />
  );
};

export default RespiteCare;





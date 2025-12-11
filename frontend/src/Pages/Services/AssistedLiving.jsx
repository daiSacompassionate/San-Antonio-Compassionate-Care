import React from 'react';
import { FaHandsHelping, FaHeartbeat, FaUtensils, FaSpa } from 'react-icons/fa';
import ServicePageLayout from './ServicePageLayout';
import heroImage from '../../Images/nurse-tablet.avif';

const AssistedLiving = () => {
  const hero = {
    eyebrow: 'ASSISTED LIVING',
    title: 'Graceful daily living with 24/7 professional support.',
    description:
      'Residents enjoy boutique-style apartments, personalized care plans, and enrichment experiences that celebrate every win.',
    image: heroImage,
    highlights: ['Medication reminders', 'Chef-led dining', 'Family updates'],
    stats: [
      { label: 'Nurse coverage', value: '24/7', detail: 'On-site clinical team' },
      { label: 'Care ratio', value: '1:6', detail: 'Personal caregivers per neighborhood' },
      { label: 'Resident satisfaction', value: '97%', detail: 'Families recommend us' },
    ],
  };

  const focusAreas = {
    title: 'Support that feels like family',
    subtitle:
      'Each care plan blends independence with safety, adapting as needs evolve.',
    items: [
      {
        title: 'Daily Living Support',
        description: 'Gentle assistance with bathing, grooming, dressing, and mobility.',
        icon: <FaHandsHelping />,
        points: ['Respectful privacy routines', 'Fall-prevention coaching'],
      },
      {
        title: 'Wellness Monitoring',
        description: 'Vitals, hydration, and medication tracking led by our nurses.',
        icon: <FaHeartbeat />,
        points: ['Digital charting updates', 'Weekly physician rounds'],
      },
      {
        title: 'Chef-Led Cuisine',
        description: 'Fresh, heart-healthy menus tailored to preferences and allergies.',
        icon: <FaUtensils />,
        points: ['Farm-to-table sourcing', 'Flexible dining hours'],
      },
      {
        title: 'Rest & Renewal',
        description: 'Therapeutic spa suite and calming sensory lounges.',
        icon: <FaSpa />,
        points: ['Guided stretching sessions', 'Aromatherapy evenings'],
      },
    ],
  };

  const programs = [
    {
      timeframe: 'Sunrise Routine',
      title: 'Morning Momentum',
      description: 'Companion-led wake-up rituals that energize the day.',
      bullets: [
        'Vital checks & personalized hydration',
        'Outdoor mindful walks or chair yoga',
        'Breakfast clubs with neighbors',
      ],
    },
    {
      timeframe: 'Midday',
      title: 'Creative Engagement',
      description: 'Brain fitness, music, and intergenerational meetups.',
      bullets: [
        'Art therapy & storytelling studios',
        'Community volunteering projects',
        'One-on-one cognitive sessions',
      ],
    },
    {
      timeframe: 'Evening',
      title: 'Tranquil Nights',
      description: 'Wind-down rituals designed for restorative sleep.',
      bullets: [
        'Guided meditation & soft lighting',
        'Comfort check-ins every two hours',
        'Family video chats & journaling',
      ],
    },
  ];

  const wellness = [
    {
      badge: 'Holistic Life',
      title: 'Elevated lifestyle programming',
      description:
        'Residents choose from over 40 weekly clubs ranging from culinary labs to poetry circles.',
      features: [
        'Signature “Taste of Texas” culinary demos',
        'Neighborhood socials with live acoustic sets',
        'Technology concierge for telehealth and family calls',
      ],
    },
    {
      badge: 'Integrated Care',
      title: 'Clinical confidence & communication',
      description:
        'Our care team collaborates with physicians and families so everyone stays informed.',
      features: [
        'Secure family portal with daily snapshots',
        'Medication reconciliation with pharmacists',
        'On-site rehab partners for PT/OT/ST',
      ],
    },
  ];

  const testimonials = [
    {
      quote:
        'Mom feels seen and celebrated here. Her caregivers know her morning tea order and the stories she loves sharing.',
      name: 'Elena R.',
      role: 'Daughter of resident',
    },
    {
      quote:
        'The staff gently encouraged Dad to join the men’s breakfast club, and now it’s his favorite part of the week.',
      name: 'Marcus L.',
      role: 'Family member',
    },
  ];

  const cta = {
    eyebrow: 'NEXT STEPS',
    title: 'See how assisted living in San Antonio can feel boutique and warm.',
    description:
      'Schedule a private tour, review suites, and sit down with our nurse to map a personalized transition plan.',
    primaryAction: 'Plan a Visit',
    secondaryAction: 'Call the Care Team',
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

export default AssistedLiving;


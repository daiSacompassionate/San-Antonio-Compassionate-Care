import React from 'react';
import {
  FaSwimmer,
  FaLeaf,
  FaGlobeAmericas,
  FaChalkboardTeacher,
  FaBiking,
} from 'react-icons/fa';
import ServicePageLayout from './ServicePageLayout';
import heroImage from '../../Images/selfliving.jpg';

const IndependentLiving = () => {
  const hero = {
    eyebrow: 'INDEPENDENT LIVING',
    title: 'Boutique residences with concierge ease and vibrant community.',
    description:
      'Downsize the chores, keep the freedom. Residents design their days with wellness clubs, curated dining, and city excursions.',
    image: heroImage,
    highlights: ['Maintenance-free suites', 'Lifestyle concierge', 'Pet-friendly'],
    stats: [
      { label: 'Clubs & classes', value: '55+', detail: 'Weekly experiences' },
      { label: 'Concierge requests', value: '10min', detail: 'Average response time' },
      { label: 'Scheduled outings', value: '3x/week', detail: 'San Antonio adventures' },
    ],
  };

  const focusAreas = {
    title: 'Live boldly, supported quietly',
    subtitle: 'Hospitality-driven services let residents pour energy into what they love.',
    items: [
      {
        title: 'Lifestyle Concierge',
        description: 'Transportation, reservations, and personal errands handled for you.',
        icon: <FaGlobeAmericas />,
        points: ['Door-to-door chauffeur', 'Weekly housekeeping & laundry'],
      },
      {
        title: 'Effortless Wellness',
        description: 'Aquatics, Pilates reformers, and brain gyms steps from your door.',
        icon: <FaSwimmer />,
        points: ['Heated saltwater pool', 'Personal training studio'],
      },
      {
        title: 'Nature & Nutrition',
        description: 'Chef gardens, rooftop lounges, and al fresco dining.',
        icon: <FaLeaf />,
        points: ['Garden-to-table menus', 'Outdoor meditation deck'],
      },
      {
        title: 'Lifelong Learning',
        description: 'University partnerships, lectures, and maker labs.',
        icon: <FaChalkboardTeacher />,
        points: ['Guest professors weekly', 'Creative arts studio access'],
      },
    ],
  };

  const programs = [
    {
      timeframe: 'Weekdays',
      title: 'Urban Explorers',
      description: 'Rotating excursions curated by our concierge team.',
      bullets: [
        'Broadway in San Antonio series seats',
        'Museum docent-led private tours',
        'Hill Country wine tastings',
      ],
    },
    {
      timeframe: 'Wellness',
      title: 'Movement & Balance',
      description: 'Daily opportunities to stay active at every level.',
      bullets: [
        'Sunrise cycling club & river walks',
        'Mindful mobility labs with physical therapists',
        'Pickleball mixers and tai chi garden',
      ],
    },
    {
      timeframe: 'Creative Scene',
      title: 'Culture & Connection',
      description: 'Spotlight your passions or discover new ones.',
      bullets: [
        'Resident-hosted speaker salons',
        'Maker-space with 3D printers & pottery kilns',
        'Volunteering with local schools',
      ],
    },
  ];

  const wellness = [
    {
      badge: 'Dining Passport',
      title: 'Five venues, endless flavor',
      description:
        'Casual cafés, chef’s table tastings, and rooftop cocktails keep dining social and flexible.',
      features: [
        'Anytime dining & room service',
        'Chef chats & cooking classes',
        'Seasonal supper clubs with guest chefs',
      ],
    },
    {
      badge: 'Future Planning',
      title: 'Peace of mind built in',
      description:
        'Priority access to assisted living and care coordination gives families clarity for tomorrow.',
      features: [
        'On-site nurse navigator consultations',
        'Telehealth suites & wellness tech',
        'Quarterly longevity planning sessions',
      ],
    },
  ];

  const testimonials = [
    {
      quote:
        'I traded yard work for riverwalk mornings with neighbors. The concierge even booked my art residency.',
      name: 'Helena F.',
      role: 'Resident since 2023',
    },
    {
      quote:
        'Dad’s calendar is packed—Spanish lessons, pickleball tournaments, and volunteering at the museum.',
      name: 'Tyler S.',
      role: 'Son of resident',
    },
  ];

  const cta = {
    eyebrow: 'DISCOVER INDEPENDENT LIVING',
    title: 'Reserve a complimentary staycation suite and sample the lifestyle.',
    description:
      'Spend a weekend in our guest residence, dine with future neighbors, and explore concierge offerings.',
    primaryAction: 'Request for visit',
    secondaryAction: 'Talk with Concierge',
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

export default IndependentLiving;





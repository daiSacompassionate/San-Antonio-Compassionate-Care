import React from 'react';
import {
  FaBrain,
  FaMusic,
  FaShieldAlt,
  FaPuzzlePiece,
  FaFeatherAlt,
  FaMoon,
} from 'react-icons/fa';
import ServicePageLayout from './ServicePageLayout';
import heroImage from '../../Images/doctor-patient.png';

const MemoryCare = () => {
  const hero = {
    eyebrow: 'MEMORY CARE',
    title: 'Secure neighborhoods that spark recognition and joy.',
    description:
      'Our memory care households feature sensory cues, purposeful routines, and compassionate guides trained in positive approach care.',
    image: heroImage,
    highlights: ['Certified dementia practitioners', 'Secure garden courtyards', 'Family coaching'],
    stats: [
      { label: 'Specialists on-site', value: '8', detail: 'Certified dementia guides' },
      { label: 'Engagement touchpoints', value: '120+', detail: 'Moments of purpose weekly' },
      { label: 'Family coaching hours', value: '4', detail: 'Monthly education series' },
    ],
  };

  const focusAreas = {
    title: 'Care designed around each story',
    subtitle: 'We focus on what remains strong — music, muscle memory, and emotional connection.',
    items: [
      {
        title: 'Cognitive Pathways',
        description: 'Multi-sensory stations tailored to familiar careers and hobbies.',
        icon: <FaBrain />,
        points: ['Life-story mapping', 'Reminiscence nooks'],
      },
      {
        title: 'Rhythm & Music',
        description: 'Live music therapy, choral circles, and drum fit classes.',
        icon: <FaMusic />,
        points: ['Certified music therapists', 'Personal playlists'],
      },
      {
        title: 'Protected Independence',
        description: 'Secure garden walks and activity kitchens with adaptive tools.',
        icon: <FaShieldAlt />,
        points: ['Wander-guard technology', 'Wayfinding cues'],
      },
      {
        title: 'Purposeful Touchpoints',
        description: 'Frequent positive interactions that reinforce trust.',
        icon: <FaPuzzlePiece />,
        points: ['Gentle hand-under-hand support', 'Comfort communication'],
      },
    ],
  };

  const programs = [
    {
      timeframe: 'Morning',
      title: 'Orientation & Movement',
      description: 'Grounding rituals that cue time-of-day and stimulate circulation.',
      bullets: [
        'Sunrise light therapy & aromatics',
        'Neighborhood news boards & gratitude prompts',
        'Guided stretching with familiar songs',
      ],
    },
    {
      timeframe: 'Afternoon',
      title: 'Creative Memory Labs',
      description: 'Hands-on experiences that tap into long-term memory.',
      bullets: [
        'Baking cherished family recipes',
        'Artful gardens & tactile crafts',
        'Neighbourhood volunteer projects like blanket drives',
      ],
    },
    {
      timeframe: 'After Dinner',
      title: 'Twilight Calm',
      description: 'Soothing practices to reduce sundowning and anxiety.',
      bullets: [
        'Lavender hand massages & storytelling',
        'Guided breathing with soft projection mapping',
        'Personalized photo journey boxes',
      ],
    },
  ];

  const wellness = [
    {
      badge: 'Family Partnership',
      title: 'Education & transparent communication',
      description:
        'Monthly family workshops and virtual office hours keep everyone confident and united.',
      features: [
        'Quarterly care-plan review parties',
        'Secure video updates for milestones',
        'Resource library for brain health',
      ],
    },
    {
      badge: 'Clinical Oversight',
      title: 'Integrated health partnerships',
      description:
        'Neuro specialists, behavioral health teams, and pharmacy partners support every step.',
      features: [
        'Weekly physician rounds',
        'Behavioral wellness huddles twice daily',
        'Fall-detection smart sensors',
      ],
    },
  ];

  const testimonials = [
    {
      quote:
        'The memory care guides know exactly how to redirect my wife with humor and respect. Her artwork is framed throughout the hall.',
      name: 'James O.',
      role: 'Husband of resident',
    },
    {
      quote:
        'We joined the family coaching night and finally felt prepared for Mom’s changing needs. The team even set up a playlist of her church hymns.',
      name: 'Priya K.',
      role: 'Daughter & healthcare proxy',
    },
  ];

  const cta = {
    eyebrow: 'SEE MEMORY CARE',
    title: 'Tour our secure neighborhood and meet the engagement team.',
    description:
      'Preview apartments, visit sensory gardens, and explore our technology that keeps families in the loop.',
    primaryAction: 'Schedule Memory Care Tour',
    secondaryAction: 'Call Memory Care',
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

export default MemoryCare;





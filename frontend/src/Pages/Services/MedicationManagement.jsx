import React from 'react';
import {
  FaPills,
  FaClipboardCheck,
  FaUserMd,
  FaLaptopMedical,
  FaSyringe,
} from 'react-icons/fa';
import ServicePageLayout from './ServicePageLayout';
import heroImage from '../../Images/doctor-patient.png';

const MedicationManagement = () => {
  const hero = {
    eyebrow: 'MEDICATION MANAGEMENT',
    title: 'Pharmacy partnerships and vigilant monitoring for every resident.',
    description:
      'Our licensed nurses oversee every dose with triple-check systems, digital charting, and family transparency.',
    image: heroImage,
    highlights: ['Electronic MAR', 'On-site nurse coverage', 'Pharmacist reviews'],
    stats: [
      { label: 'Med passes per day', value: '180+', detail: 'Executed with dual verification' },
      { label: 'Pharmacist reviews', value: 'Monthly', detail: 'Polypharmacy oversight' },
      { label: 'Care alerts', value: '<5 min', detail: 'Response time to changes' },
    ],
  };

  const focusAreas = {
    title: 'Accuracy, accountability, and advocacy',
    subtitle:
      'We partner with physicians, pharmacies, and families to keep medication plans safe and up to date.',
    items: [
      {
        title: 'Licensed Nurse Team',
        description: '24/7 coverage with dedicated med-care specialists.',
        icon: <FaUserMd />,
        points: ['Nurse practitioner rounding', 'Medication education for residents'],
      },
      {
        title: 'Digital Oversight',
        description: 'Electronic Medication Administration Records (eMAR) with alerts.',
        icon: <FaLaptopMedical />,
        points: ['Barcode scanning', 'Real-time family notifications'],
      },
      {
        title: 'Pharmacy Integration',
        description: 'Local pharmacy partners package and deliver in secure systems.',
        icon: <FaPills />,
        points: ['Cycle fills & STAT deliveries', 'Automatic refill coordination'],
      },
      {
        title: 'Clinical Collaboration',
        description: 'Medication reviews whenever health changes occur.',
        icon: <FaClipboardCheck />,
        points: ['Lab tracking & vitals trending', 'Specialty care coordination'],
      },
    ],
  };

  const programs = [
    {
      timeframe: 'Daily',
      title: 'Precision Med Passes',
      description: 'Nurses follow our triple-check protocol for every administration.',
      bullets: [
        'Barcode scanning & identity verification',
        'Real-time documentation on secure tablets',
        'Immediate escalation of side effects',
      ],
    },
    {
      timeframe: 'Weekly',
      title: 'Clinical Huddles',
      description: 'Interdisciplinary reviews of labs, vitals, and behavior changes.',
      bullets: [
        'Physician & pharmacy consults',
        'Family update summaries',
        'Therapy referrals if needed',
      ],
    },
    {
      timeframe: 'Monthly+',
      title: 'Pharmacy Reviews',
      description: 'Comprehensive review to reduce polypharmacy and optimize outcomes.',
      bullets: [
        'Deprescribing recommendations',
        'Vaccine status & chronic disease tracking',
        'Emergency preparedness drills',
      ],
    },
  ];

  const wellness = [
    {
      badge: 'Education',
      title: 'Caregiver & resident coaching',
      description:
        'Small-group workshops teach medication literacy, nutrition impact, and holistic approaches.',
      features: [
        'Quarterly medication Q&A nights',
        'Printable cheat sheets per resident',
        'Telepharmacy consults for families',
      ],
    },
    {
      badge: 'Clinical Services',
      title: 'On-site clinics & therapies',
      description:
        'Partner medical groups host vaccination clinics, lab draws, and therapy follow-ups.',
      features: [
        'Flu, RSV, and COVID booster events',
        'Mobile lab partnerships',
        'Infusion & injection coordination',
      ],
    },
  ];

  const testimonials = [
    {
      quote:
        'The nursing team caught a medication interaction before it became serious and immediately coordinated with our doctor.',
      name: 'Linda P.',
      role: 'Daughter & POA',
    },
    {
      quote:
        'I receive a recap after every pharmacy review. It gives me such peace of mind living out of state.',
      name: 'George H.',
      role: 'Son of resident',
    },
  ];

  const cta = {
    eyebrow: 'CLINICAL CALM',
    title: 'Schedule a consultation with our nurse navigator.',
    description:
      'Bring current med lists and we will outline how our systems support safety and timely communication.',
    primaryAction: 'Meet the Nurse Team',
    secondaryAction: 'Request Med Review',
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

export default MedicationManagement;





export const siteConfig = {
  name: 'Sneaker POS',
  shortName: 'SP',
  description:
    'Un completo sistema de punto de venta e inventario diseñado específicamente para tiendas de sneakers y calzado deportivo. Con control de stock en tiempo real, seguimiento de tendencias, gestión de proveedores y análisis de ventas.',

  // Contact Information
  contact: {
    phone: {
      primary: '+57 3153914860',
      emergency: '+57 3153914860',
      whatsapp: '+57 3153914860',
    },
    email: {
      primary: 'eliablopez@hotmail.com',
      support: 'eliablopezmurillo@gmail.com',
      appointments: 'eliablopezmurillo@gmail.com',
    },
    address: {
      street: 'Carrera 14',
      city: 'Cartagena',
      country: 'Colombia',
      coordinates: {
        latitude: '0.11111',
        longitude: '30.11111',
      },
    },
  },

  // Social Media Links
  social: {
    facebook: 'https://facebook.com/kasesehospital',
    twitter: 'https://twitter.com/kasesehospital',
    instagram: 'https://instagram.com/kasesehospital',
    linkedin: 'https://linkedin.com/company/kasesehospital',
    youtube: 'https://youtube.com/kasesehospital',
  },

  // Working Hours
  workingHours: {
    status: '24/7 All Week Days',
    emergency: '24/7 Emergency Services',
    outpatient: 'Monday - Saturday: 8:00 AM - 5:00 PM',
    pharmacy: '24/7 Pharmacy Services',
    laboratory: '24/7 Laboratory Services',
  },

  // Company Meta Information
  meta: {
    foundedYear: 2025,
    license: 'Licensed by Uganda Medical and Dental Practitioners Council',
    accreditation: 'Internationally Accredited Healthcare Facility',
    values: [
      {
        title: 'Excellence',
        description: 'Committed to providing the highest quality healthcare',
      },
      {
        title: 'Compassion',
        description: 'Treating every patient with care and empathy',
      },
      {
        title: 'Innovation',
        description: 'Embracing modern medical technologies and practices',
      },
    ],
  },

  // Service Categories
  services: {
    emergency: [
      '24/7 Emergency Care',
      'Ambulance Services',
      'Trauma Care',
      'Critical Care',
    ],
    specialties: [
      'Obstetrics & Gynecology',
      'Surgery Department',
      'Medical Department',
      'Laboratory Department',
      'Imaging Department',
      'Pediatrics Department',
      'Outpatient Department',
    ],
    supportServices: [
      'Pharmacy',
      'Laboratory',
      'Radiology',
      'Physical Therapy',
      'Nutritional Counseling',
    ],
  },

  // SEO and Metadata
  seo: {
    title: 'Sneaker POS - Sistema Integral para Tiendas de Sneakers',
    description:
      'Un completo sistema de punto de venta e inventario diseñado específicamente para tiendas de sneakers y calzado deportivo. Con control de stock en tiempo real, seguimiento de tendencias, gestión de proveedores y análisis de ventas.',
    keywords: [
      'sneaker',
      'POS',
      'point of sale',
      'inventory management',
      'sneaker store',
      'shoe store',
      'sneaker POS',
      'sneaker inventory',
      'sneaker management',
      'sneaker sales',
      'calzado deportivo',
      'tienda de sneakers',
      'gestión de inventario',
      'punto de venta',
      'sistema de punto de venta',
    ],
    ogImage: 'https://kasesehospital.org/og-image.jpg',
  },

  // Legal Information
  legal: {
    name: 'Kasese Hospital Ltd',
    registration: 'UG123456789',
    privacyPolicy: '/privacy-policy',
    terms: '/terms-and-conditions',
    accessibility: '/accessibility',
  },

  // Appointment Types
  appointmentTypes: [
    {
      id: 'general',
      name: 'General Consultation',
      duration: '30 minutes',
    },
    {
      id: 'specialist',
      name: 'Specialist Consultation',
      duration: '45 minutes',
    },
    {
      id: 'followup',
      name: 'Follow-up Visit',
      duration: '20 minutes',
    },
  ],

  // Insurance and Payment
  insurance: {
    accepted: [
      'National Health Insurance',
      'Private Insurance Companies',
      'Corporate Medical Schemes',
    ],
    paymentMethods: ['Cash', 'Credit Card', 'Mobile Money', 'Insurance'],
  },
};

// Helper function to get formatted contact info
export const getContactInfo = () => {
  const { contact } = siteConfig;
  return {
    mainPhone: contact.phone.primary,
    emergency: contact.phone.emergency,
    email: contact.email.primary,
    fullAddress: `${contact.address.street}, ${contact.address.city}, ${contact.address.country}`,
  };
};

// Helper function to get social media links
export const getSocialLinks = () => {
  return siteConfig.social;
};

// Helper function to get working hours
export const getWorkingHours = () => {
  return siteConfig.workingHours;
};

// Helper function to get SEO metadata
export const getSEOData = (pageName?: string) => {
  return {
    title: pageName ? `${pageName} - ${siteConfig.name}` : siteConfig.seo.title,
    description: siteConfig.seo.description,
    keywords: siteConfig.seo.keywords.join(', '),
    ogImage: siteConfig.seo.ogImage,
  };
};

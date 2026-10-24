/**
 * Devu Fitness Center - Business Data & Configuration
 * Accurate, verified data provided by the business owner.
 */

export interface GymService {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  category: 'strength' | 'cardio' | 'wellness' | 'specialized';
  whatsappQuery: string;
}

export const BUSINESS_INFO = {
  name: "Devu Fitness Center",
  tagline: "YOUR FITNESS. YOUR NEXT LEVEL.",
  subheadline: "Build strength, improve fitness, and take the next step towards a healthier lifestyle at Devu Fitness Center, Gadag.",
  rating: "5.0",
  maxRating: "5.0",
  googleReviewsCount: 152,
  phone: "9902059061",
  displayPhone: "+91 99020 59061",
  whatsappNumber: "919902059061",
  instagramUrl: "https://www.instagram.com/devufitness__09/",
  instagramHandle: "@devufitness__09",
  address: {
    line1: "2nd Floor, ASION Mall, CJ8C+RP4",
    line2: "Mulagund Naka Road, Betageri, Hudco Colony",
    city: "Gadag-Betageri",
    state: "Karnataka",
    pincode: "582103",
    full: "2nd Floor, ASION Mall, CJ8C+RP4, Mulagund Naka Road, Betageri, Hudco Colony, Gadag-Betageri, Karnataka 582103"
  },
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Devu+Fitness+Center+ASION+Mall+Mulagund+Naka+Road+Betageri+Gadag+Karnataka+582103",
  googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=CJ8C%2BRP4+Gadag-Betageri+Karnataka",
  hours: "Listed as closing at 10:00 PM; contact owner for morning batches and special schedules.",
  defaultWhatsAppMessage: "Hello Devu Fitness Center! I saw your website and details and all I would like to join the gym"
};

export const getWhatsAppLink = (customMessage?: string): string => {
  const message = customMessage || BUSINESS_INFO.defaultWhatsAppMessage;
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const CONFIRMED_SERVICES: GymService[] = [
  {
    id: "weight-training",
    name: "Weight Training",
    shortDesc: "Free weights, barbells, dumbbells, and targeted resistance machines for strength and muscle building.",
    fullDesc: "Comprehensive strength training setup equipped with Olympic barbells, dumbbell racks, adjustable benches, power cages, and resistance machines designed to build raw power and muscular hypertrophy.",
    iconName: "Dumbbell",
    category: "strength",
    whatsappQuery: "Hello Devu Fitness Center! I would like to inquire about Weight Training facilities and membership."
  },
  {
    id: "personal-training",
    name: "Personal Training",
    shortDesc: "Dedicated one-on-one coaching, customized workout routines, and posture/technique guidance.",
    fullDesc: "Work directly with dedicated trainers who tailor every session to your body type, fitness level, and personal goals, ensuring proper form, injury prevention, and continuous progression.",
    iconName: "UserCheck",
    category: "specialized",
    whatsappQuery: "Hello Devu Fitness Center! I would like to enquire about Personal Training packages and certified trainer availability."
  },
  {
    id: "aerobics",
    name: "Aerobics",
    shortDesc: "Energetic group conditioning sessions to elevate heart rate, improve stamina, and burn calories.",
    fullDesc: "High-octane rhythmic movement classes that combine cardiovascular endurance, coordination, and agility in an uplifting group atmosphere.",
    iconName: "Zap",
    category: "cardio",
    whatsappQuery: "Hello Devu Fitness Center! Could you share information and batch timings for Aerobics sessions?"
  },
  {
    id: "hiit-workouts",
    name: "HIIT Workouts",
    shortDesc: "High-Intensity Interval Training for maximum metabolic burn and cardiovascular conditioning.",
    fullDesc: "Short, intense bursts of exertion followed by brief recovery periods. Built to maximize caloric burn, boost lung capacity, and build functional athletic stamina.",
    iconName: "Flame",
    category: "cardio",
    whatsappQuery: "Hello Devu Fitness Center! I'm interested in HIIT (High-Intensity Interval Training) batches."
  },
  {
    id: "cycling",
    name: "Cycling",
    shortDesc: "Indoor spin and stationary cycling routines for lower body endurance and cardiovascular strength.",
    fullDesc: "High-cadence cycling workouts simulating hill climbs, sprints, and interval rides that strengthen the quads, hamstrings, glutes, and cardiovascular system without harsh joint impact.",
    iconName: "Bike",
    category: "cardio",
    whatsappQuery: "Hello Devu Fitness Center! I would like details about your Indoor Cycling and spin sessions."
  },
  {
    id: "dance-fitness",
    name: "Dance Fitness",
    shortDesc: "Fun, rhythm-driven dance routines that combine cardio, choreography, and total-body movement.",
    fullDesc: "An exhilarating way to burn calories and release stress. Follow energizing music and choreography that makes working out feel like a celebration.",
    iconName: "Music",
    category: "cardio",
    whatsappQuery: "Hello Devu Fitness Center! Please share information regarding Dance Fitness classes and timings."
  },
  {
    id: "kickboxing",
    name: "Kickboxing",
    shortDesc: "Combat-inspired striking and footwork training for explosive agility, core strength, and endurance.",
    fullDesc: "Master powerful jabs, hooks, kicks, and defense movements. Kickboxing develops sharp reflexes, mental focus, cardiovascular toughness, and upper/lower body synchrony.",
    iconName: "Shield",
    category: "specialized",
    whatsappQuery: "Hello Devu Fitness Center! I'm interested in joining Kickboxing training at the gym."
  },
  {
    id: "yoga-pilates",
    name: "Yoga and Pilates",
    shortDesc: "Mindful flexibility, core stabilization, breathwork, posture alignment, and deep mobility.",
    fullDesc: "Restore muscular balance, lengthen tight tendons, and cultivate deep abdominal and spinal stability through structured yoga flows and Pilates core conditioning.",
    iconName: "HeartPulse",
    category: "wellness",
    whatsappQuery: "Hello Devu Fitness Center! I would like to learn about Yoga and Pilates batches and timings."
  },
  {
    id: "nutrition-counseling",
    name: "Nutrition Counseling",
    shortDesc: "Practical, goal-oriented dietary guidance to fuel workouts, recovery, and overall wellness.",
    fullDesc: "Pair your training with sensible, sustainable nutrition guidance. Understand macronutrient balance, hydration, and meal timing tailored to your muscle gain or weight loss objectives.",
    iconName: "Apple",
    category: "wellness",
    whatsappQuery: "Hello Devu Fitness Center! I would like to consult regarding Nutrition Counseling alongside my workouts."
  },
  {
    id: "girls-gym",
    name: "Girls Gym",
    shortDesc: "Dedicated, comfortable, and empowering fitness environment and sessions for women.",
    fullDesc: "A safe, focused, and supportive workout space tailored for female members of all ages, with experienced guidance to train confidently and achieve personal wellness goals.",
    iconName: "Sparkles",
    category: "specialized",
    whatsappQuery: "Hello Devu Fitness Center! I would like to know the timings and details for the Girls Gym section."
  }
];

export const FAQS = [
  {
    question: "Where is Devu Fitness Center located in Gadag?",
    answer: "Devu Fitness Center is located on the 2nd Floor of ASION Mall, Mulagund Naka Road, Betageri, Hudco Colony, Gadag-Betageri, Karnataka 582103 (Google Plus Code: CJ8C+RP4). There is convenient access and parking available at the mall."
  },
  {
    question: "What are the operating hours of Devu Fitness Center?",
    answer: "The gym is listed as closing at 10:00 PM. Morning and evening batch timings are organized throughout the day. Please message or call us on WhatsApp (+91 99020 59061) to confirm the exact schedule for your preferred time slot."
  },
  {
    question: "Is there a dedicated Girls Gym or women's batch?",
    answer: "Yes, Devu Fitness Center offers a dedicated 'Girls Gym' program providing a comfortable, respectful, and empowering space for women to train with full confidence and guidance."
  },
  {
    question: "What fitness programs and services are available?",
    answer: "We offer 10 confirmed programs: Weight Training, Personal Training, Aerobics, HIIT Workouts, Cycling, Dance Fitness, Kickboxing, Yoga & Pilates, Nutrition Counseling, and Girls Gym."
  },
  {
    question: "How do I inquire about membership fees and join?",
    answer: "You can click any 'Join Now' or 'WhatsApp' button on this site to connect directly with our management on WhatsApp (+91 99020 59061), or call us directly. We will provide full membership fee details and help you get started."
  },
  {
    question: "Do you offer Personal Training (PT)?",
    answer: "Yes! 1-on-1 Personal Training is available for individuals looking for customized workout routines, posture correction, specialized weight loss or muscle building protocols."
  }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Weight Training & Free Weights Area",
    category: "Strength",
    desc: "Olympic barbells, precision dumbbell racks, and heavy-duty benches.",
    type: "strength",
    accent: "Barbells & Free Weights"
  },
  {
    id: 2,
    title: "Cardio & High-Cadence Cycling Studio",
    category: "Cardio",
    desc: "Stationary spin bikes and cardiovascular stamina conditioning.",
    type: "cardio",
    accent: "Spin & Stamina"
  },
  {
    id: 3,
    title: "Functional & Aerobics Floor",
    category: "Functional",
    desc: "Spacious training floor with rubber mats, kettlebells, and dynamic movement zones.",
    type: "functional",
    accent: "Agility & Core"
  },
  {
    id: 4,
    title: "Dedicated Girls Gym & Wellness Zone",
    category: "Girls Gym",
    desc: "Comfortable, empowering environment with targeted equipment and supportive atmosphere.",
    type: "girls-gym",
    accent: "Safe & Empowering"
  },
  {
    id: 5,
    title: "Kickboxing & Combat Conditioning",
    category: "Strength & Agility",
    desc: "Striking pads, footwork training, and high-intensity interval space.",
    type: "combat",
    accent: "Reflexes & Power"
  },
  {
    id: 6,
    title: "Yoga & Pilates Mobility Studio",
    category: "Wellness",
    desc: "Focused zone for core stabilization, flexibility, and post-workout recovery.",
    type: "wellness",
    accent: "Flexibility & Balance"
  }
];

export const projects = [
    {
        slug: 'almonqez-alshamel',
        name: 'Al-Monqez Al-Shamel',
        category: 'Maintenance Services & Marketplace',
        featured: true,

        shortDescription:
            'A dual-application ecosystem combining a maintenance on-demand service platform and a comprehensive multi-vendor marketplace.',

        description:
            'A production ecosystem connecting customers, maintenance service providers, vendors, and platform administrators through a unified platform with marketplace and financial workflows.',

        role: 'Backend Engineer',
        status: 'Production',
        image: `${import.meta.env.BASE_URL}images/projects/savior.jpeg`,

        technologies: [
            'PHP',
            'Laravel',
            'MySQL',
            'REST API',
            'Tabby API',
            'Tamara API',
        ],

        features: [
            'Multi-vendor marketplace',
            'Maintenance services',
            'Vendor management',
            'Customer management',
            'Administrative dashboard',
            'Split payments',
            'Buy Now, Pay Later (BNPL)',
            'Financial workflows',
        ],

        challenges: [
            'Managing complex relationships between vendors, clients, and platform administrators.',
            'Integrating multiple payment workflows with external fintech providers.',
            'Keeping financial transactions and business states consistent.',
        ],

        solutions: [
            'Engineered a unified administrative dashboard managing complex relationships across vendors, clients, and platform administrators.',
            'Architected and integrated fintech workflows supporting split payments and BNPL.',
            'Integrated Tabby and Tamara APIs into the payment workflow.',
        ],

        architecture: [
            'Laravel MVC',
            'Service-oriented backend logic',
            'RESTful APIs',
            'Relational database architecture',
            'Third-party payment integrations',
        ],

        links: {
            live: '',
            github: '',
        },
    },

    {
        slug: 'maqadeenah',
        name: 'Maqadeenah',
        category: 'SaaS & E-Commerce',
        featured: true,

        shortDescription:
            'A multilingual household utility and collaborative provisioning application tailored for family expense management.',

        description:
            'A SaaS household provisioning application supporting household goods ordering, family accounts, recurring subscriptions, purchasing cycles, and multilingual experiences.',

        role: 'Backend Engineer',
        status: 'Production',
        image: `${import.meta.env.BASE_URL}images/projects/maqadeenah.jpeg`,

        technologies: [
            'PHP',
            'Laravel',
            'MySQL',
            'REST API',
            'Localization',
            'Subscription Billing',
        ],

        features: [
            'Product ordering',
            'Monthly subscriptions',
            'Yearly subscriptions',
            'Family accounts',
            'Arabic',
            'English',
            'Urdu',
            'Indonesian',
            'Calendar scheduling',
            'Automated purchase cycles',
            'Dynamic invoice links',
        ],

        challenges: [
            'Supporting global operations across four languages.',
            'Managing family-based account structures.',
            'Handling recurring subscription workflows.',
            'Building calendar-based automated purchasing cycles.',
        ],

        solutions: [
            'Designed a cross-border localized architecture supporting Arabic, English, Urdu, and Indonesian.',
            'Implemented a secure monthly/yearly subscription engine.',
            'Created custom calendar scheduling algorithms for automated purchase cycles.',
            'Implemented shareable dynamic invoice links.',
        ],

        architecture: [
            'Laravel MVC',
            'Service-oriented backend logic',
            'RESTful APIs',
            'Relational database architecture',
            'Localization',
            'Subscription workflows',
        ],

        links: {
            live: '',
            github: '',
        },
    },

    {
        slug: 'igo',
        name: 'iGO',
        category: 'Transportation & Logistics',
        featured: true,

        shortDescription:
            'A real-time ride-hailing, taxi booking, and logistics dispatch platform.',

        description:
            'A real-time transportation platform supporting taxi bookings, driver and passenger workflows, geolocation, routing, communication, and trip lifecycle management.',

        role: 'Backend Engineer',
        status: 'Production',
        image: `${import.meta.env.BASE_URL}images/projects/igo.jpeg`,

        technologies: [
            'PHP',
            'Laravel',
            'MySQL',
            'REST API',
            'Geolocation',
            'Real-Time Communication',
        ],

        features: [
            'Taxi booking',
            'Trip management',
            'Driver workflows',
            'Passenger workflows',
            'Pickup/drop-off mapping',
            'Driver routing',
            'Real-time communication',
            'Trip state management',
        ],

        challenges: [
            'Managing real-time driver-to-passenger communication.',
            'Maintaining accurate trip state transitions during transit.',
            'Handling geolocation and coordinate-based pickup/drop-off logic.',
            'Maintaining low-latency communication between application clients.',
        ],

        solutions: [
            'Built high-performance geolocation backend logic utilizing map coordinate computations for accurate pickup/drop-off mapping and driver routing.',
            'Optimized low-latency data polling loops to support real-time driver-to-passenger communication.',
            'Implemented accurate state machine transitions throughout the trip lifecycle.',
        ],

        architecture: [
            'Laravel MVC',
            'RESTful APIs',
            'Geolocation services',
            'Real-time polling',
            'State-machine workflows',
            'MySQL',
        ],

        links: {
            live: '',
            github: '',
        },
    },

    {
        slug: 'khamseen',
        name: 'Khamseen',
        category: 'Freelancing Marketplace',
        featured: false,

        shortDescription:
            'A dynamic on-demand freelancing marketplace facilitating real-time project collaboration.',

        description:
            'A freelancing marketplace connecting clients with service providers through project management, escrow payments, wallet payouts, real-time chat, and collaborative workflows.',

        role: 'Backend Engineer',
        status: 'Production',
        image: `${import.meta.env.BASE_URL}images/projects/khamseen.jpeg`,

        technologies: [
            'PHP',
            'Laravel',
            'MySQL',
            'REST API',
            'Real-Time Chat',
            'Payment Workflows',
        ],

        features: [
            'Freelance projects',
            'Client management',
            'Service-provider workflows',
            'Escrow payments',
            'Wallet payouts',
            'Real-time chat',
            'Project collaboration',
            'Project management',
        ],

        challenges: [
            'Managing financial operations between clients and service providers.',
            'Maintaining escrow and wallet states across project lifecycles.',
            'Supporting real-time negotiation and project communication.',
        ],

        solutions: [
            'Authored a secure escrow payment and wallet payout subsystem.',
            'Designed transactional financial workflows between clients and service providers.',
            'Built an integrated real-time chat framework for client-freelancer negotiation.',
            'Integrated project communication with inline project management workflows.',
        ],

        architecture: [
            'Laravel MVC',
            'Service-oriented backend logic',
            'RESTful APIs',
            'Transactional financial workflows',
            'Real-time communication',
            'MySQL',
        ],

        links: {
            live: '',
            github: '',
        },
    },

    {
        slug: 'shumua-alami',
        name: 'Shumua Al-AmI',
        category: 'E-Learning & Rehabilitation',
        featured: true,

        shortDescription:
            'An enterprise e-learning and rehabilitation management platform serving individuals with special needs.',

        description:
            'A specialized educational and rehabilitation management platform supporting clinical assessments, progress reporting, adaptive learning, and administrative workflows.',

        role: 'Backend Engineer',
        status: 'Production',
        image: `${import.meta.env.BASE_URL}images/projects/shumua-alami.jpeg`,

        technologies: [
            'PHP',
            'Laravel',
            'MySQL',
            'REST API',
            'Vue.js',
            'Accessibility',
        ],

        features: [
            'Clinical assessments',
            'Progress reporting',
            'Adaptive learning',
            'Educational workflows',
            'Administrative management',
            'Accessibility',
            'Secure data management',
        ],

        challenges: [
            'Managing specialized clinical assessment and rehabilitation workflows.',
            'Maintaining reliable frontend and backend communication.',
            'Supporting accessibility requirements.',
            'Maintaining data security and application reliability.',
        ],

        solutions: [
            'Scaled and maintained specialized administrative infrastructure for clinical assessments and progress reporting.',
            'Refactored frontend and backend communication layers.',
            'Focused on accessibility compliance and data security.',
            'Maintained reliable application availability for users.',
        ],

        architecture: [
            'Laravel MVC',
            'RESTful APIs',
            'Vue.js',
            'Relational database architecture',
            'Administrative infrastructure',
        ],

        links: {
            live: '',
            github: '',
        },
    },

    {
        slug: 'alnahr-aljari',
        name: 'Al-Nahr Al-Jari',
        category: 'Educational & Community Platform',
        featured: true,

        shortDescription:
            'A high-traffic, multilingual educational and community portal optimized for spiritual development resources.',

        description:
            'A multilingual educational and community platform providing spiritual development resources while supporting a large active concurrent user base.',

        role: 'Backend Engineer',
        status: 'Production',
        image: `${import.meta.env.BASE_URL}images/projects/flowing-river.jpeg`,

        technologies: [
            'PHP',
            'Laravel',
            'MySQL',
            'REST API',
            'Redis',
            'OAuth 2.0',
            'Google Authentication',
        ],

        features: [
            'Multilingual content',
            'Educational resources',
            'Community features',
            'User authentication',
            'Google Authentication',
            'Performance optimization',
            'Legacy codebase maintenance',
        ],

        challenges: [
            'Scaling legacy code for a large active concurrent user base.',
            'Maintaining application performance while expanding platform capacity.',
            'Providing secure user onboarding.',
        ],

        solutions: [
            'Contributed to performance tuning and refactoring of legacy codebases.',
            'Expanded platform capacity to handle a large active concurrent user base.',
            'Integrated secure OAuth 2.0 Google Authentication.',
            'Streamlined user onboarding while protecting profile data.',
        ],

        architecture: [
            'Laravel MVC',
            'RESTful APIs',
            'OAuth 2.0',
            'Google Authentication',
            'Redis',
            'MySQL',
        ],

        links: {
            live: '',
            github: '',
        },
    },

    {
        slug: 'barwa',
        name: 'Barwa',
        category: 'Real Estate',
        featured: false,

        shortDescription:
            'A real-time estate marketplace and property aggregation platform for rental and sales operations.',

        description:
            'A real estate marketplace supporting property listings, rental and sales operations, advanced filtering, broker-client communication, and transaction tracking.',

        role: 'Backend Engineer',
        status: 'Production',
        image: `${import.meta.env.BASE_URL}images/projects/barwa.jpeg`,

        technologies: [
            'PHP',
            'Laravel',
            'MySQL',
            'REST API',
            'Real-Time Messaging',
            'Multi-Tenant Architecture',
        ],

        features: [
            'Property listings',
            'Rental operations',
            'Sales operations',
            'Advanced property filters',
            'Broker management',
            'Client management',
            'Real-time messaging',
            'Transaction tracking',
        ],

        challenges: [
            'Supporting scalable property listings.',
            'Building advanced property filtering.',
            'Managing multi-tenant data structures.',
            'Maintaining real-time broker-to-client communication.',
            'Tracking transactions through their complete lifecycle.',
        ],

        solutions: [
            'Structured multi-tenant databases for scalable property listings.',
            'Built advanced filter queries for property discovery.',
            'Implemented instantaneous broker-to-client messaging pipelines.',
            'Created transaction tracking from initial lead through closed contract.',
        ],

        architecture: [
            'Laravel MVC',
            'Multi-tenant database architecture',
            'Eloquent ORM',
            'RESTful APIs',
            'Real-time messaging',
            'MySQL',
        ],

        links: {
            live: '',
            github: '',
        },
    },

    {
        slug: 'shamaa-training-academy',
        name: 'Shamaa Training Academy',
        category: 'Learning Management System',
        featured: true,

        shortDescription:
            'A scalable Learning Management System delivering asynchronous and synchronous educational training.',

        description:
            'A scalable LMS supporting recorded lessons, synchronous training, time-limited assessments, progress tracking, automated certificates, and high-traffic examination workflows.',

        role: 'Backend Engineer',
        status: 'Production',
        image: `${import.meta.env.BASE_URL}images/projects/shamaa.jpeg`,

        technologies: [
            'PHP',
            'Laravel',
            'MySQL',
            'Redis',
            'REST API',
            'Vue.js',
        ],

        features: [
            'Course management',
            'Student management',
            'Recorded video lessons',
            'Synchronous training',
            'Time-limited assessments',
            'Progress tracking',
            'Automated certificates',
            'Redis caching',
        ],

        challenges: [
            'Handling multimedia educational content.',
            'Managing dynamic time-limited assessments.',
            'Generating certificates automatically.',
            'Preventing performance bottlenecks during synchronized examination windows.',
        ],

        solutions: [
            'Programmed a multimedia delivery pipeline for recorded video lessons.',
            'Implemented dynamic time-limited assessment workflows.',
            'Built automated certificate generation engines.',
            'Implemented Redis caching to prevent performance bottlenecks during synchronized examinations.',
        ],

        architecture: [
            'Laravel MVC',
            'Service-oriented backend logic',
            'RESTful APIs',
            'Redis caching',
            'Relational database architecture',
            'Vue.js',
        ],

        links: {
            live: '',
            github: '',
        },
    },

    {
        slug: 'referrals',
        name: 'Referrals',
        category: 'HR Technology',
        featured: false,

        shortDescription:
            'A peer-to-peer HR technology platform streamlining corporate recruitment through networking.',

        description:
            'An HR technology platform connecting employees, coordinators, and candidates through recruitment referrals, candidate tracking, and automated reward workflows.',

        role: 'Backend Engineer',
        status: 'Production',
        image: `${import.meta.env.BASE_URL}images/projects/referrals.jpeg`,

        technologies: [
            'PHP',
            'Laravel',
            'MySQL',
            'REST API',
            'RBAC',
        ],

        features: [
            'Candidate referrals',
            'Recruitment workflows',
            'Role-Based Access Control',
            'Coordinator management',
            'Employee management',
            'Candidate management',
            'Recommendation tracking',
            'Reward payouts',
        ],

        challenges: [
            'Designing granular permissions across different recruitment roles.',
            'Tracking candidates through multiple recruitment stages.',
            'Automating rewards after successful placements.',
        ],

        solutions: [
            'Engineered a granular Role-Based Access Control system.',
            'Segmented permissions between Coordinators, Employees, and Candidates.',
            'Built pipelines tracking recommendations and candidate processing.',
            'Implemented automatic reward payouts upon successful placements.',
        ],

        architecture: [
            'Laravel MVC',
            'RBAC',
            'RESTful APIs',
            'Workflow tracking',
            'MySQL',
        ],

        links: {
            live: '',
            github: '',
        },
    },

    {
        slug: 'the-gala',
        name: 'The Gala',
        category: 'Event Marketplace',
        featured: false,

        shortDescription:
            'An event-planning marketplace connecting private clients with wedding service providers and vendors.',

        description:
            'An event-planning marketplace providing booking, scheduling, vendor management, custom packages, and real-time client-vendor communication.',

        role: 'Backend Engineer',
        status: 'Production',
        image: `${import.meta.env.BASE_URL}images/projects/the-gala.jpeg`,

        technologies: [
            'PHP',
            'Laravel',
            'MySQL',
            'REST API',
            'Real-Time Chat',
        ],

        features: [
            'Event planning',
            'Vendor management',
            'Service packages',
            'Booking management',
            'Calendar scheduling',
            'Conflict prevention',
            'Vendor portals',
            'Chat threads',
        ],

        challenges: [
            'Preventing scheduling conflicts between bookings.',
            'Keeping booking states synchronized.',
            'Allowing vendors to independently manage their services and packages.',
        ],

        solutions: [
            'Developed a centralized booking engine with automated calendar locks.',
            'Implemented booking state synchronization.',
            'Created vendor portals for independent service management.',
            'Implemented custom package creation.',
            'Unified client-vendor communication through chat threads.',
        ],

        architecture: [
            'Laravel MVC',
            'RESTful APIs',
            'Booking engine',
            'Calendar locking',
            'Real-time communication',
            'MySQL',
        ],

        links: {
            live: '',
            github: '',
        },
    },

    {
        slug: 'mordinek',
        name: 'Mordinek',
        category: 'B2B E-Commerce & Logistics',
        featured: true,

        shortDescription:
            'A B2B e-commerce and logistics platform connecting wholesalers and retailers through supply-chain workflows.',

        description:
            'A B2B commerce and logistics platform supporting wholesale transactions, tiered subscriptions, SaaS metrics, stock alerts, bulk ordering, and high-volume inventory updates.',

        role: 'Backend Engineer',
        status: 'Production',
        image: `${import.meta.env.BASE_URL}images/projects/mordinek.jpeg`,

        technologies: [
            'PHP',
            'Laravel',
            'MySQL',
            'REST API',
            'SaaS',
            'Subscription Workflows',
        ],

        features: [
            'B2B e-commerce',
            'Wholesale ordering',
            'Retailer management',
            'Tiered subscriptions',
            'SaaS metrics',
            'Automated stock alerts',
            'Bulk-order pipelines',
            'Inventory management',
        ],

        challenges: [
            'Processing massive payloads during bulk inventory updates.',
            'Supporting tiered subscription functionality.',
            'Maintaining API performance during high-volume operations.',
        ],

        solutions: [
            'Architected a tiered subscription model unlocking premium SaaS metrics.',
            'Implemented automated stock alerts.',
            'Built bulk-order wholesale pipelines.',
            'Optimized API endpoints responsible for high-volume bulk inventory updates.',
        ],

        architecture: [
            'Laravel MVC',
            'RESTful APIs',
            'SaaS architecture',
            'Subscription workflows',
            'MySQL',
        ],

        links: {
            live: '',
            github: '',
        },
    },

    {
        slug: 'masarat',
        name: 'Masarat',
        category: 'Real Estate Showcase',
        featured: true,

        shortDescription:
            'A real estate showcase portal displaying premium residential developments, construction updates, and localized news.',

        description:
            'A real estate showcase and transaction platform presenting residential developments, construction updates, localized news, unit reservations, and high-fidelity media.',

        role: 'Backend Engineer',
        status: 'Production',
        image: `${import.meta.env.BASE_URL}images/projects/masarat.jpeg`,

        technologies: [
            'PHP',
            'Laravel',
            'MySQL',
            'REST API',
            'Media Hosting',
        ],

        features: [
            'Residential developments',
            'Property showcase',
            'Construction updates',
            'Localized news',
            'Unit reservations',
            'Direct communication',
            'Blueprint hosting',
            'Virtual imagery',
        ],

        challenges: [
            'Supporting high-fidelity media and large visual assets.',
            'Building a direct-purchase transactional workflow.',
            'Maintaining fast access to blueprint files and virtual imagery.',
        ],

        solutions: [
            'Deployed a direct-purchase transactional wizard for residential housing units.',
            'Enabled direct communication between users and project officials.',
            'Configured high-fidelity media hosting for structural blueprint files and virtual imagery.',
        ],

        architecture: [
            'Laravel MVC',
            'RESTful APIs',
            'Transactional workflows',
            'Media hosting',
            'MySQL',
        ],

        links: {
            live: '',
            github: '',
        },
    },
]
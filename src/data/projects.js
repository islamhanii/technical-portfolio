export const projects = [
    {
        slug: 'shamaa-training-academy',

        name: 'Shamaa Training Academy',

        category: 'E-Learning Platform',

        featured: true,

        shortDescription:
            'An educational platform designed to manage courses, students, educational content, and learning workflows.',

        description:
            'A complete e-learning platform focused on providing structured educational experiences while giving administrators and instructors the tools required to manage courses and learners.',

        role: 'Backend Engineer',

        status: 'Production',

        image: '/images/projects/shamaa.jpg',

        technologies: [
            'PHP',
            'Laravel',
            'MySQL',
            'REST API',
            'Vue.js',
        ],

        features: [
            'Course management',
            'Student management',
            'Enrollment workflows',
            'Educational content management',
            'Authentication and authorization',
            'Progress tracking',
            'Notifications',
        ],

        challenges: [
            'Designing a maintainable backend structure for multiple educational workflows.',
            'Managing relationships between users, courses, enrollments, and progress.',
            'Keeping database queries efficient as application data grows.',
        ],

        solutions: [
            'Structured backend functionality into reusable application services.',
            'Used Eloquent relationships and eager loading appropriately.',
            'Optimized database queries and reduced unnecessary database operations.',
        ],

        architecture: [
            'Laravel MVC',
            'Service-oriented backend logic',
            'RESTful APIs',
            'Relational database architecture',
        ],

        links: {
            live: '',
            github: '',
        },
    },

    {
        slug: 'gogo-done',

        name: 'GOGO DONE',

        category: 'Maintenance Services',

        featured: true,

        shortDescription:
            'A service platform connecting customers with maintenance and home service workflows.',

        description:
            'A maintenance services platform designed to manage customer requests, service providers, orders, and operational workflows.',

        role: 'Full Stack Engineer',

        status: 'Production',

        image: '/images/projects/gogo-done.jpg',

        technologies: [
            'PHP',
            'Laravel',
            'MySQL',
            'Vue.js',
            'REST API',
        ],

        features: [
            'Service management',
            'Customer requests',
            'Order workflows',
            'User management',
            'API integration',
            'Notifications',
        ],

        challenges: [
            'Managing multiple actors within the same business workflow.',
            'Keeping service and order states consistent.',
        ],

        solutions: [
            'Implemented structured application workflows.',
            'Separated business logic from controllers.',
            'Used validation and database transactions where appropriate.',
        ],

        architecture: [
            'Laravel MVC',
            'REST API',
            'Service layer',
            'MySQL',
        ],

        links: {
            live: '',
            github: '',
        },
    },

    {
        slug: 'igo',

        name: 'iGO',

        category: 'Transportation',

        featured: true,

        shortDescription:
            'A transportation platform for managing taxi trips and related user workflows.',

        description:
            'A transportation application supporting trip management and interactions between customers and drivers.',

        role: 'Backend Engineer',

        status: 'Production',

        image: '/images/projects/igo.jpg',

        technologies: [
            'PHP',
            'Laravel',
            'MySQL',
            'REST API',
        ],

        features: [
            'Trip management',
            'Customer workflows',
            'Driver workflows',
            'Trip status management',
            'API communication',
            'Notifications',
        ],

        challenges: [
            'Managing state transitions throughout a trip lifecycle.',
            'Handling multiple user roles and permissions.',
        ],

        solutions: [
            'Designed explicit workflow states.',
            'Implemented role-aware authorization.',
            'Structured API endpoints around application resources.',
        ],

        architecture: [
            'Laravel',
            'REST API',
            'MySQL',
            'Role-based authorization',
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

        featured: true,

        shortDescription:
            'A real estate platform for managing properties and property-related information.',

        description:
            'A real estate application focused on organizing property information and providing users with structured property discovery workflows.',

        role: 'Backend Engineer',

        status: 'Production',

        image: '/images/projects/barwa.jpg',

        technologies: [
            'PHP',
            'Laravel',
            'MySQL',
            'REST API',
        ],

        features: [
            'Property management',
            'Property categorization',
            'Search workflows',
            'User management',
            'API endpoints',
        ],

        challenges: [
            'Designing flexible property data structures.',
            'Supporting filtering and structured property discovery.',
        ],

        solutions: [
            'Designed normalized relational structures.',
            'Built reusable filtering and query logic.',
        ],

        architecture: [
            'Laravel MVC',
            'Eloquent ORM',
            'MySQL',
            'REST API',
        ],

        links: {
            live: '',
            github: '',
        },
    },

    {
        slug: 'maqadeenah',

        name: 'Maqadeenah',

        category: 'E-Commerce',

        featured: true,

        shortDescription:
            'A multilingual household-goods ordering platform with subscriptions and family accounts.',

        description:
            'A multi-language ordering platform supporting household goods, subscription workflows, and family accounts.',

        role: 'Backend Engineer',

        status: 'Production',

        image: '/images/projects/maqadeenah.jpg',

        technologies: [
            'PHP',
            'Laravel',
            'MySQL',
            'REST API',
        ],

        features: [
            'Product ordering',
            'Subscriptions',
            'Family accounts',
            'Multilingual support',
            'User management',
            'Order management',
        ],

        challenges: [
            'Supporting multiple languages.',
            'Managing family-based account structures.',
            'Handling recurring subscription workflows.',
        ],

        solutions: [
            'Designed data structures around users and family relationships.',
            'Separated subscription and ordering workflows.',
            'Implemented localization-aware application logic.',
        ],

        architecture: [
            'Laravel MVC',
            'Service layer',
            'MySQL',
            'REST API',
            'Localization',
        ],

        links: {
            live: '',
            github: '',
        },
    },

    {
        slug: 'masarat',

        name: 'Masarat',

        category: 'Business Platform',

        featured: false,

        shortDescription:
            'A business-focused web application with structured backend workflows.',

        description:
            'A web application built around business workflows and data management.',

        role: 'Backend Engineer',

        status: 'Production',

        image: '/images/projects/masarat.jpg',

        technologies: [
            'PHP',
            'Laravel',
            'MySQL',
        ],

        features: [
            'Business workflows',
            'User management',
            'Data management',
            'REST APIs',
        ],

        challenges: [
            'Translating business requirements into maintainable application logic.',
        ],

        solutions: [
            'Created reusable backend components and structured application services.',
        ],

        architecture: [
            'Laravel',
            'MySQL',
            'REST API',
        ],

        links: {
            live: '',
            github: '',
        },
    },

    {
        slug: 'mordinek',

        name: 'Mordinek',

        category: 'Web Application',

        featured: false,

        shortDescription:
            'A production web application with Laravel-powered backend functionality.',

        description:
            'A web application involving structured backend functionality and data-driven workflows.',

        role: 'Backend Engineer',

        status: 'Production',

        image: '/images/projects/mordinek.jpg',

        technologies: [
            'PHP',
            'Laravel',
            'MySQL',
        ],

        features: [
            'Backend workflows',
            'Data management',
            'Authentication',
            'API endpoints',
        ],

        challenges: [
            'Maintaining a clean backend structure as features evolved.',
        ],

        solutions: [
            'Refactored repetitive functionality into reusable components.',
        ],

        architecture: [
            'Laravel MVC',
            'MySQL',
        ],

        links: {
            live: '',
            github: '',
        },
    },
]
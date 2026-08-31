export const engineeringPrinciples = [
    {
        number: '01',
        title: 'Clean Architecture & Scalable Design',
        description:
            'I focus on decoupling core business logic from framework dependencies, adhering to SOLID principles to build modular, maintainable codebases that scale without accumulating technical debt.',
        topics: [
            'SOLID Principles',
            'Service & Repository Layers',
            'Design Patterns',
            'Separation of Concerns',
        ],
    },

    {
        number: '02',
        title: 'Database & Application Performance',
        description:
            'Performance is engineered at the database layer. I optimize complex relational schemas, eliminate N+1 queries, apply strategic indexing, and leverage Redis caching for peak concurrent traffic.',
        topics: [
            'Query Optimization & Indexing',
            'Redis Caching Strategies',
            'Eager Loading',
            'Schema Normalization',
        ],
    },

    {
        number: '03',
        title: 'API Engineering & Security',
        description:
            'I design resilient RESTful APIs focused on predictable response structures, robust request validation, granular authorization models, and secure OAuth 2.0 / RBAC pipelines.',
        topics: [
            'RESTful Architecture',
            'OAuth 2.0 & RBAC Auth',
            'Strict Request Validation',
            'Fintech & Gateway Integrations',
        ],
    },

    {
        number: '04',
        title: 'System Reliability & Asynchronous Execution',
        description:
            'Production stability requires predictable error boundaries. I ensure system integrity using database transactions, structured logging, dynamic state machines, and asynchronous background queues.',
        topics: [
            'ACID Database Transactions',
            'Queues & Async Jobs',
            'State Machine Routing',
            'Containerization (Docker)',
        ],
    },
];
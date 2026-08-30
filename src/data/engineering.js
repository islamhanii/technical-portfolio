export const engineeringPrinciples = [
    {
        number: '01',
        title: 'Clean Architecture',
        description:
            'I focus on separating business logic from framework-specific concerns to keep applications easier to maintain and evolve.',
        topics: [
            'Service Layer',
            'SOLID',
            'Separation of Concerns',
            'Reusable Components',
        ],
    },

    {
        number: '02',
        title: 'Performance',
        description:
            'Performance starts at the database and application architecture level rather than being treated as an afterthought.',
        topics: [
            'Query Optimization',
            'Eager Loading',
            'Indexes',
            'Caching',
        ],
    },

    {
        number: '03',
        title: 'API Design',
        description:
            'I design APIs around clear resources, predictable responses, validation, authentication, and maintainability.',
        topics: [
            'REST',
            'Authentication',
            'Validation',
            'Error Handling',
        ],
    },

    {
        number: '04',
        title: 'Reliability',
        description:
            'Production systems need predictable behavior, proper error handling, transactions, and well-defined application workflows.',
        topics: [
            'Transactions',
            'Queues',
            'Jobs',
            'Logging',
        ],
    },
]
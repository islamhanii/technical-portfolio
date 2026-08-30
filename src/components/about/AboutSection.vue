<script setup>
import {
    ArrowUpRight,
    CheckCircle2,
} from 'lucide-vue-next'

import SectionHeading from '@/components/common/SectionHeading.vue'
import { personal } from '@/data/personal'
</script>

<template>
    <section id="about" class="section-padding border-t border-white/5">
        <div class="container-custom">
            <SectionHeading eyebrow="About Me" title="Building software with an engineering mindset."
                :description="personal.summary" />

            <div class="grid gap-8 lg:grid-cols-3">
                <div class="rounded-2xl border border-white/5 bg-zinc-900/40 p-7 lg:col-span-2">
                    <h3 class="text-xl font-semibold text-white">
                        What I Do
                    </h3>

                    <p class="mt-5 max-w-3xl text-base leading-8 text-zinc-400">
                        I specialize in backend development with PHP and
                        Laravel, building APIs and database-driven systems
                        that are structured for maintainability and real-world
                        production requirements.
                    </p>

                    <p class="mt-5 max-w-3xl text-base leading-8 text-zinc-400">
                        My work involves translating business requirements
                        into reliable application workflows, designing
                        relational data structures, optimizing queries,
                        integrating external services, and collaborating with
                        frontend teams.
                    </p>

                    <a href="#contact"
                        class="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 transition hover:text-indigo-300">
                        Let's work together

                        <ArrowUpRight :size="16" />
                    </a>
                </div>

                <div class="rounded-2xl border border-white/5 bg-zinc-900/40 p-7">
                    <h3 class="text-xl font-semibold text-white">
                        Quick Facts
                    </h3>

                    <div class="mt-6 space-y-5">
                        <div>
                            <p class="text-xs uppercase tracking-wider text-zinc-600">
                                Experience
                            </p>

                            <p class="mt-1 font-medium text-zinc-200">
                                {{ personal.experience }}
                            </p>
                        </div>

                        <div>
                            <p class="text-xs uppercase tracking-wider text-zinc-600">
                                Specialization
                            </p>

                            <p class="mt-1 font-medium text-zinc-200">
                                PHP & Laravel Backend
                            </p>
                        </div>

                        <div>
                            <p class="text-xs uppercase tracking-wider text-zinc-600">
                                Education
                            </p>

                            <p class="mt-1 font-medium text-zinc-200">
                                Cairo University
                            </p>
                        </div>

                        <div>
                            <p class="text-xs uppercase tracking-wider text-zinc-600">
                                Location
                            </p>

                            <p class="mt-1 font-medium text-zinc-200">
                                {{ personal.location }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-8 grid gap-4 sm:grid-cols-3">
                <div v-for="item in [
                    'Backend Architecture',
                    'RESTful APIs',
                    'Database Optimization',
                ]" :key="item"
                    class="flex items-center gap-3 rounded-xl border border-white/5 bg-zinc-900/30 px-5 py-4">
                    <CheckCircle2 :size="18" class="shrink-0 text-indigo-400" />

                    <span class="text-sm text-zinc-300">
                        {{ item }}
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>
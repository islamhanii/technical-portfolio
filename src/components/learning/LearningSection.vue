<script setup>
import {
    BookOpen,
    CheckCircle2,
    Clock3,
    Rocket,
} from 'lucide-vue-next'

import SectionHeading from '@/components/common/SectionHeading.vue'
import { courses } from '@/data/courses'
</script>

<template>
    <section id="learning" class="section-padding border-t border-white/5">
        <div class="container-custom">
            <SectionHeading eyebrow="Learning" title="Always improving."
                description="Technology changes quickly, so continuous learning is part of my engineering workflow." />

            <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <article v-for="course in courses" :key="course.title"
                    class="rounded-2xl border border-white/5 bg-zinc-900/30 p-6">
                    <div class="flex items-start justify-between gap-4">
                        <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800 text-indigo-400">
                            <BookOpen :size="18" />
                        </div>

                        <div v-if="course.status === 'Completed'"
                            class="flex items-center gap-1.5 text-xs text-emerald-400">
                            <CheckCircle2 :size="14" />
                            Completed
                        </div>

                        <div v-else-if="course.status === 'In Progress'"
                            class="flex items-center gap-1.5 text-xs text-amber-400">
                            <Clock3 :size="14" />
                            In Progress
                        </div>

                        <div v-else class="flex items-center gap-1.5 text-xs text-indigo-400">
                            <Rocket :size="14" />
                            Planned
                        </div>
                    </div>

                    <h3 class="mt-6 text-base font-semibold leading-6 text-white">
                        {{ course.title }}
                    </h3>

                    <p class="mt-2 text-xs text-zinc-600">
                        {{ course.provider }} · {{ course.category }}
                    </p>

                    <div class="mt-6">
                        <div class="mb-2 flex justify-between text-xs">
                            <span class="text-zinc-600">
                                Progress
                            </span>

                            <span class="text-zinc-400">
                                {{ course.progress }}%
                            </span>
                        </div>

                        <div class="h-1.5 overflow-hidden rounded-full bg-zinc-800">
                            <div class="h-full rounded-full bg-indigo-500 transition-all" :style="{
                                width: `${course.progress}%`
                            }"></div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>
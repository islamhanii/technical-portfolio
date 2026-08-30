<script setup>
import {
    BriefcaseBusiness,
    CalendarDays,
    MapPin,
} from 'lucide-vue-next'

import SectionHeading from '@/components/common/SectionHeading.vue'
import Badge from '@/components/common/Badge.vue'
import { experiences } from '@/data/experience'
</script>

<template>
    <section id="experience" class="section-padding border-t border-white/5">
        <div class="container-custom">
            <SectionHeading eyebrow="Experience" title="My professional journey."
                description="Experience building backend systems, APIs, and production applications across different domains." />

            <div class="relative ml-3 border-l border-zinc-800 pl-8 md:ml-8 md:pl-12">
                <article v-for="experience in experiences" :key="`${experience.company}-${experience.start}`"
                    class="relative pb-14 last:pb-0">
                    <div
                        class="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-4 border-zinc-950 bg-indigo-500 md:-left-[61px]">
                    </div>

                    <div class="rounded-2xl border border-white/5 bg-zinc-900/30 p-6 md:p-8">
                        <div class="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                            <div>
                                <div class="flex flex-wrap items-center gap-2">
                                    <h3 class="text-xl font-bold text-white">
                                        {{ experience.role }}
                                    </h3>

                                    <Badge :text="experience.type" />
                                </div>

                                <p class="mt-2 font-medium text-indigo-400">
                                    {{ experience.company }}
                                </p>

                                <div class="mt-4 flex flex-wrap gap-4 text-xs text-zinc-500">
                                    <span class="flex items-center gap-1.5">
                                        <CalendarDays :size="14" />
                                        {{ experience.start }} —
                                        {{ experience.end }}
                                    </span>

                                    <span class="flex items-center gap-1.5">
                                        <MapPin :size="14" />
                                        {{ experience.location }}
                                    </span>
                                </div>
                            </div>

                            <BriefcaseBusiness :size="22" class="text-zinc-700" />
                        </div>

                        <p class="mt-7 max-w-3xl text-sm leading-7 text-zinc-400">
                            {{ experience.description }}
                        </p>

                        <ul class="mt-6 space-y-3">
                            <li v-for="item in experience.responsibilities" :key="item"
                                class="flex gap-3 text-sm leading-6 text-zinc-400">
                                <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500"></span>

                                {{ item }}
                            </li>
                        </ul>

                        <div class="mt-7 flex flex-wrap gap-2">
                            <Badge v-for="technology in experience.technologies" :key="technology" :text="technology" />
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>
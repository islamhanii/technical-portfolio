<script setup>
import {
    GraduationCap,
    MapPin,
} from 'lucide-vue-next'

import SectionHeading from '@/components/common/SectionHeading.vue'
import { education } from '@/data/education'
</script>

<template>
    <section id="education" class="section-padding border-t border-white/5">
        <div class="container-custom">
            <SectionHeading eyebrow="Education" title="Academic foundation." />

            <div class="space-y-5">
                <article v-for="item in education" :key="item.institution"
                    class="rounded-2xl border border-white/5 bg-zinc-900/30 p-7">
                    <div class="flex gap-5">
                        <div
                            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-indigo-500/20 bg-indigo-500/10 text-indigo-400">
                            <GraduationCap :size="22" />
                        </div>

                        <div>
                            <p class="text-sm text-indigo-400">
                                {{ item.type }}
                            </p>

                            <h3 class="mt-1 text-xl font-bold text-white">
                                {{ item.institution }}
                            </h3>

                            <p class="mt-2 text-sm font-medium text-zinc-300">
                                {{ item.degree }}
                            </p>

                            <p class="mt-4 flex items-center gap-2 text-sm text-zinc-500">
                                <MapPin :size="14" />
                                {{ item.location }}
                            </p>

                            <p class="mt-5 max-w-3xl text-sm leading-7 text-zinc-500">
                                {{ item.description }}
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>
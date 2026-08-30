<script setup>
import {
    ArrowUpRight,
    Check,
} from 'lucide-vue-next'

import SectionHeading from '@/components/common/SectionHeading.vue'
import { engineeringPrinciples } from '@/data/engineering'
</script>

<template>
    <section id="engineering" class="section-padding border-t border-white/5">
        <div class="container-custom">
            <SectionHeading eyebrow="Engineering" title="How I approach backend engineering."
                description="Writing code is only part of the job. I care about architecture, maintainability, performance, reliability, and clear business logic." />

            <div class="grid gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 md:grid-cols-2">
                <article v-for="principle in engineeringPrinciples" :key="principle.number"
                    class="bg-zinc-950 p-7 md:p-9">
                    <div class="flex items-start justify-between">
                        <span class="font-mono text-sm text-indigo-400">
                            {{ principle.number }}
                        </span>

                        <ArrowUpRight :size="18" class="text-zinc-700" />
                    </div>

                    <h3 class="mt-8 text-xl font-bold text-white">
                        {{ principle.title }}
                    </h3>

                    <p class="mt-4 text-sm leading-7 text-zinc-500">
                        {{ principle.description }}
                    </p>

                    <div class="mt-7 space-y-3">
                        <div v-for="topic in principle.topics" :key="topic"
                            class="flex items-center gap-2 text-sm text-zinc-400">
                            <Check :size="15" class="text-indigo-400" />

                            {{ topic }}
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>
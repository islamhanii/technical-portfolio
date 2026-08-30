<script setup>
import {
    ArrowUpRight,
    FileText,
} from 'lucide-vue-next'

import SectionHeading from '@/components/common/SectionHeading.vue'
import { articles } from '@/data/articles'
</script>

<template>
    <section id="articles" class="section-padding border-t border-white/5">
        <div class="container-custom">
            <SectionHeading eyebrow="Writing" title="Technical notes & articles."
                description="Things I'm learning, building, and exploring across backend engineering and software architecture." />

            <div class="grid gap-5 md:grid-cols-3">
                <article v-for="article in articles" :key="article.title"
                    class="group rounded-2xl border border-white/5 bg-zinc-900/30 p-6 transition hover:border-indigo-500/20">
                    <div class="flex items-center justify-between">
                        <FileText :size="20" class="text-indigo-400" />

                        <span class="text-xs text-zinc-600">
                            {{ article.date }}
                        </span>
                    </div>

                    <p class="mt-6 text-xs font-medium uppercase tracking-wider text-zinc-600">
                        {{ article.category }}
                    </p>

                    <h3 class="mt-2 text-lg font-bold text-white">
                        {{ article.title }}
                    </h3>

                    <p class="mt-3 text-sm leading-6 text-zinc-500">
                        {{ article.description }}
                    </p>

                    <a :href="article.url"
                        class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 transition group-hover:text-indigo-300">
                        Read article

                        <ArrowUpRight :size="15" />
                    </a>
                </article>
            </div>
        </div>
    </section>
</template>
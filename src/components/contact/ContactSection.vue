<script setup>
import {
    ArrowUpRight,
    Github,
    Linkedin,
    Mail,
} from 'lucide-vue-next'

import SectionHeading from '@/components/common/SectionHeading.vue'
import { personal } from '@/data/personal'
</script>

<template>
    <section id="contact" class="section-padding border-t border-white/5">
        <div class="container-custom">
            <div
                class="relative overflow-hidden rounded-3xl border border-indigo-500/10 bg-indigo-500/[0.04] p-8 sm:p-12 lg:p-16">
                <div class="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl"></div>

                <div class="relative z-10 max-w-3xl">
                    <SectionHeading eyebrow="Contact" title="Let's build something useful."
                        description="Whether you have a project, an engineering opportunity, or simply want to connect, feel free to reach out." />

                    <div class="flex flex-wrap gap-3">
                        <a :href="`mailto:${personal.email}`"
                            class="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-500">
                            <Mail :size="17" />
                            Get In Touch
                        </a>

                        <a :href="personal.social.linkedin" target="_blank" rel="noopener noreferrer"
                            class="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-950/50 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-zinc-500">
                            <Linkedin :size="17" />
                            LinkedIn
                        </a>

                        <a :href="personal.social.github" target="_blank" rel="noopener noreferrer"
                            class="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-950/50 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-zinc-500">
                            <Github :size="17" />
                            GitHub
                        </a>
                    </div>

                    <div class="mt-8 flex items-center gap-2 text-sm text-zinc-500">
                        <span class="h-2 w-2 rounded-full bg-emerald-400"></span>

                        {{ personal.email }}

                        <ArrowUpRight :size="14" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
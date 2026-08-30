<script setup>
import {
    ArrowRight,
    Download,
    Github,
    Linkedin,
    Mail,
    MapPin,
    Sparkles,
} from 'lucide-vue-next'

import { personal } from '@/data/personal'
</script>

<template>
    <section id="home" class="relative flex min-h-screen items-center overflow-hidden pt-20">
        <!-- Background -->
        <div class="absolute inset-0 grid-background opacity-60"></div>

        <div class="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-600/10 blur-3xl"></div>

        <div class="container-custom relative z-10 py-20">
            <div class="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
                <!-- Left -->
                <div>
                    <div
                        class="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-sm text-emerald-400">
                        <span class="relative flex h-2 w-2">
                            <span
                                class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>

                            <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
                        </span>

                        {{ personal.availabilityText }}
                    </div>

                    <p
                        class="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
                        <Sparkles :size="16" />

                        {{ personal.specialization }}
                    </p>

                    <h1 class="max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-8xl">
                        {{ personal.firstName }}

                        <span class="text-gradient">
                            {{ personal.lastName }}
                        </span>
                    </h1>

                    <h2 class="mt-5 text-2xl font-semibold text-zinc-300 sm:text-3xl">
                        {{ personal.title }}
                    </h2>

                    <p class="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                        {{ personal.headline }}
                    </p>

                    <div class="mt-8 flex flex-wrap gap-3">
                        <a href="#projects"
                            class="group inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500">
                            View My Work

                            <ArrowRight :size="17" class="transition-transform group-hover:translate-x-1" />
                        </a>

                        <a :href="personal.cv" download
                            class="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/60 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-zinc-500 hover:bg-zinc-800">
                            <Download :size="17" />

                            Download CV
                        </a>
                    </div>

                    <div class="mt-9 flex flex-wrap items-center gap-5 text-sm text-zinc-500">
                        <span class="flex items-center gap-2">
                            <MapPin :size="16" />

                            {{ personal.location }}
                        </span>

                        <a :href="personal.social.github" target="_blank" rel="noopener noreferrer"
                            class="flex items-center gap-2 transition hover:text-white">
                            <Github :size="16" />
                            GitHub
                        </a>

                        <a :href="personal.social.linkedin" target="_blank" rel="noopener noreferrer"
                            class="flex items-center gap-2 transition hover:text-white">
                            <Linkedin :size="16" />
                            LinkedIn
                        </a>

                        <a :href="`mailto:${personal.email}`"
                            class="flex items-center gap-2 transition hover:text-white">
                            <Mail :size="16" />
                            Email
                        </a>
                    </div>
                </div>

                <!-- Right -->
                <div class="relative hidden lg:block">
                    <div
                        class="relative mx-auto aspect-square max-w-md rounded-[2rem] border border-white/10 bg-zinc-900/50 p-5 shadow-2xl shadow-indigo-950/20 backdrop-blur-xl">
                        <div class="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl"></div>

                        <div class="absolute -bottom-5 -left-5 h-24 w-24 rounded-full bg-violet-500/10 blur-2xl"></div>

                        <div
                            class="relative flex h-full flex-col justify-between rounded-2xl border border-white/5 bg-zinc-950 p-8">
                            <div>
                                <p class="text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
                                    Developer Profile
                                </p>

                                <p class="mt-5 font-mono text-sm leading-7 text-zinc-500">
                                    <span class="text-indigo-400">const</span>
                                    developer = {
                                    <br />
                                    &nbsp;&nbsp;name:
                                    <span class="text-emerald-400">
                                        "Islam Hani"
                                    </span>,
                                    <br />
                                    &nbsp;&nbsp;role:
                                    <span class="text-emerald-400">
                                        "Backend Engineer"
                                    </span>,
                                    <br />
                                    &nbsp;&nbsp;stack:
                                    <span class="text-emerald-400">
                                        "Laravel"
                                    </span>,
                                    <br />
                                    &nbsp;&nbsp;focus:
                                    <span class="text-emerald-400">
                                        "Scalable Systems"
                                    </span>
                                    <br />
                                    };
                                </p>
                            </div>

                            <div class="mt-12 grid grid-cols-3 gap-3">
                                <div v-for="stat in personal.stats" :key="stat.label"
                                    class="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                                    <p class="text-xl font-bold text-white">
                                        {{ stat.value }}
                                    </p>

                                    <p class="mt-1 text-[10px] leading-4 text-zinc-600">
                                        {{ stat.label }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div
            class="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-600 md:flex">
            <span class="text-[10px] uppercase tracking-[0.3em]">
                Scroll
            </span>

            <div class="h-8 w-px bg-gradient-to-b from-zinc-600 to-transparent"></div>
        </div>
    </section>
</template>
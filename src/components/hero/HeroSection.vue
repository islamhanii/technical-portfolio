<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import {
    ArrowRight,
    Code2,
    Download,
    Mail,
    MapPin,
    Sparkles,
    User,
} from 'lucide-vue-next'

import { personal } from '@/data/personal'

const activeTab = ref('image')
</script>

<template>
    <section id="home" class="relative flex min-h-screen items-center overflow-hidden pt-20">
        <!-- Background Grid & Glow Effects -->
        <div class="absolute inset-0 grid-background opacity-60"></div>
        <div class="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-600/10 blur-3xl"></div>
        <div class="absolute right-10 top-1/3 h-72 w-72 rounded-full bg-violet-600/10 blur-3xl"></div>

        <div class="container-custom relative z-10 py-20">
            <div class="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
                <!-- Left Column: Personal Intro -->
                <div>
                    <!-- Availability Pill -->
                    <div
                        class="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-sm text-emerald-400">
                        <span class="relative flex h-2 w-2">
                            <span
                                class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                            <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
                        </span>
                        {{ personal.availabilityText }}
                    </div>

                    <!-- Specialization -->
                    <p
                        class="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
                        <Sparkles :size="16" />
                        {{ personal.specialization }}
                    </p>

                    <!-- Main Name Heading -->
                    <h1 class="max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-8xl">
                        {{ personal.firstName }}
                        <span class="text-gradient">
                            {{ personal.lastName }}
                        </span>
                    </h1>

                    <!-- Title -->
                    <h2 class="mt-5 text-2xl font-semibold text-zinc-300 sm:text-3xl">
                        {{ personal.title }}
                    </h2>

                    <!-- Headline Bio -->
                    <p class="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                        {{ personal.headline }}
                    </p>

                    <!-- CTA Action Buttons -->
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

                    <!-- Contact & Social Links Section -->
                    <div class="mt-9 flex flex-wrap items-center gap-5 text-sm text-zinc-500">
                        <span class="flex items-center gap-2">
                            <MapPin :size="16" />
                            {{ personal.location }}
                        </span>

                        <a :href="personal.social.github" target="_blank" rel="noopener noreferrer"
                            class="flex items-center gap-2 transition hover:text-white">
                            <Icon icon="simple-icons:github" class="h-4 w-4" />
                            GitHub
                        </a>

                        <a :href="personal.social.linkedin" target="_blank" rel="noopener noreferrer"
                            class="flex items-center gap-2 transition hover:text-white">
                            <Icon icon="simple-icons:linkedin" class="h-4 w-4" />
                            LinkedIn
                        </a>

                        <a :href="`mailto:${personal.email}`"
                            class="flex items-center gap-2 transition hover:text-white">
                            <Mail :size="16" />
                            Email
                        </a>
                    </div>
                </div>

                <!-- Right Column: Card Showcase -->
                <div class="relative">
                    <div
                        class="relative mx-auto aspect-square max-w-md rounded-[2rem] border border-white/10 bg-zinc-900/50 p-4 shadow-2xl shadow-indigo-950/20 backdrop-blur-xl sm:p-5">
                        <!-- Glow Effects -->
                        <div class="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl"></div>
                        <div class="absolute -bottom-5 -left-5 h-24 w-24 rounded-full bg-violet-500/10 blur-2xl"></div>

                        <div
                            class="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-zinc-950 p-5 sm:p-6">

                            <!-- Header Bar with View Switcher -->
                            <div class="z-20 flex items-center justify-between border-b border-white/10 pb-3">
                                <span class="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
                                    {{ activeTab === 'image' ? 'Profile Showcase' : 'Developer Profile' }}
                                </span>

                                <!-- Toggle Buttons -->
                                <div
                                    class="flex items-center gap-1 rounded-lg border border-white/10 bg-zinc-900/80 p-1">
                                    <button @click="activeTab = 'image'" :class="[
                                        'flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition cursor-pointer',
                                        activeTab === 'image'
                                            ? 'bg-indigo-600 text-white shadow'
                                            : 'text-zinc-400 hover:text-white'
                                    ]">
                                        <User :size="13" />
                                        Photo
                                    </button>
                                    <button @click="activeTab = 'code'" :class="[
                                        'flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition cursor-pointer',
                                        activeTab === 'code'
                                            ? 'bg-indigo-600 text-white shadow'
                                            : 'text-zinc-400 hover:text-white'
                                    ]">
                                        <Code2 :size="13" />
                                        Code
                                    </button>
                                </div>
                            </div>

                            <!-- Fixed Height Middle Container (Prevents layout shift/resize between views) -->
                            <div class="relative my-auto flex h-52 w-full items-center justify-center">
                                <!-- VIEW 1: Profile Image View -->
                                <div v-if="activeTab === 'image'"
                                    class="relative flex h-full w-full items-center justify-center">
                                    <div
                                        class="group relative h-48 w-48 overflow-hidden rounded-2xl border-2 border-indigo-500/30 bg-zinc-900 shadow-xl">
                                        <img :src="personal.avatar || personal.image || '/images/profile.jpg'"
                                            :alt="`${personal.firstName} ${personal.lastName}`"
                                            class="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105" />
                                        <div
                                            class="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent">
                                        </div>

                                        <!-- Floating Role Badge on Image -->
                                        <div
                                            class="absolute bottom-2 left-2 right-2 rounded-lg border border-white/10 bg-zinc-950/70 p-1.5 text-center backdrop-blur-md">
                                            <p class="text-xs font-semibold text-white">
                                                {{ personal.firstName }} {{ personal.lastName }}
                                            </p>
                                            <p class="text-[10px] text-indigo-400">
                                                {{ personal.title }}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <!-- VIEW 2: Code Snippet View -->
                                <div v-else class="flex h-full w-full items-center justify-start px-2">
                                    <p class="font-mono text-xs leading-6 text-zinc-400 sm:text-sm sm:leading-7">
                                        <span class="text-indigo-400">const</span>
                                        developer = {
                                        <br />
                                        &nbsp;&nbsp;name:
                                        <span class="text-emerald-400">
                                            "{{ personal.firstName }} {{ personal.lastName }}"
                                        </span>,
                                        <br />
                                        &nbsp;&nbsp;role:
                                        <span class="text-emerald-400">
                                            "{{ personal.title }}"
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
                            </div>

                            <!-- Stats Footer -->
                            <div class="grid grid-cols-3 gap-2 border-t border-white/5 pt-3">
                                <div v-for="stat in personal.stats" :key="stat.label"
                                    class="rounded-xl border border-white/5 bg-white/[0.02] p-2.5 text-center">
                                    <p class="text-base font-bold text-white sm:text-lg">
                                        {{ stat.value }}
                                    </p>
                                    <p class="mt-0.5 text-[9px] leading-3 text-zinc-500 sm:text-[10px]">
                                        {{ stat.label }}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Scroll Indicator -->
        <div
            class="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-600 md:flex">
            <span class="text-[10px] uppercase tracking-[0.3em]">
                Scroll
            </span>
            <div class="h-8 w-px bg-gradient-to-b from-zinc-600 to-transparent"></div>
        </div>
    </section>
</template>
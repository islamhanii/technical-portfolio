<script setup>
import { hobbies } from '@/data/hobbies'
</script>

<template>
    <section id="hobbies" class="py-24">
        <div class="mx-auto max-w-6xl px-6">

            <!-- Section Header -->
            <div class="mb-12 max-w-2xl">
                <span class="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary-500">
                    Beyond Coding
                </span>

                <h2 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                    Hobbies & Interests
                </h2>

                <p class="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
                    Things I enjoy outside of my day-to-day development work.
                    They keep me curious, creative, and continuously learning.
                </p>
            </div>

            <!-- Hobbies Grid -->
            <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                <article v-for="hobby in hobbies" :key="hobby.name"
                    class="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-xl hover:shadow-primary-500/10 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-primary-700">
                    <!-- Background Glow -->
                    <div
                        class="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-primary-500/5 blur-2xl transition-all duration-300 group-hover:bg-primary-500/15" />

                    <!-- Icon -->
                    <div
                        class="relative mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-50 dark:bg-slate-800 dark:group-hover:bg-primary-950">
                        {{ hobby.icon }}
                    </div>

                    <!-- Name -->
                    <h3 class="relative text-sm font-semibold text-slate-800 dark:text-slate-200">
                        {{ hobby.name }}
                    </h3>
                </article>
            </div>
        </div>
    </section>
</template>
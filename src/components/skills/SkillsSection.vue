<script setup>
import {
    Braces,
    Code2,
    Database,
    GitBranch,
    Layers3,
    Server,
    ShieldCheck,
    Terminal,
    Workflow,
    Zap,
} from 'lucide-vue-next'

import SectionHeading from '@/components/common/SectionHeading.vue'
import { skillGroups } from '@/data/skills'

const icons = {
    php: Code2,
    laravel: Code2,
    api: Workflow,
    database: Database,
    shield: ShieldCheck,
    layers: Layers3,
    table: Database,
    zap: Zap,
    search: Database,
    repeat: Workflow,
    code: Code2,
    braces: Braces,
    palette: Code2,
    'git-branch': GitBranch,
    box: Layers3,
    terminal: Terminal,
    github: GitBranch,
    server: Server,
    workflow: Workflow,
}
</script>

<template>
    <section id="skills" class="section-padding border-t border-white/5">
        <div class="container-custom">
            <SectionHeading eyebrow="Skills" title="Tools I use to build software."
                description="A practical stack focused on backend engineering, databases, APIs, modern frontend collaboration, and development infrastructure." />

            <div class="grid gap-5 md:grid-cols-2">
                <article v-for="group in skillGroups" :key="group.title"
                    class="rounded-2xl border border-white/5 bg-zinc-900/30 p-6 transition hover:border-indigo-500/20 hover:bg-zinc-900/50">
                    <h3 class="text-lg font-semibold text-white">
                        {{ group.title }}
                    </h3>

                    <p class="mt-2 text-sm leading-6 text-zinc-500">
                        {{ group.description }}
                    </p>

                    <div class="mt-6 grid grid-cols-2 gap-3">
                        <div v-for="skill in group.skills" :key="skill.name"
                            class="group rounded-xl border border-white/5 bg-zinc-950/60 p-4 transition hover:border-white/10">
                            <div class="flex items-center gap-3">
                                <component :is="icons[skill.icon]" :size="18" class="text-indigo-400" />

                                <div class="min-w-0">
                                    <p class="truncate text-sm font-medium text-zinc-200">
                                        {{ skill.name }}
                                    </p>

                                    <p class="mt-0.5 text-[11px] text-zinc-600">
                                        {{ skill.level }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>
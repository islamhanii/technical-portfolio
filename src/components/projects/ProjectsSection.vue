<script setup>
import SectionHeading from '@/components/common/SectionHeading.vue'
import ProjectCard from './ProjectCard.vue'

import { projects } from '@/data/projects'

const featuredProjects = projects.filter(
    project => project.featured
)
</script>

<template>
    <section id="projects" class="section-padding border-t border-white/5">
        <div class="container-custom">
            <SectionHeading eyebrow="Selected Work" title="Projects I've worked on."
                description="A selection of applications and systems covering e-learning, transportation, real estate, e-commerce, and business workflows." />

            <div class="grid gap-6 md:grid-cols-2">
                <ProjectCard v-for="project in featuredProjects" :key="project.slug" :project="project" />
            </div>

            <div v-if="projects.length > featuredProjects.length" class="mt-10 text-center">
                <p class="text-sm text-zinc-600">
                    More projects and case studies are being added.
                </p>
            </div>
        </div>
    </section>
</template>
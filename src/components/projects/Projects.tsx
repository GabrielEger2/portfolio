'use client'

import { useTranslations } from 'next-intl'
import FilteredList from '../layout/FilteredList'
import ProjectCard from './ProjectCard'

interface Project {
  title: string
  description: string
  technologies: string[]
  githubLink: string
  languages: string[]
}

const Projects = () => {
  const t = useTranslations('projects')

  const projects: Project[] = t.raw('projects')
  const projectsTags = t.raw('languagesTags')

  const filterFunction = (
    project: Project,
    searchTerm: string,
    searchTag: string,
  ) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (searchTag === '' || project.languages.includes(searchTag))

  return (
    <FilteredList
      items={projects}
      filterFunction={filterFunction}
      renderItem={(project) => <ProjectCard {...project} />}
      filterTags={projectsTags}
      labelText={t('projectsFilter.title')}
      placeholderText={t('projectsFilter.inputPlaceholder')}
      allOptions={t('projectsFilter.allOptions')}
      getKey={(project) => project.title}
    />
  )
}

export default Projects

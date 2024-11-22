// Library
import { FC, useCallback } from 'react'

// Local
import { useQuery } from '@tanstack/react-query'
import { ProjectCard, ProjectCardLoader } from '../components'
import { PicsumImage } from '../services/@types'
import { getPicsumImages } from '../services/picsum'
import { cn } from '../utils'

export const Projects: FC = () => {
  const { data, error, isPending } = useQuery({
    queryKey: ['projects'],
    queryFn: () => getPicsumImages({ limit: 20, page: 30 }),
  })

  const renderProject = useCallback(
    (project: PicsumImage) => (
      <ProjectCard key={project.id} item={project} className="h-full" />
    ),
    [],
  )

  if (error) return 'An error has occurred: ' + error.message

  return (
    <section
      className={cn(
        'grid h-screen w-full grid-cols-1 gap-6 overflow-y-auto px-6 py-4',
        'md:grid-cols-2',
        'lg:grid-cols-3',
        'xl:grid-cols-4',
      )}
    >
      {isPending
        ? Array(12)
            .fill(1)
            .map((_, index) => <ProjectCardLoader key={index} />)
        : data?.map(renderProject)}
    </section>
  )
}

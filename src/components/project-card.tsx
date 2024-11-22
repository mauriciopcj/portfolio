import { FC } from 'react'

import { PicsumImage } from '../services/@types'
import { cn } from '../utils'
import { Button } from './ui/button'

type DivAttributes = React.HTMLAttributes<HTMLDivElement>

export interface Props extends DivAttributes {
  item: PicsumImage
}

export const ProjectCard: FC<Props> = ({ item, className, ...props }) => {
  return (
    <div
      className={cn(
        'flex h-[400px] flex-col rounded-[8px] border bg-white shadow-md shadow-gray-500/30',
        className,
      )}
      {...props}
    >
      <figure className="relative">
        <img
          src={item.download_url}
          alt={item.author}
          className="aspect-video w-full rounded-t-[8px] object-cover shadow-sm shadow-black/50"
        />
        <figcaption className="absolute bottom-0 w-full bg-gradient-to-l from-black/60 via-transparent px-4 text-end text-sm font-semibold text-white">
          {item.width} x {item.height}
        </figcaption>
      </figure>

      <div className="flex h-full flex-col gap-2 p-4">
        <p className="font-bold">{item.author}</p>

        <Button className="ml-auto mt-auto" variant="text">
          Saiba mais
        </Button>
      </div>
    </div>
  )
}

export const ProjectCardLoader = () => {
  return (
    <div className="flex flex-col rounded-[8px] border bg-white shadow-md shadow-gray-500/30">
      <div className="aspect-video w-full animate-pulse rounded-t-[8px] bg-gray-300 object-cover shadow-sm shadow-black/50" />
      <div className="flex flex-col gap-2 p-4">
        <p className="h-5 w-1/2 animate-pulse rounded-md bg-gray-300 font-bold"></p>
        <div className="ml-auto h-8 w-24 animate-pulse rounded-lg bg-gray-300"></div>
      </div>
    </div>
  )
}

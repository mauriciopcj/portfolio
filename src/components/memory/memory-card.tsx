import { FC } from 'react'

import { cn } from '../../utils'
import { Card } from './@types'

interface MemoryCardProps {
  card: Card
  className?: string
  isFlipped: boolean
  onClick?: (card: Card) => void
}

export const MemoryCard: FC<MemoryCardProps> = ({
  card,
  className,
  isFlipped,
  onClick,
}) => {
  const handleClick = () => onClick?.(card)

  return (
    <div className={cn('w-full [perspective:1000px]', className)}>
      <div
        key={card.index}
        onClick={handleClick}
        className={cn(
          'relative aspect-[3/4] w-full cursor-pointer rounded-xl border-[10px]',
          'border-white bg-white shadow-md transition-all duration-500',
          '[transform-style:preserve-3d]',
          { '[transform:rotateY(180deg)]': isFlipped },
        )}
      >
        <div className="absolute inset-0 flex aspect-[3/4] size-full items-center justify-center bg-teal-500 text-8xl text-white">
          ?
        </div>
        <div className="absolute inset-0 aspect-[3/4] size-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <img src={card.image} alt="" className="size-full object-cover" />
        </div>
      </div>
    </div>
  )
}

import { IconType } from 'react-icons'
import { FaCirclePause, FaCirclePlay, FaCircleStop } from 'react-icons/fa6'
import { cn } from '../utils'

interface CardProps {
  Icon: IconType
  className: string
  name: string
}

export const TimeRecord = () => {
  const cards: Array<CardProps> = [
    { name: 'Iniciar', Icon: FaCirclePlay, className: 'bg-green-400' },
    { name: 'Pausar', Icon: FaCirclePause, className: 'bg-blue-400' },
    { name: 'Encerrar', Icon: FaCircleStop, className: 'bg-red-400' },
  ]

  const renderCards = (card: CardProps) => {
    const { name, Icon, className } = card

    return (
      <div
        className="flex flex-col items-center opacity-80 hover:opacity-100"
        key={name}
      >
        <h1 className="text-sm">{name}</h1>
        <div
          key={card.name}
          className={cn(
            'flex aspect-square w-fit flex-col items-center justify-between rounded-full border p-2 shadow',
            className,
          )}
        >
          <Icon className="text-[56px] font-bold text-white" />
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6 p-4">
      <h1>Record</h1>

      <article className="mx-auto grid w-fit grid-cols-3 gap-2 rounded-md bg-white p-4">
        {cards.map(renderCards)}
      </article>
    </div>
  )
}

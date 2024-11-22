import { cn } from '../../utils'

export interface Tile {
  value: number
  index: number
}

interface PuzzleSquareProps {
  number: Tile
  moveTile: (tile: Tile) => void
}

export const PuzzleTile = ({ number, moveTile }: PuzzleSquareProps) => {
  const { value, index } = number
  return (
    <div
      onClick={() => moveTile(number)}
      className={cn(
        'absolute box-border flex min-h-[200px] min-w-[200px] cursor-pointer items-center justify-center bg-puzzle-tile text-[100px] text-white transition-all duration-300',
        {
          'bg-puzzle-correct': value === index + 1,
          'pointer-events-none bg-transparent': value === 16,
          'left-0': [0, 4, 8, 12].includes(index),
          'left-[200px]': [1, 5, 9, 13].includes(index),
          'left-[400px]': [2, 6, 10, 14].includes(index),
          'left-[600px]': [3, 7, 11, 15].includes(index),
          'top-0': [0, 1, 2, 3].includes(index),
          'top-[200px]': [4, 5, 6, 7].includes(index),
          'top-[400px]': [8, 9, 10, 11].includes(index),
          'top-[600px]': [12, 13, 14, 15].includes(index),
        },
      )}
    >
      {value === 16 ? '' : value}
    </div>
  )
}

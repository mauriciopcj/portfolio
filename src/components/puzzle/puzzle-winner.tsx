import { PuzzleNewGame } from './puzzle-new-game'
import { Tile } from './puzzle-tile'

interface PuzzleWinnerProps {
  numbers: Array<Tile>
  reset: () => void
}

export const PuzzleWinner = ({ numbers, reset }: PuzzleWinnerProps) => {
  if (!numbers.every((n) => n.value === n.index + 1)) return null

  return (
    <div className="absolute inset-0 z-[100] flex flex-col items-center justify-center rounded-[10px] bg-puzzle-tile text-white">
      <p>You win!</p>
      <PuzzleNewGame reset={reset} />
    </div>
  )
}

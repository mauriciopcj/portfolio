interface PuzzleNewGameProps {
  reset: () => void
}

export const PuzzleNewGame = ({ reset }: PuzzleNewGameProps) => {
  return (
    <div className="mt-[30px] flex justify-center">
      <button
        className="cursor-pointer rounded-[10px] border-none bg-puzzle-correct px-[20px] py-[10px] text-[20px] text-white hover:bg-puzzle-tile"
        onClick={reset}
      >
        New Game
      </button>
    </div>
  )
}

import { FC, useEffect, useMemo, useState } from 'react'

import { PuzzleNewGame } from './puzzle-new-game'
import { PuzzleOverlay } from './puzzle-overlay'
import { PuzzleTile, Tile } from './puzzle-tile'
import { PuzzleWinner } from './puzzle-winner'

const shuffle = (size: number): Array<Tile> => {
  return new Array(size)
    .fill(1)
    .map((_, index) => index + 1)
    .sort(() => Math.random() - 0.5)
    .map((value, index) => ({ value, index }))
}

const size = 16

export const PuzzleBoard: FC = () => {
  const [numbers, setNumbers] = useState<Array<Tile>>(shuffle(size))
  console.log('🚀 ~ numbers:', numbers)
  const [animating, setAnimating] = useState(false)

  const i16 = useMemo(
    () => numbers.find((number) => number.value === size)?.index,
    [numbers],
  )

  const reset = () => setNumbers(shuffle(size))

  const moveTile = (tile: Tile) => {
    if (i16 !== undefined) {
      if (
        ![i16 - 1, i16 + 1, i16 - 4, i16 + 4].includes(tile.index) ||
        animating
      )
        return

      const newNumbers = [...numbers].map((number) => {
        if (number.index !== i16 && number.index !== tile.index) return number

        if (number.value === size) return { value: size, index: tile.index }

        return { value: tile.value, index: i16 }
      })
      setAnimating(true)
      setNumbers(newNumbers)
      setTimeout(() => setAnimating(false), 200)
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (i16 !== undefined) {
      switch (e.key) {
        case 'ArrowLeft':
          if (!(i16 % 4 === 3)) {
            const tile = numbers.find((n) => n.index === i16 + 1)
            return tile && moveTile(tile)
          }
          break
        case 'ArrowUp':
          if (!(i16 > 11)) {
            const tile = numbers.find((n) => n.index === i16 + 4)
            return tile && moveTile(tile)
          }
          break
        case 'ArrowRight':
          if (!(i16 % 4 === 0)) {
            const tile = numbers.find((n) => n.index === i16 - 1)
            return tile && moveTile(tile)
          }
          break
        case 'ArrowDown':
          if (!(i16 < 4)) {
            const tile = numbers.find((n) => n.index === i16 - 4)
            return tile && moveTile(tile)
          }
          break
        default:
          break
      }
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  })

  useEffect(reset, [])

  return (
    <div className="relative">
      <div className="relative grid grid-cols-[repeat(4,200px)] grid-rows-[repeat(4,200px)] overflow-hidden rounded-[10px] border-[10px] border-[#55ab9f]">
        <PuzzleOverlay size={size} />

        {numbers.map((x, i) => {
          return <PuzzleTile key={i} number={x} moveTile={moveTile} />
        })}
      </div>

      <PuzzleWinner numbers={numbers} reset={reset} />

      <PuzzleNewGame reset={reset} />
    </div>
  )
}

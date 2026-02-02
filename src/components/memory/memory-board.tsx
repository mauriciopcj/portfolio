import { FC, useState } from 'react'

import { shuffle } from '../../utils/array'
import { Button } from '../ui/button'
import { Card } from './@types'
import { MemoryCard } from './memory-card'

type ValideQuantities = 6 | 8 | 10 | 12

const DEFAULT_QUANTITY = 6

const QUANTITIES: Array<ValideQuantities> = [6, 8, 10, 12]

const generateNewImages = (quantity: ValideQuantities) => {
  return Array(quantity)
    .fill(1)
    .map(
      (value, index) => `https://picsum.photos/300/400?random=${value + index}`,
    )
}

const generateCards = (
  quantity: ValideQuantities = DEFAULT_QUANTITY,
): Array<Card> => {
  const images = generateNewImages(quantity)
  const duplicateImages = images.concat(images)
  const shufledImages = shuffle(duplicateImages)
  return shufledImages.map((image, index) => ({
    image,
    index,
    matched: false,
  }))
}

export const MemoryBoard: FC = () => {
  const [cards, setCards] = useState(generateCards())
  const [flippedCards, setFlippedCards] = useState<Array<Card>>([])
  const [isChecking, setIsChecking] = useState(false)
  const [matchedPairs, setMatchedPairs] = useState(0)

  const restart = (quantity?: ValideQuantities) =>
    setCards(generateCards(quantity))

  const flipCard = (clickedCard: Card) => {
    if (
      clickedCard.matched ||
      isChecking ||
      flippedCards.some((card) => card.index === clickedCard.index)
    ) {
      return
    }

    const newFlippedCards = [...flippedCards, clickedCard]
    setFlippedCards(newFlippedCards)

    if (newFlippedCards.length === 2) {
      setIsChecking(true)

      if (newFlippedCards[0].image === newFlippedCards[1].image) {
        setMatchedPairs(matchedPairs + 1)

        setCards((prevCards) =>
          prevCards.map((card) =>
            newFlippedCards.some(
              (flippedCard) => flippedCard.index === card.index,
            )
              ? { ...card, matched: true }
              : card,
          ),
        )
      }

      setTimeout(() => {
        setFlippedCards([])
        setIsChecking(false)
      }, 500)
    }
  }

  return (
    <div className="p-4">
      <div className="flex w-full gap-4 rounded-lg border p-6">
        <Button onClick={() => restart()}>Restart</Button>

        {QUANTITIES.map((quantity) => {
          return (
            <Button key={quantity} onClick={() => restart(quantity)}>
              {quantity * 2}
            </Button>
          )
        })}
      </div>

      <div className="flex flex-wrap gap-4 px-6">
        {cards.map((card) => {
          const isFlipped =
            flippedCards.some(
              (flippedCard) => flippedCard.index === card.index,
            ) || card.matched

          return (
            <MemoryCard
              card={card}
              className="w-[200px] min-w-[200px]"
              isFlipped={isFlipped}
              key={card.index}
              onClick={flipCard}
            />
          )
        })}
      </div>
    </div>
  )
}

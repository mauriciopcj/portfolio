interface PuzzleOverlayProps {
  size: number
}

export const PuzzleOverlay = ({ size }: PuzzleOverlayProps) => {
  return new Array(size)
    .fill(0)
    .map((_, index) => (
      <div
        className="pointer-events-none z-20 border-[10px] border-[#55ab9f]"
        key={index}
      />
    ))
}

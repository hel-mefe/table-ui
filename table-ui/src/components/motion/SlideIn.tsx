import { motion } from "motion/react"
import { ReactNode, CSSProperties } from "react"

type Direction = "left" | "right" | "up" | "down"

const offsets: Record<Direction, { x?: number; y?: number }> = {
  left:  { x: -24 },
  right: { x: 24 },
  up:    { y: -24 },
  down:  { y: 24 },
}

interface SlideInProps {
  children: ReactNode
  direction?: Direction
  duration?: number
  delay?: number
  style?: CSSProperties
  className?: string
}

export const SlideIn = ({
  children,
  direction = "up",
  duration = 0.4,
  delay = 0,
  style,
  className,
}: SlideInProps) => (
  <motion.div
    initial={{ opacity: 0, ...offsets[direction] }}
    animate={{ opacity: 1, x: 0, y: 0 }}
    transition={{ duration, delay, ease: "easeOut" }}
    style={style}
    className={className}
  >
    {children}
  </motion.div>
)

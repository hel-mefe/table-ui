import { motion } from "motion/react"
import { ReactNode, CSSProperties } from "react"

interface StaggerContainerProps {
  children: ReactNode
  staggerDelay?: number
  delayChildren?: number
  style?: CSSProperties
  className?: string
}

export const StaggerContainer = ({
  children,
  staggerDelay = 0.08,
  delayChildren = 0,
  style,
  className,
}: StaggerContainerProps) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: staggerDelay,
          delayChildren,
        },
      },
    }}
    style={style}
    className={className}
  >
    {children}
  </motion.div>
)

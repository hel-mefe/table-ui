import { motion } from "motion/react"
import { ReactNode, CSSProperties } from "react"

interface StaggerItemProps {
  children: ReactNode
  style?: CSSProperties
  className?: string
}

export const StaggerItem = ({ children, style, className }: StaggerItemProps) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 10 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, ease: "easeOut" },
      },
    }}
    style={style}
    className={className}
  >
    {children}
  </motion.div>
)

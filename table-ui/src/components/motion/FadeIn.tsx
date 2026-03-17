import { motion } from "motion/react"
import { ReactNode, CSSProperties } from "react"

interface FadeInProps {
  children: ReactNode
  duration?: number
  delay?: number
  style?: CSSProperties
  className?: string
}

export const FadeIn = ({
  children,
  duration = 0.4,
  delay = 0,
  style,
  className,
}: FadeInProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration, delay, ease: "easeOut" }}
    style={style}
    className={className}
  >
    {children}
  </motion.div>
)

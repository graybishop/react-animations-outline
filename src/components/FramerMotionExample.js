import { motion } from "framer-motion"

const FramerMotionExample = () => {

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className="bg-white"
    >stuff in here</motion.div>
  )


}

export default FramerMotionExample
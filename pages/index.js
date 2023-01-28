import Link from "next/link"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col md:items-center md:pt-12"
    >
      <h1 className="font-bold mb-4 text-4xl md:text-5xl">Welcome to timelessthreads!</h1>
      <p className="max-w-5xl text-gray-600 text-xl mb-8 leading-relaxed md:leading-snug md:text-3xl md:text-center md:mb-12">
        This is a fake eCommerce vintage store I built to learn
        and utilize crucial features of NextJS like Static Generation
        and dynamic routing. It is also built using TailwindCSS. Images
        are from Depop.
      </p>
      <Link href="/products">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-2xl py-4 px-16 bg-gray-800 text-white text-2xl hover:bg-gray-700"
        >
          Shop Now
        </motion.button>
      </Link>
    </motion.div>
  )
}

import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center pt-12">
      <h1 className="font-bold text-5xl mb-4">Welcome to timelessthreads!</h1>
      <p className="max-w-5xl text-3xl text-gray-600 text-center mb-16">
        This is a fake eCommerce vintage store I built to learn
        and utilize crucial features of NextJS like Static Generation
        and dynamic routing. It is also built using TailwindCSS.
      </p>
      <Link href="/products">
        <button className="rounded-2xl py-4 px-16 bg-gray-800 text-white text-2xl hover:bg-gray-700">Go to products</button>
      </Link>
    </div>
  )
}

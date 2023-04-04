import Link from "next/link"

import { APIPost } from "@/lib/fetchData"

export default function Menu({ posts }) {
  return (
    <div className="absolute left-0 top-0 z-10 h-screen w-screen border-r-[1px] border-r-gray-400 bg-stone-800 md:relative md:max-w-[300px] lg:max-w-[400px]">
      <div className="flex flex-col  justify-between bg-stone-800 p-3">
        <h3 className="text-xl font-normal capitalize">Select a document</h3>
        {/* <span className=" md:hidden"></span> */}
        <ul className="mt-8">
          {posts.map((post: APIPost) => (
            <li
              key={post.name}
              className=" hover:rounded-lg hover:bg-neutral-700"
            >
              <Link
                href={`/pages/${post.id}`}
                className="block h-full w-full px-1 py-2 "
              >
                {post.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

//   <div className="border-b border-b-gray-400 p-4 capitalize tracking-widest">

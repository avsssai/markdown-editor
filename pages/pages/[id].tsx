import React, { useEffect, useState } from "react"
import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import { useMenuState } from "@/hooks/useToggleMenu"
import clsx from "clsx"
import { marked } from "marked"

import { APIPost, fetchPosts, fetchSinglePost } from "@/lib/fetchData"
import HTMLOutput from "@/components/HTMLOutput/HTMLOutput"
import Menu from "@/components/Menu/Menu"
import { Icons } from "@/components/icons"
import { Layout } from "@/components/layout"
import { Textarea } from "@/components/ui/textarea"

export default function Slug({
  post,
  posts,
}: {
  post: APIPost
  posts: APIPost[]
}) {
  const [show, setShow] = useState(true)
  const [markdownInput, setMarkdownInput] = useState("")
  const [html, setHtml] = useState("")
  const [menuState, setMenuState] = useMenuState()
  useEffect(() => {
    setMarkdownInput(post.content)
  }, [post.content])
  useEffect(() => {
    setHtml(marked(markdownInput))
  }, [markdownInput])
  return (
    <Layout>
      <Head>
        <title>{post.name}</title>
        <meta
          name="description"
          content="Next.js template for building apps with Radix UI and Tailwind CSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="relative isolate flex">
        {menuState && <Menu posts={posts} />}
        <div className={clsx(!show && "hidden", "flex-1")}>
          <div className="flex items-center justify-between bg-stone-800 p-3">
            <h3 className="font-mono text-xl font-normal">MARKDOWN</h3>
            <span className=" md:hidden">
              {show ? (
                <Icons.eyeOff onClick={() => setShow(!show)} />
              ) : (
                <Icons.eye onClick={() => setShow(!show)} />
              )}
            </span>
          </div>
          <Textarea
            placeholder="Type in your Markdown here..."
            className="h-screen min-h-screen resize-none border-none font-mono text-lg text-gray-500 !outline-none focus:outline-none"
            onChange={(e) => setMarkdownInput(e.target.value)}
            value={markdownInput}
          />
        </div>

        <div className="divider h-auto w-[1px] bg-gray-500"></div>

        <div className={clsx(show && "hidden", "flex-1", "md:block")}>
          <div className="flex items-center justify-between bg-stone-800 p-3">
            <h3 className="font-mono text-xl font-normal">PREVIEW</h3>
            <span
              onClick={(e) => {
                console.log({ markdown: marked.parse(markdownInput) })
                setHtml(marked.parse(markdownInput))
              }}
            >
              {show ? (
                <Icons.eyeOff onClick={() => setShow(!show)} />
              ) : (
                <Icons.eye onClick={() => setShow(!show)} />
              )}
            </span>
          </div>
          <HTMLOutput html={html} />
        </div>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context
  const posts = await fetchPosts()
  const post = await fetchSinglePost(params.id as string)

  return {
    props: {
      post,
      posts,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const posts = await fetchPosts()
    const paths = posts.map((post: APIPost) => {
      return { params: { id: post.id } }
    })
    return {
      paths,
      fallback: false,
    }
  } catch (error: any) {
    console.log(error.message)
  }
}

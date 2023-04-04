import React, { useState } from "react"
import { GetStaticProps } from "next"
import Head from "next/head"
import { useMenuState } from "@/hooks/useToggleMenu"

import { fetchPosts } from "@/lib/fetchData"
import Menu from "@/components/Menu/Menu"
import { Layout } from "@/components/layout"

export default function IndexPage({ posts }) {
  const [menuState, setMenuState] = useMenuState()

  return (
    <Layout>
      <Head>
        <title>Markdown</title>
        <meta
          name="description"
          content="Next.js template for building apps with Radix UI and Tailwind CSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="relative isolate flex">
        {menuState && <Menu posts={posts} />}

        <div className="flex w-fit flex-1 flex-col items-center justify-center pb-[30rem] text-2xl  text-neutral-600">
          Welcome to the Markdown
          <div className="text-xl italic">html converter/preview tool.</div>
        </div>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchPosts()

  return {
    props: {
      posts,
    },
  }
}

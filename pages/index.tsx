import React, { useState } from "react"
import Head from "next/head"
import { marked } from "marked"

import HTMLOutput from "@/components/HTMLOutput/HTMLOutput"
import { Icons } from "@/components/icons"
import { Layout } from "@/components/layout"
import { Textarea } from "@/components/ui/textarea"

export default function IndexPage() {
  const [show, setShow] = useState(true)
  const [markdownInput, setMarkdownInput] = useState("")
  const [html, setHtml] = useState("")

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
      <section className="flex">
        <div className="flex-1">
          <div className="flex items-center justify-between bg-stone-800 p-3">
            <h3 className="font-mono text-xl font-normal">MARKDOWN</h3>
            <span className=" md:hidden">
              {show ? (
                <Icons.eyeOff onClick={() => setShow(!show)} />
              ) : (
                <Icons.eye onClick={() => setShow(!show)} />
              )}
            </span>
            {!show && (
              <span
                className=" hidden md:block"
                onClick={(e) => {
                  console.log({ markdown: marked.parse(markdownInput) })
                  setHtml(marked.parse(markdownInput))
                }}
              >
                {show ? (
                  <Icons.eye onClick={() => setShow(!show)} />
                ) : (
                  <Icons.eyeOff onClick={() => setShow(!show)} />
                )}
              </span>
            )}
          </div>
          <Textarea
            placeholder="Type in your Markdown here..."
            className="h-screen min-h-screen resize-none border-none font-mono text-lg text-gray-500 !outline-none focus:outline-none"
            onChange={(e) => setMarkdownInput(e.target.value)}
          />
        </div>

        <div className="divider h-auto w-[1px] bg-gray-500"></div>
        {show && (
          <div className="hidden flex-1 md:block">
            <div className="flex items-center justify-between bg-stone-800 p-3">
              <h3 className="font-mono text-xl font-normal">PREVIEW</h3>
              <span
                className=" hidden md:block"
                onClick={(e) => {
                  console.log({ markdown: marked.parse(markdownInput) })
                  setHtml(marked.parse(markdownInput))
                }}
              >
                {show ? (
                  <Icons.eye onClick={() => setShow(!show)} />
                ) : (
                  <Icons.eyeOff onClick={() => setShow(!show)} />
                )}
              </span>
            </div>
            <HTMLOutput html={html} />
          </div>
        )}
      </section>
    </Layout>
  )
}

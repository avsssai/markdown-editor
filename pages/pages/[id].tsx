import { GetStaticPaths, GetStaticProps } from "next"

import { APIPost, fetchPosts } from "@/lib/fetchData"

export default function SlugPage({ posts }) {
  return <h1>Sample</h1>
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const posts = await fetchPosts()
    return {
      props: { posts },
    }
  } catch (error: any) {
    console.log(error.message)
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const posts = await fetchPosts()
    const paths = posts.map((post: APIPost) => {
      return { params: { id: post.name } }
    })
    return {
      paths,
      fallback: false,
    }
  } catch (error: any) {
    console.log(error.message)
  }
}

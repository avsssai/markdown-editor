interface APIRes {
  data: APIPost[]
}

export interface APIPost {
  createdAt: string
  name: string
  content: string
}

export async function fetchPosts(): Promise<APIPost[]> {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL)
    const json = await res.json()
    return json
  } catch (error: any) {
    console.log(error.message)
  }
}

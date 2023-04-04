interface APIRes {
  data: APIPost[]
}

export interface APIPost {
  id: string
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

export async function fetchSinglePost(id: string) {
  try {
    const URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${id}`

    const res = await fetch(URL)
    const json = await res.json()
    return json
  } catch (error: any) {
    console.log(error.message)
  }
}

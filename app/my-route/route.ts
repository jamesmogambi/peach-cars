import { payload } from "@/lib/payload"

export const GET = async () => {
  const data = await payload.find({
    collection: 'users',
  })

  return Response.json(data)
}

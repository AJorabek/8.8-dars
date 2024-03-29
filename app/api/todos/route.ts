import { createTodo, getTodos } from "../data";

export async function GET() {
  return Response.json(getTodos());
}
export async function POST(request:Request) {
    const body=await request.json()


    createTodo(body.name)
  }
  
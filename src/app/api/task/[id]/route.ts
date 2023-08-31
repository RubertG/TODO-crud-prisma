import { prisma } from '@/libs/prisma'
import { NextResponse } from 'next/server'

interface Params {
  id: string
}

// obtener
export async function GET (request: Request, { params }: { params: Params }) {
  const task = await prisma.task.findUnique({
    where: {
      id: parseInt(params.id)
    }
  })
  return NextResponse.json(task)
}

// obtener
export async function PUT (request: Request, { params }: { params: Params }) {
  try {
    const data = await request.json()

    // actualizamos la tarea
    const taskEdit = await prisma.task.update({
      where: {
        id: Number(params.id)
      },
      data
    })

    return NextResponse.json(taskEdit)
  } catch (error: { message: string } | any) {
    return NextResponse.json({ error: error.message })
  }
}

// obtener
export async function DELETE (request: Request, { params }: { params: Params }) {
  try {
    const taskRemove = await prisma.task.delete({
      where: {
        id: Number(params.id)
      }
    })
    return NextResponse.json(taskRemove)
  } catch (error: { message: string } | any) {
    return NextResponse.json({ error: error.message })
  }
}

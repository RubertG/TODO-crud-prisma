import { type Task } from '@/types/types'
import TaskCard from './TaskCard'
import { prisma } from '@/libs/prisma'

const getTasks = async (): Promise<Task[]> => {
  return await prisma.task.findMany()
}

async function Tasks () {
  const tasks = await getTasks()

  return (
    <section className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-7'>
      {
        tasks.length > 0
          ? (
              tasks.map(task => (
                <TaskCard key={task.id} task={task} />
              ))
            )
          : (
            <div>
              No hay tareas por hacer.
            </div>
            )
      }
    </section>
  )
}

export default Tasks

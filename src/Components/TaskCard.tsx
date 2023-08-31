'use client'
import { type Task } from '@/types/types'
import { useRouter } from 'next/navigation'

interface Props {
  task: Task
}

function TaskCard ({ task }: Props) {
  const router = useRouter()

  return (
    <article
      className='bg-slate-800 py-5 px-4 rounded-md cursor-pointer hover:bg-slate-700 transition-colors'
      onClick={() => { router.push(`/edit/${task.id}`) }}
      >
        <h2 className='text-lg md:text-xl font-bold text-white'>{task.title}</h2>
        <p className='text-slate-300 text-md'>{task.description}</p>
        <time className='block text-slate-300 text-md text-end'>
          {new Date(task.created).toLocaleDateString()}
        </time>
    </article>
  )
}

export default TaskCard

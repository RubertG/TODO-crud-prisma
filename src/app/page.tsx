import Tasks from '@/Components/Tasks'
import Link from 'next/link'
import { Suspense } from 'react'

export const dynamic = 'force-dynamic'

export default function Home () {
  return (
    <main className='px-5 m-auto max-w-6xl'>
      <h1
        className="text-white text-2xl md:text-5xl font-bold text-center mt-10"
      >
        Mis tareas
      </h1>
      <Suspense fallback={<h2>Cargando...</h2>}>
        <Tasks />
      </Suspense>
      <footer className='m-auto mt-10'>
        <Link href="/new" className='bg-green-700 py-2 px-4 rounded-lg text-white text-md lg:text-lg hover:bg-green-800 transition-colors'>
          Crear tarea
        </Link>
      </footer>
    </main>
  )
}

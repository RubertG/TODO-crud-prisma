'use client'
import { useForm } from '@/hooks/useForm'
import Link from 'next/link'

interface Props {
  params: {
    id?: string
  }
}

function NewPage ({ params }: Props) {
  const { task, handleSubmit, handleChange, deleteTask } = useForm({ params })

  return (
    <main className="h-screen flex items-center justify-center flex-col">
      <Link href="/" className='absolute top-7 left-7 bg-green-700 py-2 px-4 rounded-lg text-white text-md lg:text-lg hover:bg-green-800 transition-colors'>
        Ver tareas
      </Link>
      <form
        onSubmit={(e) => { void handleSubmit(e) }}
        className="bg-slate-800 rounded-md px-8 pt-6 pb-8 mb-4 w-3/4 sm:w-2/4 lg:w-1/4">
        <label
          className="block text-white text-xl font-bold mb-2 text-center"
          htmlFor="title">
          Título
        </label>
        <input
          className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline bg-slate-100 mb-5"
          id="title"
          type="text"
          name='title'
          placeholder="Título"
          value={task.title}
          onChange={handleChange}
        />
        <label
          className="block text-white text-xl font-bold mb-2 text-center"
          htmlFor="description">
          Descripción
        </label>
        <textarea
          className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline bg-slate-100 mb-3"
          id="description"
          placeholder="Descripción de la tarea"
          name="description"
          value={task.description ?? ''}
          onChange={handleChange}
        />
        <footer className='flex gap-3 '>
          <button
            className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-1 px-3 rounded-md text-lg w-full transition-colors"
            type="submit">
            {params?.id != null ? 'Actualizar' : 'Crear'}
          </button>
          {
            params?.id != null &&
            <button
              className="bg-red-600 hover:bg-red-800 text-white font-bold py-1 px-3 rounded-md text-lg w-full transition-colors"
              onClick={() => { void deleteTask() }}
              type="button">
              Eliminar
            </button>
          }
        </footer>
      </form>
    </main>
  )
}

export default NewPage

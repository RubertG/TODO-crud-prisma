'use client'
import { type TaskForm } from '@/types/types'
import { useRouter } from 'next/navigation'
import { type ChangeEvent, type FormEvent, useEffect, useState } from 'react'

interface Props {
  params: {
    id?: string
  }
}

export function useForm ({ params }: Props) {
  const [task, setTask] = useState<TaskForm>({ title: '', description: '' })
  const router = useRouter()

  useEffect(() => {
    if (params?.id != null) {
      void getTask()
    }
  }, [])

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setTask({ ...task, [name]: value })
  }

  const addTask = async () => {
    const res = await fetch('api/task', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await res.json()
    console.log(data)
  }

  const editTask = async () => {
    const res = await fetch(`/api/task/${params.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await res.json()
    console.log(data)
  }

  const getTask = async () => {
    const res = await fetch(`/api/task/${params.id}`)
    const data = await res.json()
    if (data != null) {
      setTask({ title: data.title, description: data.description })
    } else {
      router.push('/')
    }
  }

  const deleteTask = async () => {
    const resUser = confirm('¿Estás seguro que deseas eliminar esta tarea?')
    if (resUser) {
      await fetch(`/api/task/${params.id}`, {
        method: 'DELETE'
      })
      router.refresh()
      router.push('/')
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (task.title === '') {
      alert('El título de la tarea es requerido')
      return
    }
    if (params?.id != null) {
      await editTask()
    } else {
      await addTask()
    }
    router.refresh()
    router.push('/')
  }

  return {
    task,
    deleteTask,
    handleSubmit,
    handleChange
  }
}

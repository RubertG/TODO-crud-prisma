export interface TaskForm {
  title: string
  description: string | null
}

export interface Task extends TaskForm {
  readonly id: number
  readonly created: Date
}

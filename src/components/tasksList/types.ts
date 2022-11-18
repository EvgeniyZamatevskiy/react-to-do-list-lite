import { TaskType } from "types"

export type TasksListPropsType = {
  tasks: TaskType[]
  handleDeleteTaskClick: (taskId: string) => void
  handleToggleIsDoneChange: (taskId: string, isDone: boolean) => void
  handleUpdateTitleClickOrBlurOrKeyDown: (taskId: string, title: string) => void
  handleUpdatePhotoChange: (taskId: string, file: string) => void
}

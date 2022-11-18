export type TaskItemPropsType = {
  id: string
  title: string
  description: string
  isDone: boolean
  handleDeleteTaskClick: (taskId: string) => void
  handleToggleIsDoneChange: (taskId: string, isDone: boolean) => void
  handleUpdateTitleClickOrBlurOrKeyDown: (taskId: string, title: string) => void
  handleUpdatePhotoChange: (taskId: string, file: string) => void
  file: string
}

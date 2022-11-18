import { SetStateType, TaskParamsType } from "types"

export type TasksFormPropsType = {
  handleAddTaskClickOrKeyDown: (title: string, description: string) => void
  taskParams: TaskParamsType
  setTaskParams: SetStateType<TaskParamsType>
  titleErrorMessage: string
  descriptionErrorMessage: string
  setDescriptionErrorMessage: SetStateType<string>
  setTitleErrorMessage: SetStateType<string>
}

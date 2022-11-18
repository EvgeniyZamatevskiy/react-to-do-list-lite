import { ReactNode } from "react"

export type FilePropsType = {
  id: string
  buttonClass?: string
  children: ReactNode
  handleUpdatePhotoChange: (taskId: string, file: string) => void
}

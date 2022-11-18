export type EditableItemPropsType = {
  currentTitle: string
  updateTitle: (updatedTitle: string) => void
  isDone?: boolean
}

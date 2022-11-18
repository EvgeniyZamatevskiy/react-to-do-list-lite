import React, { FC, useEffect, useState } from "react"
import { TaskParamsType, TaskType } from "types"
import { Button, Modal, TasksForm, TasksList, Loader } from "components"
import { Collection } from "enums"
import { addDoc, collection, doc, getDocs, deleteDoc, updateDoc } from "firebase/firestore"
import { db } from "./firebase"
import { EMPTY_STRING } from "constants/base"

export const App: FC = () => {

  const [tasks, setTasks] = useState<TaskType[]>([])
  const [isActiveModal, setIsActiveModal] = useState(false)
  const [taskParams, setTaskParams] = useState<TaskParamsType>({title: EMPTY_STRING, description: EMPTY_STRING})
  const [titleErrorMessage, setTitleErrorMessage] = useState(EMPTY_STRING)
  const [descriptionErrorMessage, setDescriptionErrorMessage] = useState(EMPTY_STRING)
  const [isLoading, setIsLoading] = useState(false)

  const handleAddTaskClickOrKeyDown = async (title: string, description: string) => {
    const {id} = await addDoc(collection(db, Collection.TASKS), {title, description, isDone: false})

    const task: TaskType = {
      id,
      title,
      description,
      isDone: false,
      file: EMPTY_STRING
    }

    setTasks([task, ...tasks])
    setIsActiveModal(false)
  }

  const handleDeleteTaskClick = async (taskId: string) => {
    await deleteDoc(doc(db, Collection.TASKS, taskId))
    setTasks(tasks.filter(({id}) => id !== taskId))
  }

  const handleToggleIsDoneChange = async (taskId: string, isDone: boolean) => {
    await updateDoc(doc(db, Collection.TASKS, taskId), {isDone})
    setTasks(tasks.map(task => task.id === taskId ? {...task, isDone} : task))
  }

  const handleUpdateTitleClickOrBlurOrKeyDown = async (taskId: string, title: string) => {
    await updateDoc(doc(db, Collection.TASKS, taskId), {title})
    setTasks(tasks.map(task => task.id === taskId ? {...task, title} : task))
  }

  const handleUpdatePhotoChange = async (taskId: string, file: string) => {
    await updateDoc(doc(db, Collection.TASKS, taskId), {file})
    setTasks(tasks.map(task => task.id === taskId ? {...task, file} : task))
  }

  const handleResetParamsTaskClick = (): void => {
    setTaskParams({...taskParams, description: EMPTY_STRING, title: EMPTY_STRING})
    setIsActiveModal(false)
    setTitleErrorMessage(EMPTY_STRING)
    setDescriptionErrorMessage(EMPTY_STRING)
  }

  const onActivateModalClick = (): void => {
    setIsActiveModal(true)
  }

  useEffect(() => {
    const getTasks = async () => {
      setIsLoading(true)

      const data = await getDocs(collection(db, Collection.TASKS))
      setTasks(data.docs.map((doc: any) => ({...doc.data(), id: doc.id})))

      setIsLoading(false)
    }

    getTasks()
  }, [])

  return (
    <div className="app">
      <div className="container">
        <Button onClick={onActivateModalClick} variant={"primary"}>Add task</Button>
        <Modal isActiveModal={isActiveModal} onDeactivateModalClick={handleResetParamsTaskClick}>
          <TasksForm
            handleAddTaskClickOrKeyDown={handleAddTaskClickOrKeyDown}
            taskParams={taskParams}
            setTaskParams={setTaskParams}
            titleErrorMessage={titleErrorMessage}
            descriptionErrorMessage={descriptionErrorMessage}
            setDescriptionErrorMessage={setDescriptionErrorMessage}
            setTitleErrorMessage={setTitleErrorMessage}
          />
        </Modal>
        {isLoading
          ? <div className="loader"><Loader/></div>
          : <TasksList
            tasks={tasks}
            handleDeleteTaskClick={handleDeleteTaskClick}
            handleToggleIsDoneChange={handleToggleIsDoneChange}
            handleUpdateTitleClickOrBlurOrKeyDown={handleUpdateTitleClickOrBlurOrKeyDown}
            handleUpdatePhotoChange={handleUpdatePhotoChange}
          />}
      </div>
    </div>
  )
}

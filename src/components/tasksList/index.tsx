import React, { FC } from "react"
import { TasksListPropsType } from "./types"
import { TaskItem } from "components"
import classes from "./index.module.scss"

export const TasksList: FC<TasksListPropsType> =
  ({
     tasks,
     handleDeleteTaskClick,
     handleToggleIsDoneChange,
     handleUpdateTitleClickOrBlurOrKeyDown,
     handleUpdatePhotoChange
   }) => {

    const tasksRender = tasks.map(({id, title, description, isDone, file}) => {
      return (
        <TaskItem
          key={id}
          id={id}
          title={title}
          description={description}
          isDone={isDone}
          file={file}
          handleDeleteTaskClick={handleDeleteTaskClick}
          handleToggleIsDoneChange={handleToggleIsDoneChange}
          handleUpdateTitleClickOrBlurOrKeyDown={handleUpdateTitleClickOrBlurOrKeyDown}
          handleUpdatePhotoChange={handleUpdatePhotoChange}
        />
      )
    })

    if (!tasks.length) {
      return <h1 className={classes.noTasks}>No tasks</h1>
    }

    return <div>{tasksRender}</div>
  }

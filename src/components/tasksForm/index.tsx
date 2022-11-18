import React, { ChangeEvent, FC } from "react"
import { TasksFormPropsType } from "./types"
import { Button, Input } from "components"
import { EMPTY_STRING } from "constants/base"
import classes from "./index.module.scss"

export const TasksForm: FC<TasksFormPropsType> =
  ({
     handleAddTaskClickOrKeyDown,
     taskParams,
     titleErrorMessage,
     descriptionErrorMessage,
     setTitleErrorMessage,
     setTaskParams,
     setDescriptionErrorMessage
   }) => {

    const onTitleChange = (event: ChangeEvent<HTMLInputElement>): void => {
      setTaskParams({...taskParams, title: event.currentTarget.value})

      if (titleErrorMessage) {
        setTitleErrorMessage(EMPTY_STRING)
      }
    }

    const onDescriptionChange = (event: ChangeEvent<HTMLInputElement>): void => {
      setTaskParams({...taskParams, description: event.currentTarget.value})

      if (descriptionErrorMessage) {
        setDescriptionErrorMessage(EMPTY_STRING)
      }
    }

    const onAddTaskClickOrKeyDown = (): void => {
      const titleTrimmed = taskParams.title.replace(/\s+/g, " ").trim()
      const descriptionTrimmed = taskParams.description.replace(/\s+/g, " ").trim()

      if (titleTrimmed && descriptionTrimmed) {
        handleAddTaskClickOrKeyDown(titleTrimmed, descriptionTrimmed)
        setTaskParams({...taskParams, description: EMPTY_STRING, title: EMPTY_STRING})
      } else {
        if (!titleTrimmed) {
          setTitleErrorMessage("Title is required!")
        }

        if (!descriptionTrimmed) {
          setDescriptionErrorMessage("Description is required!")
        }
      }
    }

    return (
      <div className={classes.tasksForm}>
        <Input
          value={taskParams.title}
          errorMessage={titleErrorMessage}
          onEnter={onAddTaskClickOrKeyDown}
          onChange={onTitleChange}
          placeholder={"Title"}
        />
        <Input
          value={taskParams.description}
          errorMessage={descriptionErrorMessage}
          onEnter={onAddTaskClickOrKeyDown}
          onChange={onDescriptionChange}
          placeholder={"Description"}
        />
        <Button className={classes.button} variant={"primary"} onClick={onAddTaskClickOrKeyDown}>Add task</Button>
      </div>
    )
  }

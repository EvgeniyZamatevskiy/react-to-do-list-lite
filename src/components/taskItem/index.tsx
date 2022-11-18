import React, { FC, ChangeEvent } from "react"
import { TaskItemPropsType } from "./types"
import { Button, Checkbox, EditableItem, File } from "components"
import close from "assets/icons/close.svg"
import upload from "assets/icons/upload.svg"
import classes from "./index.module.scss"

export const TaskItem: FC<TaskItemPropsType> =
  ({
     id,
     title,
     description,
     isDone,
     handleDeleteTaskClick,
     handleToggleIsDoneChange,
     handleUpdateTitleClickOrBlurOrKeyDown,
     handleUpdatePhotoChange,
     file
   }) => {

    const onDeleteTaskClick = (): void => {
      handleDeleteTaskClick(id)
    }

    const onToggleIsDoneChange = (event: ChangeEvent<HTMLInputElement>): void => {
      const {checked} = event.currentTarget
      handleToggleIsDoneChange(id, checked)
    }

    const onUpdateTitleClickOrBlurOrKeyDown = (updatedTitle: string): void => {
      if (updatedTitle) {
        handleUpdateTitleClickOrBlurOrKeyDown(id, updatedTitle)
      }
    }

    return (
      <div className={classes.taskItem}>
        <div className={classes.body}>
          <div className={classes.content}>
            <Checkbox onChange={onToggleIsDoneChange} checked={isDone} variant={"primary"}/>
            <EditableItem currentTitle={title} isDone={isDone} updateTitle={onUpdateTitleClickOrBlurOrKeyDown}/>
          </div>
          <div className={classes.description}>Description: {description}</div>
        </div>
        <div className={classes.bottom}>
          {file && <img className={classes.fileImage} src={file} alt="image"/>}
          <File id={id} handleUpdatePhotoChange={handleUpdatePhotoChange}>
            <img className={classes.uploadIcon} src={upload} alt="upload"/>
          </File>
          <Button onClick={onDeleteTaskClick}>
            <img className={classes.closeIcon} src={close} alt="close"/>
          </Button>
        </div>
      </div>
    )
  }

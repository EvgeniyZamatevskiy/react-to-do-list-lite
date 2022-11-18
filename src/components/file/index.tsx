import React, { ChangeEvent, FC, useRef } from "react"
import { FilePropsType } from "./types"
import { FIRST_ELEMENT_INDEX } from "constants/base"
import classes from "./index.module.scss"

export const File: FC<FilePropsType> = ({id, buttonClass, handleUpdatePhotoChange, children}) => {

  const fileRef = useRef<HTMLInputElement>(null)

  const onSelectFileClick = (): void => fileRef && fileRef.current?.click()

  const onUploadFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files && event.currentTarget.files.length) {
      const file = event.currentTarget.files[FIRST_ELEMENT_INDEX]

      convertFileToBase64(file, (file64: string) => {
        handleUpdatePhotoChange(id, file64)
      })
    }
  }

  const convertFileToBase64 = (file: File, callBack: (file64: string) => void): void => {
    const reader = new FileReader()

    reader.onloadend = () => {
      const file64 = reader.result as string
      callBack(file64)
    }

    reader.readAsDataURL(file)
  }

  return (
    <label>
      <input className={classes.file} ref={fileRef} type="file" onChange={onUploadFileChange}/>
      <button className={buttonClass} type="submit" onClick={onSelectFileClick}>
        {children}
      </button>
    </label>
  )
}

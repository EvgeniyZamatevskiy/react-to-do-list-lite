import React, { ChangeEvent, FC, forwardRef, KeyboardEvent } from "react"
import { Key } from "enums"
import { InputPropsType } from "./types"
import { EMPTY_STRING } from "constants/base"
import classes from "./index.module.scss"

export const Input: FC<InputPropsType> = forwardRef(
  ({
     errorMessage,
     className,
     onChange,
     onKeyDown,
     setValue,
     onEnter,
     onEscape,
     variant,
     ...restProps
   },
   ref) => {

    const inputClass = variant ? classes[variant] : classes.input
    const additionalInputClass = className ? className : EMPTY_STRING
    const errorInputClass = errorMessage ? classes.errorInput : EMPTY_STRING
    const inputClasses = `${inputClass} ${additionalInputClass} ${errorInputClass}`

    const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
      onChange && onChange(event)

      setValue && setValue(event.currentTarget.value)
    }

    const onInputKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
      onKeyDown && onKeyDown(event)

      onEnter && event.key === Key.ENTER && onEnter()
      onEscape && event.key === Key.ESCAPE && onEscape()
    }

    return (
      <label>
        <input
          type={"text"}
          onChange={onInputChange}
          onKeyDown={onInputKeyDown}
          ref={ref}
          className={inputClasses}
          {...restProps}
        />
        {errorMessage && <div className={classes.errorMessage}>{errorMessage}</div>}
      </label>
    )
  })

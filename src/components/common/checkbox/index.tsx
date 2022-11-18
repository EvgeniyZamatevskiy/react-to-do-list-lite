import React, { ChangeEvent, FC } from "react"
import { CheckboxPropsType } from "./types"
import { EMPTY_STRING } from "constants/base"
import classes from "./index.module.scss"

export const Checkbox: FC<CheckboxPropsType> =
  ({
     className,
     labelClassName,
     spanClassName,
     children,
     onChange,
     setChecked,
     variant,
     ...restProps
   }) => {

    const checkboxClass = variant ? classes[variant] : classes.checkbox
    const additionalCheckboxClass = className ? className : EMPTY_STRING
    const checkboxClasses = `${checkboxClass} ${additionalCheckboxClass}`

    const onCheckboxChange = (event: ChangeEvent<HTMLInputElement>): void => {
      onChange && onChange(event)

      setChecked && setChecked(event.currentTarget.checked)
    }

    return (
      <label>
        <input type="checkbox" className={checkboxClasses} onChange={onCheckboxChange}{...restProps}/>
        {children && <span>{children}</span>}
      </label>
    )
  }

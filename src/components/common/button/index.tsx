import React, { FC } from "react"
import { ButtonPropsType } from "./types"
import { EMPTY_STRING } from "constants/base"
import classes from "./index.module.scss"

export const Button: FC<ButtonPropsType> = ({className, variant, ...restProps}) => {

  const buttonClass = variant ? classes[variant] : classes.button
  const additionalButtonClass = className ? className : EMPTY_STRING
  const buttonClasses = `${buttonClass} ${additionalButtonClass}`

  return <button className={buttonClasses} {...restProps}/>
}

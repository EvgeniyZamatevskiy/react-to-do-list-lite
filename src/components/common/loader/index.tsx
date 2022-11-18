import React, { FC } from "react"
import classes from "./index.module.scss"

export const Loader: FC = () => {
  return (
    <div className={classes.loader}>
      <div className={classes.bounceOne}></div>
      <div className={classes.bounceTwo}></div>
      <div className={classes.bounceThree}></div>
    </div>
  )
}

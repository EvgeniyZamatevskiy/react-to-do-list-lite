import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export type ButtonPropsType = DefaultButtonPropsType & {
  variant?: string
}

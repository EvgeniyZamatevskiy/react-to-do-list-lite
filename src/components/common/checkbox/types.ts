import { DetailedHTMLProps, InputHTMLAttributes } from "react"

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export type CheckboxPropsType = Omit<DefaultInputPropsType, "type"> & {
  labelClassName?: string
  spanClassName?: string
  setChecked?: (checked: boolean) => void
  variant?: string
}

import { DetailedHTMLProps, InputHTMLAttributes, Ref } from "react"

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export type InputPropsType = Omit<DefaultInputPropsType, "type"> & {
  errorMessage?: string
  setValue?: (value: string) => void
  onEnter?: () => void
  onEscape?: () => void
  variant?: string
  ref?: Ref<HTMLInputElement>
}

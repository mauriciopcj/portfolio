import { FC } from 'react'
import { IconType } from 'react-icons'

import { ButtonProps, buttonVariants } from './styles'

const iconScales = { sm: 20, md: 24, lg: 28, xl: 28 }

export type Props = ButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    Icon?: IconType
  }

export const Button: FC<Props> = ({
  children,
  className,
  cancel,
  size,
  variant,
  Icon,
  ...props
}) => {
  return (
    <button
      className={buttonVariants({ variant, size, cancel, className })}
      {...props}
    >
      {Icon && <Icon scale={iconScales[size ?? 'md']} />}
      {children}
    </button>
  )
}

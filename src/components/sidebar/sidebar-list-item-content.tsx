import { FC, Fragment } from 'react'
import { IconType } from 'react-icons'
import { MdOutlineExpandLess, MdOutlineExpandMore } from 'react-icons/md'
import { Link } from 'react-router-dom'

import { cn } from '../../utils'

interface Props {
  close?: boolean
  hasChildren?: boolean
  icon: IconType
  label: string
  onClick?: () => void
  open?: boolean
  path: string
  size?: 'small' | 'medium'
}

export const ListItemContent: FC<Props> = ({
  close,
  hasChildren,
  icon: Icon,
  label,
  onClick,
  open,
  path,
  size = 'medium',
}) => {
  const itemClass = cn(
    'transition-2 flex h-[50px] w-full cursor-pointer list-none items-center',
    'rounded-md bg-transparent text-text no-underline',
    'hover:bg-primary hover:text-sidebar',
    'dark:text-text-dark dark:hover:bg-primary-dark dark:hover:text-sidebar-dark',
  )
  const content = (
    <Fragment>
      <span
        className={cn(
          'transition-2 flex h-full min-w-[60px] items-center justify-center rounded-md text-[20px]',
          {
            'min-w-11': size === 'small',
          },
        )}
      >
        <Icon />
      </span>
      <span
        className={cn(
          'transition-2 whitespace-nowrap text-[17px] font-semibold opacity-100',
          { 'opacity-0': close },
        )}
      >
        {label}
      </span>
    </Fragment>
  )

  if (hasChildren) {
    return (
      <p className={itemClass} onClick={onClick}>
        {content}

        <span className="transition-2 ml-auto flex h-full min-w-[60px] items-center justify-center rounded-md text-[20px]">
          {open ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}
        </span>
      </p>
    )
  }

  return (
    <Link to={path} className={itemClass}>
      {content}
    </Link>
  )
}

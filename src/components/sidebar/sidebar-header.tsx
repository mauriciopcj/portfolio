import { FC } from 'react'
import { MdArrowRight } from 'react-icons/md'

import { cn } from '../../utils'

interface SidebarHeaderProps {
  close?: boolean
  subtitle?: string
  title: string
  toggleClose?: () => void
}

export const SidebarHeader: FC<SidebarHeaderProps> = ({
  close,
  subtitle,
  title,
  toggleClose,
}) => {
  return (
    <header className="relative">
      <div className="flex items-center overflow-hidden">
        <span className="flex min-w-[60px] items-center justify-center">
          <img className="w-10 rounded-md" src="logo.png" alt="" />
        </span>

        <div
          className={cn(
            'transition-3 whitespace-nowrap text-[17px] font-semibold',
            { 'opacity-0': close },
          )}
        >
          <span className="mt-0.5 text-[18px] font-semibold">{title}</span>
          <span className="-mt-0.5 block text-[16px]">{subtitle}</span>
        </div>
      </div>

      <MdArrowRight
        onClick={toggleClose}
        className={cn(
          'transition-3 absolute right-[-25px] top-1/2 flex size-6 cursor-pointer items-center justify-center rounded-full text-[22px]',
          'bg-primary text-text',
          'dark:bg-primary-dark dark:text-text-dark',
          { 'rotate-180': !close },
        )}
      />
    </header>
  )
}

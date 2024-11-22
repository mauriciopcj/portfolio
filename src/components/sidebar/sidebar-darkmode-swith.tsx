import { FC } from 'react'
import { GoSun } from 'react-icons/go'
import { IoMoonOutline } from 'react-icons/io5'

import { cn } from '../../utils'

interface SidebarDarkModeSwitchProps {
  close?: boolean
}

export const SidebarDarkModeSwitch: FC<SidebarDarkModeSwitchProps> = ({
  close,
}) => {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark')
  }

  return (
    <li className="transition-2 relative mt-[10px] flex h-[50px] items-center rounded-[6px] bg-primary-light no-underline dark:bg-primary-light-dark">
      <div
        className={cn(
          'transition-2 flex h-[50px] w-[60px] items-center justify-center text-[20px]',
          { 'opacity-0': close },
        )}
      >
        <GoSun className="absolute dark:opacity-0" />
        <IoMoonOutline className="absolute opacity-0 dark:opacity-100" />
      </div>

      <span
        className={cn('transition-2 hidden dark:block', { 'opacity-0': close })}
      >
        Dark mode
      </span>

      <span className={cn('transition-2 dark:hidden', { 'opacity-0': close })}>
        Light mode
      </span>

      <div
        onClick={toggleDarkMode}
        className="absolute right-0 flex h-full min-w-[60px] cursor-pointer items-center justify-center rounded-md"
      >
        <span className="transition-2 before:transition-3 relative h-[22px] w-10 rounded-[25px] bg-toggle before:absolute before:left-[5px] before:top-1/2 before:size-[15px] before:-translate-y-1/2 before:rounded-full before:bg-sidebar before:content-[''] dark:bg-toggle-dark dark:before:left-[20px] dark:before:bg-sidebar-dark" />
      </div>
    </li>
  )
}

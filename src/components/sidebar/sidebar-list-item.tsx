import { FC, useState } from 'react'
import { IconType } from 'react-icons'

import { cn } from '../../utils'
import { ListItemContent } from './sidebar-list-item-content'

type ListItem = React.LiHTMLAttributes<HTMLLIElement>

export interface SidebarListItemProps extends ListItem {
  close?: boolean
  icon: IconType
  label: string
  nestedItems?: Array<SidebarListItemProps>
  path: string
  size?: 'small' | 'medium'
}

export const SidebarListItem: FC<SidebarListItemProps> = ({
  close,
  nestedItems,
  ...props
}) => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => setOpen((oldValue) => !oldValue)

  return (
    <li
      className={cn('mt-[10px] flex h-[50px] list-none items-center', {
        'h-auto flex-col items-start': !!nestedItems && open,
      })}
    >
      <ListItemContent
        {...props}
        close={close}
        hasChildren={!!nestedItems}
        onClick={toggleOpen}
        open={open}
      />

      <div
        className={cn('transition-3 hidden w-full rounded-md py-2', {
          flex: open && !!nestedItems,
        })}
      >
        <ul className="flex w-full flex-col rounded-md bg-black/5 px-2 pb-[10px]">
          {nestedItems?.map((item) => {
            return (
              <SidebarListItem
                {...item}
                close={close}
                key={item.path}
                size="small"
              />
            )
          })}
        </ul>
      </div>
    </li>
  )
}

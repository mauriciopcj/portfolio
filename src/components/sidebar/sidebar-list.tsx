import { FC } from 'react'

import { SidebarListItem, SidebarListItemProps } from './sidebar-list-item'

interface SidebarListProps {
  close?: boolean
  items?: Array<SidebarListItemProps>
}

export const SidebarList: FC<SidebarListProps> = ({ close, items }) => {
  return (
    <div className="mt-10">
      <ul className="">
        {items?.map((item) => (
          <SidebarListItem {...item} key={item.path} close={close} />
        ))}
      </ul>
    </div>
  )
}

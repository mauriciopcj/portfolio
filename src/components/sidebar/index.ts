import { SidebarContent } from './sidebar-content'
import { SidebarDarkModeSwitch } from './sidebar-darkmode-swith'
import { SidebarHeader } from './sidebar-header'
import { SidebarList } from './sidebar-list'
import { SidebarListItem } from './sidebar-list-item'
import { SidebarRoot } from './sidebar-root'

export type { SidebarListItemProps } from './sidebar-list-item'

export const Sidebar = {
  Content: SidebarContent,
  DarkModeSwitch: SidebarDarkModeSwitch,
  Header: SidebarHeader,
  List: SidebarList,
  ListItem: SidebarListItem,
  Root: SidebarRoot,
}

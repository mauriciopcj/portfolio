import { FC, Fragment, useState } from 'react'
import { GrProjects } from 'react-icons/gr'
import { IoIosLogOut } from 'react-icons/io'
import { IoExtensionPuzzleOutline, IoHomeOutline } from 'react-icons/io5'
import { MdCode } from 'react-icons/md'
import { TbLetterB } from 'react-icons/tb'
import { Outlet } from 'react-router-dom'

import { Sidebar, SidebarListItemProps } from '../components'
import { URLS } from '../routes/paths'
import { cn } from '../utils'

interface Props {
  children?: React.ReactNode
}

export const HomeLayout: FC<Props> = ({ children }) => {
  const [close, setClose] = useState(false)

  const toggleClose = () => setClose((old) => !old)

  const navbarItems: Array<SidebarListItemProps> = [
    {
      label: 'Home',
      path: URLS.home,
      icon: IoHomeOutline,
    },
    {
      label: 'Projects',
      path: URLS.projects,
      icon: GrProjects,
    },
    {
      label: 'Puzzles',
      path: URLS.puzzles,
      icon: IoExtensionPuzzleOutline,
      nestedItems: [
        {
          label: 'Fifteen',
          icon: IoExtensionPuzzleOutline,
          path: URLS.puzzleFifteen,
        },
      ],
    },
    {
      label: 'Examples',
      path: URLS.examples,
      icon: MdCode,
      nestedItems: [
        {
          label: 'Buttons',
          path: URLS.examplesButtons,
          icon: TbLetterB,
        },
      ],
    },
  ]

  return (
    <Fragment>
      <Sidebar.Root close={close}>
        <Sidebar.Header
          close={close}
          subtitle="Web developer"
          title="Mauricio"
          toggleClose={toggleClose}
        />
        <Sidebar.Content>
          <Sidebar.List close={close} items={navbarItems} />
          <div>
            <Sidebar.ListItem
              close={close}
              icon={IoIosLogOut}
              label="Logout"
              path={URLS.home}
            />
            <Sidebar.DarkModeSwitch close={close} />
          </div>
        </Sidebar.Content>
      </Sidebar.Root>

      <main
        className={cn(
          'transition-3 absolute left-[250px] top-0 h-screen w-[calc(100%-250px)] bg-body dark:bg-body-dark',
          { 'left-[78px] h-screen w-[calc(100%-78px)]': close },
        )}
      >
        {children || <Outlet />}
      </main>
    </Fragment>
  )
}

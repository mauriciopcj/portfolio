import { FC, Fragment, useState } from 'react'
import { IoExtensionPuzzleOutline, IoHomeOutline } from 'react-icons/io5'
import { Outlet } from 'react-router-dom'

import { SidebarListItemProps } from '../components'
import { URLS } from '../routes/paths'
import { cn } from '../utils'

interface Props {
  children?: React.ReactNode
}

export const HomeLayout: FC<Props> = ({ children }) => {
  const [close, setClose] = useState(true)

  const toggleClose = () => setClose((old) => !old)

  const navbarItems: Array<SidebarListItemProps> = [
    {
      label: 'Home',
      path: URLS.home,
      icon: IoHomeOutline,
    },
    // {
    //   label: 'Projects',
    //   path: URLS.projects,
    //   icon: GrProjects,
    // },
    {
      label: 'Darkwar Survival',
      path: URLS.darkWarSurvival,
      icon: IoExtensionPuzzleOutline,
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
        {
          label: 'Memory',
          icon: IoExtensionPuzzleOutline,
          path: URLS.gameMemory,
        },
      ],
    },
    // {
    //   label: 'Examples',
    //   path: URLS.examples,
    //   icon: MdCode,
    //   nestedItems: [
    //     {
    //       label: 'Buttons',
    //       path: URLS.examplesButtons,
    //       icon: TbLetterB,
    //     },
    //   ],
    // },
    // {
    //   label: 'Time Record',
    //   path: URLS.timeRecord,
    //   icon: MdAccessTime,
    // },
  ]

  return (
    <Fragment>
      {/* <Sidebar.Root close={close}>
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
      </Sidebar.Root> */}

      <main
        className={cn(
          'transition-3 absolute left-[250px] top-0 min-h-screen w-[calc(100%-250px)] bg-body dark:bg-body-dark',
          { 'left-0 h-screen w-full': close },
          // { 'left-[78px] h-screen w-[calc(100%-78px)]': close },
        )}
      >
        {children || <Outlet />}
      </main>
    </Fragment>
  )
}

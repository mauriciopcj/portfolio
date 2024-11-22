import { FC, ReactNode } from 'react'

import { Button, ButtonProps } from '../../components'

const HEADER_TITLES = ['', 'primary', 'outlined', 'text']

const buttonProps: Array<ButtonProps> = [
  { size: 'sm' },
  { size: 'md' },
  { size: 'lg' },
  { size: 'xl' },
  { size: 'xl', cancel: true },
]

export const ExampleButtons: FC = () => {
  const renderTableHeader = (title: string) => (
    <div className="flex w-full items-center justify-center p-2" key={title}>
      {title}
    </div>
  )

  const renderCell = (children: ReactNode) => (
    <div className="flex h-16 w-full items-center justify-center p-2">
      {children}
    </div>
  )

  return (
    <div className="container h-screen w-full p-6">
      <div className="w-full bg-white">
        <div className="flex bg-black/20">
          {HEADER_TITLES.map(renderTableHeader)}
        </div>
        {buttonProps.map(({ size, cancel }) => {
          return (
            <div className="flex border-b border-black/20" key={size}>
              {renderCell(size)}
              {renderCell(
                <Button variant="primary" size={size} cancel={cancel}>
                  button
                </Button>,
              )}
              {renderCell(
                <Button variant="outlined" size={size} cancel={cancel}>
                  button
                </Button>,
              )}
              {renderCell(
                <Button variant="text" size={size} cancel={cancel}>
                  button
                </Button>,
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

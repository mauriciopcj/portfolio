import { cva, VariantProps } from 'class-variance-authority'

export type ButtonProps = VariantProps<typeof buttonVariants>

export const buttonVariants = cva('w-fit rounded-lg border-b-4 font-bold', {
  variants: {
    variant: {
      primary: [
        'flex items-center gap-2 border-teal-800 bg-teal-400 text-zinc-700',
        'hover:border-transparent hover:bg-teal-500 hover:text-zinc-800',
      ],
      outlined: [
        'border-gray-600 bg-white text-gray-600',
        'hover:border-gray-100 hover:bg-gray-100 hover:text-gray-800',
      ],
      text: [
        'border-transparent bg-transparent text-gray-600',
        'hover:text-gray-800',
      ],
    },
    size: {
      sm: 'px-2 py-1 text-sm',
      md: 'px-3 py-1 text-base',
      lg: 'px-4 py-2 text-lg',
      xl: 'px-5 py-2 text-xl',
    },
    cancel: {
      true: '',
    },
  },
  compoundVariants: [
    {
      variant: 'primary',
      cancel: true,
      class:
        'border-red-600 bg-red-500 text-white hover:bg-red-600 hover:text-white',
    },
    {
      variant: 'outlined',
      cancel: true,
      class:
        'border-red-600 text-red-600 hover:border-transparent hover:bg-red-50 hover:text-red-700',
    },
    {
      variant: 'text',
      cancel: true,
      class: 'text-red-600 hover:text-red-700',
    },
  ],
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

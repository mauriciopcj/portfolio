import { ClassValue, clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

const customTwMerge = extendTailwindMerge({
  extend: {},
})

/**
 * Return a unique string contain merged classnames
 * @param indexes arrary of strings contain classnames
 * @returns merged string with unique classes
 */
export const cn = (...indexes: ClassValue[]) => customTwMerge(clsx(indexes))

import { ClassValue, clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

import { THEME_CUSTOM_COLORS } from './contants'

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'text-color': [{ text: THEME_CUSTOM_COLORS }],
    },
  },
})

/**
 * Return a unique string contain merged classnames
 * @param indexes arrary of strings contain classnames
 * @returns merged string with unique classes
 */
export const cn = (...indexes: ClassValue[]) => customTwMerge(clsx(indexes))

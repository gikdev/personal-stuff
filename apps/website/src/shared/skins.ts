import { cva } from "./cva.config"

export const section = cva({
  base: "py-12 px-6 sm:px-12 gap-6 flex flex-col",
  variants: {
    centerish: {
      false: null,
      true: "items-center text-center",
    },
  },
  defaultVariants: {
    centerish: false,
  },
})

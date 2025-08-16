import { cva } from "./cva.config"

export const page = cva({ base: "flex flex-col h-dvh" })

export const btnIcon = cva({
  base: `
    flex items-center justify-center
    cursor-pointer disabled:cursor-not-allowed
    disabled:opacity-50 
    active:scale-95
  `,
  variants: {
    size: {
      md: "size-12 p-2 rounded-md-elements", // icon size = 32
      lg: "size-16 p-4 rounded-md-elements", // icon size = 32
      xl: "size-24 p-6 rounded-lg-elements", // icon size = 48
    },
    theme: {
      glass: `
        text-tusi-400 hover:text-tusi-100 disabled:hover:text-tusi-400
        bg-transparent hover:bg-tusi-800 disabled:hover:bg-transparent 
      `,
      brand: `
        bg-brand-600 hover:bg-brand-700 disabled:bg-tusi-700 disabled:hover:bg-tusi-700
        text-tusi-100 disabled:text-tusi-400
      `,
    },
  },
  defaultVariants: {
    size: "md",
    theme: "glass",
  },
})

export const select = cva({
  base: `
    py-2 px-4 font-[inherit] rounded-md-elements
    bg-tusi-800 outline-2 outline-transparent
    focus:outline-brand-500 outline-offset-2 text-tusi-100
  `,
})

export const input = cva({
  base: `
    py-2 px-4 font-[inherit] rounded-md-elements
    bg-tusi-800 outline-none border-b-2
    border-transparent focus:border-brand-500
    text-tusi-100 
  `,
})

export const labeler = cva({
  base: "flex flex-col gap-2 w-full",
})

export const errorMsg = () => "text-danger-400 text-body-sm"

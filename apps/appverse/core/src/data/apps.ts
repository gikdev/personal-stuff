import {
  HandsPrayingIcon,
  type Icon,
  ListChecksIcon,
  NumberCircleOneIcon,
  SquareIcon,
  TimerIcon,
  TipJarIcon,
} from "@phosphor-icons/react"

export interface App {
  id: string
  title: string
  Icon: Icon
  disabled?: boolean
}

export const apps: App[] = [
  {
    id: "work-timer",
    title: "تایمر کار",
    Icon: TimerIcon,
  },
  {
    id: "one-thing",
    title: "یه چیز",
    Icon: NumberCircleOneIcon,
  },
  {
    id: "todos",
    title: "کارها",
    Icon: ListChecksIcon,
  },
  {
    id: "budget",
    title: "بودجه",
    Icon: TipJarIcon,
  },
  {
    id: "rakat",
    title: "رکعت",
    Icon: HandsPrayingIcon,
  },
  {
    id: "not-found",
    title: "نام برنامه",
    Icon: SquareIcon,
    disabled: true,
  },
] as const

import type { Metadata } from "next"
import type { PropsWithChildren } from "react"
import "./styles.css"
import { lahzeh } from "#/assets/fonts/Lahzen"
import { cx } from "#/shared/cva.config"

export const metadata: Metadata = {
  title: "محمدمهدی بهرامی",
  description: "سایت شخصی محمدمهدی بهرامی",
}

export default function RootLayout({ children }: PropsWithChildren) {
  const htmlClassName = cx(
    "bg-tusi-950 text-tusi-400 flex",
    "flex-col items-center antialiased min-h-dvh",
    "selection:bg-brand-600 selection:text-tusi-100",
    lahzeh.className,
  )

  return (
    <html lang="fa" dir="rtl" className={htmlClassName}>
      <body className="max-w-201 w-full flex flex-col min-h-dvh">
        {children}
      </body>
    </html>
  )
}

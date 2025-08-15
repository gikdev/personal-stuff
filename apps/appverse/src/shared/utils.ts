export function toPersianDigits(str: string): string {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]
  return str.replace(/\d/g, d => persianDigits[+d])
}

export class TimeFormatter {
  private totalSeconds = 0

  constructor(totalSeconds: number = 0) {
    this.totalSeconds = totalSeconds
  }

  private formatTime(): string {
    const hours = Math.floor(this.totalSeconds / 3600)
    const minutes = Math.floor((this.totalSeconds % 3600) / 60)
    const seconds = this.totalSeconds % 60

    return (
      `${String(hours).padStart(2, "0")}:` +
      `${String(minutes).padStart(2, "0")}:` +
      `${String(seconds).padStart(2, "0")}`
    )
  }

  toEnglishTime(): string {
    return this.formatTime()
  }

  toPersianTime(): string {
    return toPersianDigits(this.formatTime())
  }
}

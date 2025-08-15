export class TimeFormatter {
  private totalMinutes = 0

  constructor(totalMinutes: number = 0) {
    this.totalMinutes = totalMinutes
  }

  private toPersianDigits(str: string): string {
    const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]
    return str.replace(/\d/g, d => persianDigits[+d])
  }

  private formatTime(): string {
    const hours = Math.floor(this.totalMinutes / 60)
    const minutes = this.totalMinutes % 60
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`
  }

  toEnglishTime(): string {
    return this.formatTime()
  }

  toPersianTime(): string {
    return this.toPersianDigits(this.formatTime())
  }
}

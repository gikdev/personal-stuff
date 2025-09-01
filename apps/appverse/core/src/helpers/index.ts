export function parseError(data: unknown, msg?: string) {
  if (typeof data === "string") {
    try {
      const parsed = JSON.parse(data)

      if (typeof parsed === "object" && parsed !== null) {
        if ("msg" in parsed && typeof parsed.msg === "string") return parsed.msg
        if ("message" in parsed && typeof parsed.message === "string")
          return parsed.message
        if ("name" in parsed && typeof parsed.name === "string")
          return parsed.name
        if ("title" in parsed && typeof parsed.title === "string")
          return parsed.title
      }
    } catch {
      return data
    }
  }

  if (typeof data === "object" && data !== null) {
    if ("msg" in data && typeof data.msg === "string") return data.msg
    if ("message" in data && typeof data.message === "string")
      return data.message
    if ("name" in data && typeof data.name === "string") return data.name
    if ("title" in data && typeof data.title === "string") return data.title
  }

  return msg || "خطایی رخ داد!"
}

import { useMutation } from "@tanstack/react-query"
import { parseError } from "./errors"

export async function copyTextToClipboard(text: string): Promise<void> {
  await navigator.clipboard.writeText(text)
}

const mutationKey = ["copy-to-clipboard"]
const mutationFn = async (text: string) => {
  if (typeof text !== "string" || !text.length) {
    throw new Error("Nothing to copy.")
  }

  await copyTextToClipboard(text)
}

export const useCopyToClipboardMutation = () =>
  useMutation({
    mutationKey,
    mutationFn,
    onError: err => alert(`یه مشکلی پیش اومد: ${parseError(err)}`),
    onSuccess: () => {},
  })

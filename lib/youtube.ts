/** Extract YouTube video id from common URL shapes (watch, youtu.be, embed). */
export function youtubeVideoIdFromUrl(url: string): string | null {
  try {
    const u = new URL(url.trim())
    const host = u.hostname.replace(/^www\./, "")

    if (host === "youtu.be") {
      const id = u.pathname.replace(/^\//, "").split("/")[0]
      return id || null
    }

    if (host === "youtube.com" || host === "m.youtube.com") {
      const v = u.searchParams.get("v")
      if (v) return v
      const embed = u.pathname.match(/\/embed\/([^/]+)/)
      if (embed?.[1]) return embed[1]
    }

    return null
  } catch {
    return null
  }
}

export function youtubeThumbnailUrl(videoId: string): string {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
}

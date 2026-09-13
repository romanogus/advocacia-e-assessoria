/**
 * Standard reading time calculation for legal articles.
 * Assumes average reading speed of 180-200 words per minute for dense legal prose.
 */
export function getReadingTimeMinutes(text: string): number {
  if (!text) return 3;
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  // Minimum 3 minutes for meaningful legal articles
  return Math.max(3, Math.ceil(wordCount / 180));
}

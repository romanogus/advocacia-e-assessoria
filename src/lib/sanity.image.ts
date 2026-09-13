import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder({
  projectId: 'ljwrfio9',
  dataset: 'production',
});

/**
 * Returns a configured Sanity ImageUrlBuilder for any Sanity image reference or object.
 * Automatically enables auto-format (webp) and quality 85.
 */
export function urlForImage(source: any) {
  if (!source) return null;
  return builder.image(source).auto('format').quality(85);
}

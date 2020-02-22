import { createImageLabel } from './createImageLabel'

export function getImagesFromEdges(acc, { node }) {
  const { art } = node?.frontmatter

  if (Array.isArray(art) && art.length > 0) {
    const images = art.map(({ image, name, material, dimensions, year }) => ({
      ...image,
      label: createImageLabel({ name, material, dimensions, year }),
    }))
    return [...acc, ...images]
  }
  return acc
}

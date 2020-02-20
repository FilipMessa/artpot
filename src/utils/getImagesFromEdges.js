export function getImagesFromEdges(acc, { node }) {
  const { art } = node?.frontmatter

  if (Array.isArray(art) && art.length > 0) {
    const images = art.map(({ image }) => image)
    return [...acc, ...images]
  }
  return acc
}

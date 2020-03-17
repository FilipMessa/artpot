import React from 'react'
import { ImageLabel } from '../components/ImageLabel'

export function getImagesFromEdges(acc, { node }) {
  const { art } = node?.frontmatter

  if (Array.isArray(art) && art.length > 0) {
    const images = art.map(({ image, name, material, dimensions, year, type }) => ({
      ...image,
      label: (
        <ImageLabel
          type={type}
          image={image}
          name={name}
          material={material}
          dimensions={dimensions}
          year={year}
        />
      ),
    }))
    return [...acc, ...images]
  }
  return acc
}

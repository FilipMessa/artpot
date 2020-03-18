import PropTypes from 'prop-types'

export const art = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string.isRequired,
    material: PropTypes.string,
    dimensions: PropTypes.string,
    year: PropTypes.string.isRequired,
    image: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      childImageSharp: PropTypes.shape({
        desktop: PropTypes.shape({
          base64: PropTypes.string.isRequired,
          width: PropTypes.number.isRequired,
          height: PropTypes.number.isRequired,
          src: PropTypes.string.isRequired,
          srcSet: PropTypes.string.isRequired,
        }),
      }),
      mobile: PropTypes.shape({
        base64: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        src: PropTypes.string.isRequired,
        srcSet: PropTypes.string.isRequired,
      }),
      default: PropTypes.shape({
        src: PropTypes.string.isRequired,
      }),
    }),
  })
)

export const markdownImages = PropTypes.shape({
  images: PropTypes.shape({
    edges: PropTypes.arrayOf(
      PropTypes.shape({
        node: PropTypes.shape({
          fileAbsolutePath: PropTypes.string,
          frontmatter: PropTypes.shape({
            art,
          }),
        }),
      })
    ),
  }),
})

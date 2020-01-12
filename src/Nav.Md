 
 # Navigation
 - The Navigation should contains these static items:
 1. home - always (can be edit by CMS)
 2. info - always page (can be edit by CMS)
 3. works -  always - page should display all images in galeries randomly.

 - Sub navigation will be created by data


## Sub-Navigation
- 1. step get data for Navigation from GraphQL

query: 
{
  allMarkdownRemark(
    filter: { fileAbsolutePath: { regex: "/(works)/" } }
  ) {
    nodes {
      frontmatter {
        slug
        title
      }
    }
  }
}


2. show subNvigation only if user is on work page
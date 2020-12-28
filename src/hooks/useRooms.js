import { graphql, useStaticQuery } from "gatsby"

const useRooms = () => {
  const {
    allDatoCmsRoom: { nodes },
  } = useStaticQuery(graphql`
    query {
      allDatoCmsRoom {
        nodes {
          title
          id
          slug
          content
          image {
            fluid(maxWidth: 1200) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)
  return nodes
}

export default useRooms

import { useStaticQuery, graphql } from 'gatsby';

const useHomePage = () => {

    const sectionData = useStaticQuery(graphql`
    {
        wpgraphql {
            pages(where: {name: "home"}) {
                edges {
                    node {
                        content
                        title
                        slug
                        id
                        isFrontPage
                        homeACF {
                            simpleContactInfo
                            searchButtonText
                            mapInformation
                            mainSection
                            mainImage {
                                sourceUrl
                            }
                            galleryHeading
                            libraryAddress
                            gallery {
                                altText
                                title
                                caption
                                sourceUrl(size: _2048X2048)
                                id
                            }
                        }
                    }
                }
            }
        }
    }
    `);

    return sectionData.wpgraphql.pages.edges[0].node;
}

export default useHomePage;
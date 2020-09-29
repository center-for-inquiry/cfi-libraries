import { useStaticQuery, graphql } from 'gatsby';

const useHomePage = () => {

    const sectionData = useStaticQuery(graphql`
    {
        wpgraphql {
            menus {
                nodes {
                    menuItems {
                        nodes {
                            label
                            url
                            id
                        }
                    }
                }
            }
        }
    }
    `);

    return sectionData.wpgraphql.menus.nodes[0].menuItems.nodes;
}

export default useHomePage;
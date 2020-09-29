import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Page = (props) => {
    const {
        data: {
            wpgraphql: { page }
        }
    } = props

    const { content, title } = page;

    if (title !== "Search"){
        return(
            <Layout>
                <SEO title={title} />
                <div className="container" id="page-container">
                    <div className="title-container">
                        <h1 className="page-title">{title}</h1>
                        <hr></hr>
                    </div>
                    
                    <div dangerouslySetInnerHTML={{__html: content}}></div>
                </div>      
            </Layout>
        )
    } else {
        return (
            <Layout>
                <SEO title={title} />
                    <div dangerouslySetInnerHTML={{__html: content}} id="search-container"></div>    
            </Layout>
        )
    }
}

export default Page;

export const pageQuery = graphql`
    query GET_PAGE($id: ID!) {
        wpgraphql {
            page(id: $id) {
                content
                title
            }
        }
    }
`
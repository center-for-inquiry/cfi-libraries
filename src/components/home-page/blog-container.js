import React, { useState, useEffect } from 'react';
import SingleBlog from './single-blog';
import HomeFullWButton from './home-buttonFW';

const BlogContainer = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://centerforinquiry.org/wp-json/wp/v2/posts?_embed&categories=135&per_page=3')
        .then(resp => resp.json())
        .then(data => setBlogs(data))
    });

    function makeDate(date){
        let ourDate = new Date(date).toString().slice(4,15).split('');
        let anotherDate = ourDate.splice(6,0,',');
        return ourDate.join('');
    }
    
    return(
        
        <>
        {blogs.map(blog => 
            <SingleBlog
            key={blog.id} 
            image={blog["_embedded"]["wp:featuredmedia"][0]["media_details"]["sizes"]["large"]["source_url"]} 
            headerLink={blog.link}
            date={makeDate(blog.date)} 
            desc={blog.excerpt.rendered} 
            title={blog.title.rendered} />
        )}
        
        <HomeFullWButton linkTo="https://centerforinquiry.org/blog/category/access-points/" text="See All Posts" />
        </>
    
    );
}

export default BlogContainer;
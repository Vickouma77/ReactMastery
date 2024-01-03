import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlog] = useState([
        { title: "My website", body: "lorem ipsum...", author: "Mario", id: 1 },
        { title: "Welcome party !", body: "lorem ipsum...", author: "Yoshi", id: 2 },
        { title: "Web dev top tips", body: "lorem ipsum...", author: "Mario", id: 3 }
    ]);

    return ( 
        <div className="home">
            <BlogList blogs={ blogs } title="All Blogs" />
            <BlogList blogs={ blogs.filter((blog) => blog.author === "Mario") } title="Mario's Blog" />
        </div>
     );
}
 
export default Home;
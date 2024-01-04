import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlog] = useState([
        { title: "My website", body: "lorem ipsum...", author: "Mario", id: 1 },
        { title: "Welcome party !", body: "lorem ipsum...", author: "Yoshi", id: 2 },
        { title: "Web dev top tips", body: "lorem ipsum...", author: "Mario", id: 3 }
    ]);

    const [name, setName] = useState('mario')

    const handleDelete = (id) => {
        const newBlog = blogs.filter(blog => blog.id !== id);
        setBlog(newBlog);
    }

    useEffect(() => {
        console.log("use effect run");
        console.log(name)
    }, [name]);

    return ( 
        <div className="home">
            <BlogList blogs={ blogs } title="All Blogs" handleDelete={handleDelete} />
        </div>
     );
}
 
export default Home;
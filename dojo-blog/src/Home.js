import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlog] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Vickouma77/demo/blogs')
        .then(res => {
            if(!res.ok){
                throw Error('could not fetch data for that resource');
            }
            return res.json();
        })
        .then(data => {
            setBlog(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            setIsPending(false);
            setError(err.message)
        })
    }, []);

    return ( 
        <div className="home">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs={ blogs } title="All Blogs" />}
        </div>
     );
}
 
export default Home;
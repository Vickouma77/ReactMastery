import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');
    const [ author, setAuthor ] = useState('mario');
    const [ isPendiing, setIsPending ] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true)

        fetch('https://my-json-server.typicode.com/Vickouma77/demo/blogs', {
            method: "POST",
            header: {"Content-Type": "applicaation/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("New blog is added ")
            setIsPending(false);

            history.push('/');
        })

    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={ handleSubmit }>
                <label>Blog title:</label>
                <input 
                  type="text"
                  required
                  value={ title }
                  onChange={(e) => setTitle(e.target.value)}
                  />
                <label>Blog body:</label>
                <textarea 
                  required
                  value={ body }
                  onChange={(e) => setBody(e.target.body)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={ author }
                    onChange={(e) => setAuthor(e.target.author)}
                >
                    <option value="mario">mario</option>
                    <option value="luigi">luigi</option>
                </select>
                { !isPendiing && <button>Add blog</button> }
                { isPendiing && <button>Adding blog...</button> }
                <p>{ title }</p>
                <p>{ body }</p>
                <p>{ author }</p>
            </form>
        </div>
    );
}
 
export default Create;
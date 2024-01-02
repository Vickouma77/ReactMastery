import { useState } from 'react';

const Home = () => {

    const [name, setName] = useState('mario');

    const handleClick = () => {
        setName('Luiigi');
    }

    return ( 
        <div className="home">
            <h1>Homepage</h1>
            <p>{ name }</p>
            <button onClick={ handleClick }>Click Me</button>
        </div>
     );
}
 
export default Home;
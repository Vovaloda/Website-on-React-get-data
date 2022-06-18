import React from 'react'

import './articles.scss'

const Articles = () => {
    const [posts, setPosts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {

        const fetchData = async() => {
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();

                setPosts(data);
            }
            catch(error){
                console.log(error);
            }
            finally{
                setLoading(false);
            }
        }
        fetchData();
    }, 
    []);

    return (
        <div className='mainBody'>
            <h1>Articles</h1>

            {loading && "Загрузка"}
            
            <div className="wrapper">
                {posts.length >0 && posts.map(post => (
                    <div className="card" key={post.id}>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                        <a href="/" >Read</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Articles
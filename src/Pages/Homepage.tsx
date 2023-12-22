import React from 'react'
import useFetch from '../hooks/useFetch'



export default function Homepage() {
    const {loading, error, data} = useFetch('http://localhost:1337/api/products?populate=*')

    if (loading) return <p>loading...</p>
    if (error) return <p>error D:</p>
    if (data) return (
        <main>
            {data.map(product => (
                <div key={product.id}>
                    <p>{product.attributes.name}</p>
                    <img src={"http://localhost:1337" + product.attributes.productImage.data[0].attributes.url}/>
                    <p>{product.attributes.body}</p>
                </div>
            ))}
        </main>
    )
    return(null);
}
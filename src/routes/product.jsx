import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';


export async function loader({params}) {
    const response = await fetch(`http://localhost:3000/products/${params.productId}`)
    const product = await response.json()
    return { product };
  }

function Product(props) {
    const {product} = useLoaderData()

  return (
    <main>
        <section className='product-section'>
        <img className='product-image' src={product.mainImage} alt="" />
        <div>
            <span>{product.brand}</span>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <span> &#8377;{product.price}</span>
            <Link to={`/edit-product/${product._id}`} className='edit-link'>Edit Product</Link>

        </div>
        </section>

    </main>
  )
}

export default Product

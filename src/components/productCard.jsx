import React from 'react'
import { Link } from 'react-router-dom'



function ProductCard(props)  {
    console.log(props.product)
    const product = props.product
  return (
    <div>
      <article className='product-card' >
      <Link to={`/products/${product._id}`}>
          <img src={product.mainImage} alt={product.title} />
        </Link>
           
            <h3>{product.title}</h3>
            <span>  &#8377; {product.price} </span>
        </article>
    </div>
  )
}

export default ProductCard
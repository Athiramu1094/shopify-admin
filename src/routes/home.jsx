import React from 'react'
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../components/productCard';

export async function loader() {
    const response = await fetch('http://localhost:3000/products');
    const products = await response.json()
    return { products };
  }
function Home()  {
    const {products} = useLoaderData()
  return (
    <main>
       <section>
       
       <div className='product-list'>
        {
        products.map(product => {
            return(
                <ProductCard key={product._id} product = {product} />
            )
        })
    }
       </div>
       </section>
    </main>
  )
}

export default Home


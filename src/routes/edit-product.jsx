import React, { useRef } from 'react'
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';



export async function loader({params}) {
  const response = await fetch(`http://localhost:3000/categories`);
  const categories = await response.json()
 
  const productResponse = await fetch(`http://localhost:3000/products/${params.productId}`)
  const product = await productResponse.json()
  //this step is to show product details when form is shown.
  
  return { categories,product };
}

function EditProduct()  {
  const {categories,product} = useLoaderData()

  const titleRef = useRef(null)
  const brandRef = useRef(null)
  const priceRef = useRef(null)
  const mainImageRef = useRef(null)
  const image1Ref = useRef(null)
  const image2Ref = useRef(null)
  const image3Ref = useRef(null)
  const descriptionRef = useRef(null)
  const categoryRef = useRef()

  function handleSubmit(event){
      event.preventDefault() //to prevent page refresh
      console.log(titleRef) //gets an object, current:input #title(so value is inside current)
      const title = titleRef.current.value //to take value from input box
      console.log(title) //gets the value

      const brand = brandRef.current.value
      const price = priceRef.current.value
      const mainImage = mainImageRef.current.value
      const image1 = image1Ref.current.value
      const image2 = image2Ref.current.value
      const image3 = image3Ref.current.value
      const description = descriptionRef.current.value
      const category = categoryRef.current.value

      const data ={
        title:title,
        brand:brand,
        price:price,
        mainImage:mainImage,
        images:[
          image1,
          image2,
          image3,
        ],
        description:description,
        category:category
      }

        axios.put(`http://localhost:3000/products/${product._id}`,data)
        .then(response=>console.log(response))
        .catch(error=>console.log(error))
      }






  return (
    <main>
       <section className='addProduct-section'>
       <h1>Edit product</h1>
       <form onSubmit={handleSubmit}>
        <label htmlFor="titile">Title</label>
        <input defaultValue={product.title} ref={titleRef} type="text" id='title' /> 
        <label htmlFor="brand">Brand</label>
        <input defaultValue={product.brand} ref={brandRef} type="text" id='brand' />
        <label htmlFor="price">Price</label>
        <input defaultValue={product.price} ref={priceRef} type="number" id='price' />
        <label htmlFor="mainImage">mainImage</label>
        <input defaultValue={product.mainImage} ref={mainImageRef} type="text" id='mainImage' />
        <label htmlFor="image">Image</label>
        <input defaultValue={product.images[0]} ref={image1Ref} type="text" id='image1' />
        <label htmlFor="image">Image</label>
        <input defaultValue={product.images[1]} ref={image2Ref} type="text" id='image2' />
        <label htmlFor="image">Image</label>
        <input defaultValue={product.images[2]} ref={image3Ref} type="text" id='image3' />
        <label htmlFor="description">Description</label>
        <textarea defaultValue={product.description} ref={descriptionRef} name="description" id="description"></textarea>
        <label htmlFor="category">Choose a category:</label> 
        
        <select  ref={categoryRef} name="category" id="category"> 
        {
          categories.map(category=>{
            return(
              <option key={category._id} value={category._id}>{category.categoryName}</option>
            )
          })
        }
      </select>
        <button type='submit'>Edit product</button>
       </form>
       </section>
    </main>
  )
}

export default EditProduct


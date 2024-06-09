import React, { useRef } from 'react'
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';



export async function loader() {
  const response = await fetch(`http://localhost:3000/categories`);
  const categories = await response.json()
  return { categories };
}  //loader here is for taking category from backend for backend input field

function AddProduct()  {
  const {categories} = useLoaderData()

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

        axios.post('http://localhost:3000/products',data)
        .then(response=>console.log(response))
        .catch(error=>console.log(error))
      }






  return (
    <main>
       <section className='addProduct-section'>
       <h1>Add new product</h1>
       <form onSubmit={handleSubmit}>
        <label htmlFor="titile">Title</label>
        <input ref={titleRef} type="text" id='title' />
        <label htmlFor="brand">Brand</label>
        <input ref={brandRef} type="text" id='brand' />
        <label htmlFor="price">Price</label>
        <input ref={priceRef} type="number" id='price' />
        <label htmlFor="mainImage">mainImage</label>
        <input ref={mainImageRef} type="text" id='mainImage' />
        <label htmlFor="image">Image</label>
        <input ref={image1Ref} type="text" id='image1' />
        <label htmlFor="image">Image</label>
        <input ref={image2Ref} type="text" id='image2' />
        <label htmlFor="image">Image</label>
        <input ref={image3Ref} type="text" id='image3' />
        <label htmlFor="description">Description</label>
        <textarea ref={descriptionRef} name="description" id="description"></textarea>
        <label htmlFor="category">Choose a category:</label> 
        
        <select ref={categoryRef} name="category" id="category"> 
        {
          categories.map(category=>{
            return(
              <option key={category._id} value={category._id}>{category.categoryName}</option>
            )
          })
        }
      </select>
        <button type='submit'>Add product</button>
       </form>
       </section>
    </main>
  )
}

export default AddProduct

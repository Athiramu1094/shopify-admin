import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Root()  {
  return (
    <>
    <header>
        <div className='container'>
        <h1>Admin</h1>
        <nav>
            <ul className='list'>
                <div className='list-container'>
                <li>
                    <Link to={'/'} className='list-link'>
                    Home
                    </Link>
                </li>
                <li>
                    <Link to={'/add-product'} className='list-link'>
                    Add Product
                    </Link>
                </li>
                </div>
            </ul>
        </nav>

        </div>


    </header>
    <Outlet/>
    <footer></footer>
    </>
  )
}

export default Root

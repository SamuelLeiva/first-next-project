import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <div className="">
                <h1>Logo</h1>
            </div>
            <div className="">
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/portfolio'>Portfolio</Link>
            </div>
        </ul>
    </nav>
  )
}

export default Navbar
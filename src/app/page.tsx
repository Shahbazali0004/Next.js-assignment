import react from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <h1>Home page</h1>
      <br />
       Welcome to our website Home page .
        <br />
        <br />
      <Link href="/about">Go to about page</Link>
      <br />
      <Link href="/contact-us">Go to contact page</Link> 
      <br />
      <Link href="/service-page">Go to servie page</Link>
      
    </div>
  )
}

export default page

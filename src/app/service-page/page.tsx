import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <h1>service</h1>
      <br />
      welcome to service page
      <br />
      <br />
      <Link href='/'>Go back to home page</Link>
      <br />
      <br />
      <Link href='/service-page/app-development'>Go to app development page</Link>
       <br /> 
       <Link href='/service-page/web-development'>Go to web development page</Link>
    </div>
  )
}

export default page

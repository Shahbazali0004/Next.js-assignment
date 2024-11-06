import React from 'react'
import Link from 'next/link'


const page = () => {
  return (
    <div>
        <h1>App development page</h1>
        <br />
       <Link href='/service-page'>Go back to service page</Link>
    </div>
  )
}

export default page

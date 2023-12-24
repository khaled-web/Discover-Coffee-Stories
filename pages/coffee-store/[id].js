import React from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'

function coffeeStore() {
  const router = useRouter()
  
  return (
    <div>
       Coffee Store Page...{router.query.id} <br/>
       <Link href="/">Back to Home</Link> <br/>
       <Link href="/coffee-store/dynamic">Go to page dynamic</Link>
    </div>
  )
}

export default coffeeStore

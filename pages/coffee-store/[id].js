import React from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'

function coffeeStore() {
  const router = useRouter()
  
  return (
    <div>
       Coffee Store Page...{router.query.id} <br/>
       <Link href="/dynamic">
        Welcome to next.js with ankita
        </Link> 
    </div>
  )
}

export default coffeeStore

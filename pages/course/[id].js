import React from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'
import Link from 'next/link'
function courses() {
 const router = useRouter()
  return (
    <div>
      <Head>
        <title>ankita</title>
        <link rel="icon" href="/favicon01.ico" />
        <meta
          name="description"
          content="allows you to discover coffee stores"
        />
      </Head>
      <Link href="/indexjs">
       welcome to Next.js with ankita 
      </Link>
    </div>
  )
}

export default courses

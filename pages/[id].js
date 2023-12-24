import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
function dynamicRoute() {
  return (
    <div>
      <Head>
        <title>foobar</title>
        <link rel="icon" href="/favicon01.ico" />
        <meta
          name="description"
          content="allows you to discover coffee stores"
        />
      </Head>
      <Link href='/dynamic-route'>
       Welcome back in dynamic route
      </Link>
      <br/>
      <Link href='/foobar'>
        page foobar
        </Link>
    </div>
  )
}

export default dynamicRoute

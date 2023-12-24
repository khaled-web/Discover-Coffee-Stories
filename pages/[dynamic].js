import React from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'
function dynamicRoute() {
  const router = useRouter()
  const query = router.query.dynamic
  console.log("query", query)
  return (
    <div>
      <Head>
        <title>{query}</title>
      </Head>
      Hi there, I am a dynamic route:- {query}
    </div>
  )
}

export default dynamicRoute

import AnimatedText from '@/components/AnimatedText'
import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'

const projects = () => {
  return (
    <>
        <Head>
            <title>DT | About Page</title>
            <meta name="description" content="description goes here..." />
        </Head>
        <main className='w-full mb-16 flex flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text="Imagination Trumps Knowledge!" />
            </Layout>
        </main>
    </>
  )
}

export default projects
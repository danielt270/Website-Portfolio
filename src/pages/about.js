import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'

const about = () => {
  return (
    <>
        <Head>
            <title>DT | About Page</title>
            <meta name="description" content="description goes here..." />
        </Head>
        <main className='flex w-full flex-col items-center justify-center'>
            <Layout>
                <AnimatedText text="Passion Fuels Purpose!" />
            </Layout>   
        </main>
    </>
  )
}

export default about
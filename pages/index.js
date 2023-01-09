import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

import { getTweets } from './library/Twitter'
import Tweetss from './Tweetss'
import { Hero } from './components/Hero'
import { Carousel } from './components/Carousel'
import TweetBox from './components/TweetBox'

const inter = Inter({ subsets: ['latin'] })

export default function Home({tweets}) {
  return (
    <>
    <Carousel />
   
    <div className='mx-auto grid justify-items-center w-full'>
      <h2 className='text-black text-3xl font-bold'>ABOUT US</h2>
    </div>
    {/* HERO SECTION */}
    <Hero />
    <div className='mt-2 p-20'>
      <div className='mx-auto grid justify-items-center w-full'>
        <h2 className='text-3xl text-black font-bold'>Twitter Feed</h2>
      </div>
    {tweets.map((tweet) => {
    return <Tweetss key={tweet.id} {...tweet}/>
   })}
    </div>
       
    </>
  )
}

export async function getStaticProps() {
  const tweets = await getTweets();
  //console.log(tweets);

  return {props: { tweets }}
}

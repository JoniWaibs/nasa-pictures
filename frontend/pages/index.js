import Head from 'next/head'
import Router from 'next/router'
import dynamic from 'next/dynamic'
import { useContext, useEffect } from 'react'

import context from '../context/AppContext'
const { AppContext } = context;

const Header = dynamic(() => import('../components/Header'))
const CardList = dynamic(() => import('../components/CardList'))
const Footer = dynamic(() => import( '../components/Footer'))
const Spinner = dynamic(() => import('../components/Spinner'))
import styles from '../styles/Home.module.scss'

import { Service as ApiService } from '../services'

export default function Home({pictures, page}) {
  const { data } = pictures || { data: [] }
  const { setPictures, isLoading } = useContext(AppContext)

  useEffect(() =>  setPictures(data), [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Mars Rover Pictures</title>
        <meta name="Mars Rover Pictures" content="Mars Pictures taken for NASA cameras" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header name="Header"/>

      <button onClick={() => Router.push(`/?page=${page + 1}`, undefined, { shallow: true })}>Siguiente</button>

      <main className={styles.main}>
        { isLoading  ? (<Spinner/>) : (<CardList name="List of Mars Pictures"/>)}
      </main>

      <Footer name="Footer"/>
    </div>
  )
}

export const getServerSideProps = async ({ query: { page = 1 } }) => {
  const params = { sol: 1000, page}
  try {
    const pictures = await new ApiService(params).getPictures()
    return { props: { pictures, page: parseInt(page, 10) } }
  } catch (error) {
    return { notFound: true }
  }
};

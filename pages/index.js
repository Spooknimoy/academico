import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Pagina } from '@/componentes/Pagina'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Pagina></Pagina>
    </>
  )
}

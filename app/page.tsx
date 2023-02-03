import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Comp from './Comp'
import { prisma } from 'lib/prisma/db'

const inter = Inter({ subsets: ['latin'] })

const getData = async () => {
  const data = await prisma.category.findMany({
    include: {
      CategoriesOnExpenses: {
        include: {
          Expense: true
        }
      }
    }
  })
  return JSON.parse(JSON.stringify(data));
}

export default async function Home() {
  const data = await getData()
  console.log(data)
  return (
    <main className={styles.main}>
      <h1>test</h1>
      <Comp data={data} />
    </main>
  )
}

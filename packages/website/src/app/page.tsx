'use client'

import { use } from 'react'
import styles from './page.module.css'
import getSvgs from './../lib/getSvgs'
import Icons from '@/components/icons'

const svgs = getSvgs()

export default function Home() {
  const svgsName = use(svgs)

  return (
    <>
      <main className={styles.main}>
        <div className="text-3xl mb-5 font-bold">Icons List</div>
        <div className="flex flex-wrap bg-white rounded shadow p-8">
          <Icons components={svgsName.components}></Icons>
        </div>
      </main>
    </>
  )
}

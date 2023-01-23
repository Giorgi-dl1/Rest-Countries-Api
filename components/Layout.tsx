import React, { useState } from 'react'
import { Layout } from '../interfaces'
import Header from './Header'

const Layout = ({ children }: Layout) => {
  const [dark, setDark] = useState(false)

  const toggleDark = () => {
    setDark(!dark)
  }
  return (
    <div className={`${dark ? 'dark' : ''}`}>
      <Header toggleDark={toggleDark} />
      <main className="transition duration-300 bg-light-bg dark:bg-dark-bg padding-x">
        {children}
      </main>
    </div>
  )
}

export default Layout

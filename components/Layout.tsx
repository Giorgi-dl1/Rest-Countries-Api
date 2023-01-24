import React, { useState } from 'react'
import { Layout } from '../interfaces'
import Header from './Header'

const Layout = ({ children }: Layout) => {
  const [dark, setDark] = useState(false)

  const toggleDark = () => {
    setDark(!dark)
  }
  return (
    <div
      className={`transition text-light-text min-h-screen bg-light-bg duration-300 ${
        dark ? 'dark !bg-dark-bg !text-dark-text' : ''
      }`}
    >
      <Header toggleDark={toggleDark} dark={dark} />
      <main className="transition duration-300 bg-light-bg dark:bg-dark-bg padding-x">
        {children}
      </main>
    </div>
  )
}

export default Layout

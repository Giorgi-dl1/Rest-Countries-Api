import Link from 'next/link'
import React from 'react'
import { BsMoon, BsMoonFill } from 'react-icons/bs'
import { Header } from '../interfaces'

const Header = ({ toggleDark }: Header) => {
  return (
    <header className="flex justify-between py-4 transition duration-300 padding-x md:py-6 text-light-text dark:text-dark-text dark:bg-dark-elements">
      <div className="text-2xl font-bold">
        <Link href="/">Where in the world?</Link>
      </div>
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => toggleDark()}
      >
        <BsMoon /> <span> Dark Mode</span>
      </div>
    </header>
  )
}

export default Header

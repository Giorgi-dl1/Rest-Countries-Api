import Link from 'next/link'
import { BsMoon, BsMoonFill } from 'react-icons/bs'
import { Header } from '../interfaces'

const Header = ({ toggleDark, dark }: Header) => {
  return (
    <header className="py-4 mb-1 transition duration-300 shadow-md bg-light-elements padding-x md:py-6 text-light-text dark:text-dark-text dark:bg-dark-elements">
      <div className="flex justify-between max-w-[1550px] lg:mx-auto">
        <div className="text-lg font-bold md:text-2xl">
          <Link href="/">Where in the world?</Link>
        </div>
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => toggleDark()}
        >
          {dark ? (
            <BsMoonFill className="transition duration-300" />
          ) : (
            <BsMoon />
          )}
          <span> Dark Mode</span>
        </div>
      </div>
    </header>
  )
}

export default Header

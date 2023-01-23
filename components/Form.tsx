import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { IoIosArrowDown } from 'react-icons/io'
import { Form } from '../interfaces'

const Form = ({ activeRegion }: Form) => {
  const [showRegions, setShowRegions] = useState(false)
  const dropDownRef = useRef<HTMLInputElement>(null)
  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        dropDownRef.current &&
        !dropDownRef?.current.contains(event.target) &&
        !event.target.classList.contains('dropdown-label')
      ) {
        setShowRegions(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropDownRef])

  return (
    <div className="flex flex-col gap-6 py-6 md:justify-between dark:text-dark-text md:py-10 md:flex-row">
      <form>
        <div className="relative">
          <BsSearch className="absolute left-6 top-[50%] -translate-y-[50%] text-[gray]" />
          <input
            type="text"
            placeholder="Search for a country..."
            className="py-3 transition duration-300 rounded-sm pl-14 w-[400px] max-w-full shadow-md dark:bg-dark-elements  border-none outline-none"
          />
        </div>
      </form>
      <div className="relative w-[170px]">
        <div
          onClick={() => setShowRegions(!showRegions)}
          className="flex items-center justify-between gap-2 px-4 py-3 transition duration-300 rounded-md shadow-md cursor-pointer dropdown-label bg-light-elements dark:bg-dark-elements"
        >
          <span className="dropdown-label">
            {activeRegion ? activeRegion : 'Filter by Region'}
          </span>
          <span className="dropdown-label">
            <IoIosArrowDown
              className={`transition duration-300 ${
                showRegions ? 'rotate-180' : ''
              } `}
            />
          </span>
        </div>
        <div
          ref={dropDownRef}
          className={`absolute z-10 w-full scale-75 opacity-0 transition duration-300 rounded-md shadow-md top-14 ${
            showRegions ? '!opacity-100 scale-100' : ''
          }`}
        >
          {regions.map((region) => (
            <Link href={`/region/${region}`} key={region}>
              <div
                className={`px-4 py-1 ${
                  activeRegion === region && '!bg-[#d9d9d9] dark:!bg-dark-bg'
                } hover:bg-[#d9d9d9] dark:hover:bg-dark-bg transition duration-300 bg-light-elements dark:bg-dark-elements`}
              >
                {region}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Form

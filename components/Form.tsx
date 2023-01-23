import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { IoIosArrowDown } from 'react-icons/io'

const Form = () => {
  const [showRegions, setShowRegions] = useState(false)
  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
  return (
    <div className="flex flex-col justify-between py-6 dark:text-dark-text md:py-10 md:flex-row">
      <form>
        <div className="relative">
          <BsSearch className="absolute left-6 top-[50%] -translate-y-[50%] text-[gray]" />
          <input
            type="text"
            placeholder="Search for a country..."
            className="py-3 rounded-sm pl-14 w-[400px] max-w-full shadow-md dark:bg-dark-elements  border-none outline-none"
          />
        </div>
      </form>
      <div className="relative">
        <div
          onClick={() => setShowRegions(!showRegions)}
          className="flex items-center gap-2 px-4 py-3 rounded-md shadow-md cursor-pointer bg-light-elements dark:bg-dark-elements"
        >
          <span>Filter by Region</span>
          <span>
            <IoIosArrowDown
              className={`transition duration-300 ${
                showRegions ? 'rotate-180' : ''
              } `}
            />
          </span>
        </div>
        <div
          className={`absolute z-10 w-full scale-75 opacity-0 transition duration-300 rounded-md shadow-md top-14 ${
            showRegions ? '!opacity-100 scale-100' : ''
          }`}
        >
          {regions.map((region) => (
            <div
              key={region}
              className="px-4 py-1 bg-light-elements dark:bg-dark-elements"
            >
              {region}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Form

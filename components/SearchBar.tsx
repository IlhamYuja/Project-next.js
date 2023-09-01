'use client'

import React from 'react'
import { useState} from 'react'
import { SearchManufacturer } from '.'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


const SearchButton =({ otherClass } : {otherClass: string}) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClass}`}>
      <Image
      src='/magnifying-glass.svg'
      alt='Search'
      width={40}
      height={40}
      className='object-contain'
      />
  </button>
)


const SearchBar = ( {setManufacturer, setModel }) => {
    const [searchManufacturer, setSearchManufacturer] = useState('')
    const [searchModel, setSearchmodel] = useState('')
    const router = useRouter()

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(searchManufacturer === '' && searchModel === '') {
          return alert('Please Fill Search Bar')
        }

        setModel(searchModel) 
        setManufacturer(searchManufacturer)

    }

    const UpdateSearchParams = (model: string, manufacturer: string) => {
      const searchParams = new URLSearchParams(window.location.search)

      if(model) {
        searchParams.set('model', model)
      } else {
        searchParams.delete('model')
      }

      if(model) {
        searchParams.set('manufacturer', model)
      } else {
        searchParams.delete('manufacturer')
      }

      const newPathname = `${window.location.pathname}?${searchParams.toString()}`

      router.push(newPathname);
    }

  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar__item'>
            <SearchManufacturer 
                selected={searchManufacturer}
                setSelected={setSearchManufacturer}
            />
            <SearchButton otherClass='sm:hidden'/>
        </div>
        <div className='searchbar__item'>
          <Image 
          src='/model-icon.png'
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
          alt='car model'
          />
          <input 
          type='text'
          name='model'
          value={searchModel}
          onChange={(e) => setSearchmodel(e.target.value)}
          placeholder='Search Model'
          className='searchbar__input'
          />
          <SearchButton otherClass='sm:hidden' />
        </div>
          <SearchButton otherClass='max-sm:hidden' />

    </form>
  )
}

export default SearchBar
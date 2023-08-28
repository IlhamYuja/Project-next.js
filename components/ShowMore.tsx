'use client'
import { ShowMoreProps } from '@/types'
import { useRouter } from 'next/navigation'
import React from 'react'
import { CustomButton } from '.'
import { updateSearchParams } from '@/utils'

const ShowMore = ({ pageNumber, isNext, setlimit}: ShowMoreProps) => {

    const handleNavigation =() => {
        const newLimit = (pageNumber + 1) * 10;
        setlimit(newLimit);
    };

  return (

    <div className='w-full flex-center gap-5 mt-10'>
        {!isNext && (
            <CustomButton
            title='show more'
            btnType='button'
            containerStyle='bg-primary-blue rounded-full text-white'
            handleClick={handleNavigation}            
            />
        )}
    </div>
  )
}

export default ShowMore
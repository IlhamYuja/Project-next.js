'use client'

import Image from 'next/image';
import { CustomButton } from '.';


const Hero = () => {
    const handleScroll = () => {

    }
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
                Temukan dan Sewa Mobil Sekarang Dengan Mudah
                & Cepat
            </h1>
            <p className='hero__subtitle'>
                Sewa dan rasakan experiance nya
                dengan mobil yang menarik
            </p>

            <CustomButton
            title='Cari Mobil'
            containerStyle='bg-primary-blue text-white rounded-full mt-10'
            handleClick={handleScroll}
            />
        </div>

        <div className='hero__image-container'>
            <div className='hero__image'>
                <Image src="/hero.png" alt='hero'
                fill className='object-contain' />
                <div className='hero__image-overlay'/>
            </div>
        </div>
    </div>
  )
}

export default Hero
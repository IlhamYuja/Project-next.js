'use client'

import { CardCar, CustomFilter, Hero, SearchBar, ShowMore } from '@/components'
import { fuels, yearsOfProduction } from '@/constants';
import { fetchCars } from '@/utils'
import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function Home() {
  const [allCars, setallCars] = useState([]);
  const [loading, setloading] = useState(false)

  //search state
  const [manufacturer, setmanufacturer] = useState('');
  const [model, setmodel] = useState('');

  //filter State  
  const [fuel, setfuel] = useState('');
  const [year, setyear] = useState(2023);

  //pagination state
  const [limit, setlimit] = useState(10);

  const getCars = async () => {
    setloading(true)

   try {
    const result = await fetchCars({
      manufacturer: manufacturer || '',
      year: year || 2022,
      fuel: fuel || '',
      limit: limit || 10,
      model: model || '',
    });
    
    setallCars(result);

   } catch {
    console.log(error);
   } finally {
    setloading(false);
   }

  }
  useEffect(() => {
    getCars();
  }, [fuel, year, limit, manufacturer, model])

  const isDataEmpety = !Array.isArray(allCars) || allCars.length <1 || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'> Car Catalog</h1>
          <p>Explore Your Car</p>
        </div>

        <div className='home__filters'>
          <SearchBar
          setManufacturer={setmanufacturer}
          setModel={setmodel}
          />

          <div  className='home__filter-container'>
              <CustomFilter title='fuel' options={fuels}
              setFilter={setfuel}
              />
              <CustomFilter title='year' options={yearsOfProduction}
              setFilter={setyear}/>
            
          </div>
        </div>
        {allCars.length > 0 ? (
          <section>
            <div className='home__cars-wrapper'>
                {allCars?.map((car) => (<CardCar car={car}/>))}
            </div>

            {loading && (
              <div className='mt-16 w-full flex-center'>
                <Image
                 src='/loader.svg'
                 alt='loader'
                 width={50}
                 height={50}
                 className='object-contain'
                 />
              </div>
            )}

            <ShowMore 
            pageNumber={limit / 10}
            isNext={limit > allCars.length}
            setlimit={setlimit}
            />
          </section>  
        ): (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>
              No Result
            </h2>
            <p>{allCars?.message}</p>
          </div>
        )}

      </div>
    </main>
  )
}

import { CardCar, CustomFilter, Hero, SearchBar } from '@/components'
import { fetchCars } from '@/utils'
import Image from 'next/image'

export default async function Home() {
  const allCars = await fetchCars();
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
          <SearchBar/>

          <div  className='home__filter-container'>
              <CustomFilter title='fuel'/>
              <CustomFilter title='year'/>
            
          </div>
        </div>
        {!isDataEmpety ? (
          <section>
            <div className='home___cars-wrapper'>
                {allCars?.map((car) => (<CardCar car={car}/>))}
            </div>
          </section>
        ): (
          <div className='home___error-container'>
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

import { useCarStore } from '../store/useCarStore'
import { useEffect } from 'react'
import CarItem from './CarItem'

export default function CarList() {
  const { cars, fetchCars, sortBy } = useCarStore()

  useEffect(() => {
    fetchCars()
  }, [])

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <button onClick={() => sortBy('year')} className="bg-blue-500 text-white px-3 py-1 rounded">Sort by Year</button>
        <button onClick={() => sortBy('price')} className="bg-blue-500 text-white px-3 py-1 rounded">Sort by Price</button>
      </div>
      {cars.map((car) => (
        <CarItem key={car.id} car={car} />
      ))}
    </div>
  )
}
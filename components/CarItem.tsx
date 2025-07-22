import { Car } from '../types/Car'
import { useState } from 'react'
import { useCarStore } from '../store/useCarStore'

export default function CarItem({ car }: { car: Car }) {
  const { editCar, deleteCar } = useCarStore()
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState(car.name)
  const [price, setPrice] = useState(car.price)

  const handleSave = () => {
    editCar(car.id, { name, price })
    setEditing(false)
  }

  return (
    <div className="border p-4 my-2 rounded bg-white shadow">
      {editing ? (
        <div className="space-y-2">
          <input value={name} onChange={(e) => setName(e.target.value)} className="border px-2 py-1" />
          <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} className="border px-2 py-1" />
          <button onClick={handleSave} className="bg-green-500 text-white px-3 py-1 rounded">Save</button>
        </div>
      ) : (
        <>
          <h3 className="text-lg font-semibold">{car.name} {car.model}</h3>
          <p>Year: {car.year}</p>
          <p>Price: ${car.price}</p>
          <button onClick={() => setEditing(true)} className="bg-yellow-500 text-white px-3 py-1 mr-2 rounded">Edit</button>
        </>
      )}
      <button onClick={() => deleteCar(car.id)} className="bg-red-500 text-white px-3 py-1 mt-2 rounded">Delete</button>
    </div>
  )
}
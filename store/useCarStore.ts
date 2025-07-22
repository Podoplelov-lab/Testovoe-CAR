import { create } from 'zustand'
import axios from 'axios'
import { Car } from '../types/Car'

interface CarStore {
  cars: Car[]
  fetchCars: () => Promise<void>
  editCar: (id: number, updated: Partial<Car>) => void
  deleteCar: (id: number) => void
  sortBy: (key: 'year' | 'price') => void
}

export const useCarStore = create<CarStore>((set) => ({
  cars: [],
  fetchCars: async () => {
    const res = await axios.get<Car[]>('https://ofc-test-01.tspb.su/test-task/vehicles')
    set({ cars: res.data })
  },
  editCar: (id, updated) =>
    set((state) => ({
      cars: state.cars.map((car) =>
        car.id === id ? { ...car, ...updated } : car
      ),
    })),
  deleteCar: (id) =>
    set((state) => ({
      cars: state.cars.filter((car) => car.id !== id),
    })),
  sortBy: (key) =>
    set((state) => ({
      cars: [...state.cars].sort((a, b) => a[key] - b[key]),
    })),
}))
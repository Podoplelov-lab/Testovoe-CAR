import CarList from './components/CarList'
import MapView from './components/MapView'

export default function App() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Vehicle List</h1>
      <CarList />
      <h2 className="text-xl font-semibold mt-8 mb-2">Map</h2>
      <MapView />
    </div>
  )
}
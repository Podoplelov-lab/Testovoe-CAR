import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useCarStore } from '../store/useCarStore'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

L.Marker.prototype.options.icon = defaultIcon

export default function MapView() {
  const { cars } = useCarStore()

  return (
    <MapContainer center={[55.75, 37.61]} zoom={10} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        attribution='&copy; OpenStreetMap'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {cars.map((car) => (
        <Marker key={car.id} position={[car.latitude, car.longitude]}>
          <Popup>
            <strong>{car.name}</strong><br />
            {car.model} – ${car.price}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
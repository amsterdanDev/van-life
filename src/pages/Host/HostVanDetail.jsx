import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const HostVanDetail = () => {
  const [van, setVan] = useState(null)
  const { id } = useParams() 
  
  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then(res => res.json())
      .then(data => setVan(data.vans))
  }, [id])
  
  if (!van) return <i>Loading...</i>
  
  return (
    <div>
      <img src={van.imageUrl} width={150} />
      <h2>{van.name}</h2>
      <p>{van.price}</p>
      <p>{van.type}</p>
    </div>
  )
}

export default HostVanDetail
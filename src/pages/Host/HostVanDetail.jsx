import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

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
    <section>
      <Link
        to=".."
        relative="path"
        className="back-button"
      >&larr; <span>Back to all vans</span></Link>

      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={van.imageUrl} />
          <div className="host-van-detail-info-text">
            <i
              className={`van-type van-type-${van.type}`}
            >
              {van.type}
            </i>
            <h3>{van.name}</h3>
            <h4>${van.price}/day</h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HostVanDetail
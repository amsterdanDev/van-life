import { useOutletContext } from "react-router-dom"

const HostVanInfo = () => {
  const { name, type, description } = useOutletContext()

  return (
    <section className="host-van-detail-info">
      <h4>Name: <span>{name}</span></h4>
      <h4>Category: <span>{type}</span></h4>
      <h4>Description: <span>{description}</span></h4>
      <h4>Visibility: <span>Public</span></h4>
    </section>
  )
}

export default HostVanInfo
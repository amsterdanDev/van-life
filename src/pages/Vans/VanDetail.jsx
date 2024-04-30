import { Link, useLoaderData, useLocation } from "react-router-dom"
import { getVans } from "../../api"

const VanDetail = () => {
  const { imageUrl, name, price, description, type } = useLoaderData()
  const { state } = useLocation()

  const stateSearch = state?.search || ''
  const stateType = state?.type || 'all'

  return (
    <div className="van-detail-container">
      <Link to={`..${stateSearch}`} relative="path" className="back-button">
        &larr; <span>Back to {stateType} vans</span>
      </Link>
      <div className="van-detail">
        <img src={imageUrl} />
        <i className={`van-type ${type} selected`}>{type}</i>
        <h2>{name}</h2>
        <p className="van-price"><span>${price}</span>/day</p>
        <p>{description}</p>
        <button className="link-button">Rent this van</button>
      </div>
    </div>
  )
}

function loader({ params }) {
  return getVans(params.id)
}

export default VanDetail
export { loader }
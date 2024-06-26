import { useOutletContext } from "react-router-dom"

const HostVanPricing = () => {
  const { price } = useOutletContext()

  return (
    <h3 className="host-van-price">${price}<span>/day</span></h3>
  )
}

export default HostVanPricing
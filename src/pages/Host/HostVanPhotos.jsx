import { useOutletContext } from "react-router-dom"

const HostVanPhoto = () => {
  const { imageUrl } = useOutletContext()

  return (
    <img src={imageUrl} className="host-van-detail-image" />
  )
}

export default HostVanPhoto
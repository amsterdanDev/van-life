import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"

const Vans = () => {
  const [vans, setVans] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get('type')

  const displayedVans = typeFilter 
    ? vans.filter(({ type }) => type === typeFilter)
    : vans

  useEffect(() => {
    fetch('/api/vans')
      .then(res => res.json())
      .then(data => setVans(data.vans))
  }, [])

  const toFilter = ({ target }) => {
    if (!target.value) return setSearchParams({})

    setSearchParams({ type: target.value })
  }

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div>
        <button 
          value={'simple'} 
          onClick={toFilter} 
          className={`van-type simple ${typeFilter === 'simple' && 'selected'}`} >
          Simple
        </button>
        <button 
          value={'luxury'} 
          onClick={toFilter} 
          className={`van-type luxury ${typeFilter === 'luxury' && 'selected'}`} >
          Luxury
        </button>
        <button 
          value={'rugged'} 
          onClick={toFilter} 
          className={`van-type rugged ${typeFilter === 'rugged' && 'selected'}`} >
          Rugged
        </button>
        {typeFilter && <button onClick={toFilter} className="van-type clear-filters" >Clear Filter</button>}
      </div>
      <div className="van-list">
        {displayedVans.map(van => (
          <div key={van.id} className="van-tile">
            <Link to={`/vans/${van.id}`}>
              <img src={van.imageUrl} />
              <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
              </div>
              <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Vans
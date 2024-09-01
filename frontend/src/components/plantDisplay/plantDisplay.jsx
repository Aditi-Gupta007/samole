import React, { useContext } from 'react'
import './PlantDisplay.css'
import PlantItem from '../PlantItem/PlantItem'
import { StoreContext } from '../../Context/StoreContext'

const PlantDisplay = ({category}) => {

  const {plant_list} = useContext(StoreContext);

  return (
    <div className='plant-display' id='plant-display'>
      <h2>Top plants of the Season</h2>
      <div className='plant-display-list'>
        {plant_list.map((item)=>{
          if (category==="All" || category===item.category) {
            return <PlantItem key={item._id} image={item.image} name={item.name} desc={item.description} price={item.price} id={item._id}/>
          }
        })}
      </div>
    </div>
  )
}

export default PlantDisplay

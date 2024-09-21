import React from 'react'
import DragAndDrop from '../components/DragAndDrop.'

const PlacaCumple = () => {
  return (
    <section className='mainSection' style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
        <div style={{width: "25%"}}>
        <DragAndDrop/>
        </div>
    </section>
  )
}

export default PlacaCumple
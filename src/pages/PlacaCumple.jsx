import React from 'react'
import DragAndDrop from '../components/DragAndDrop.'

const PlacaCumple = () => {
  return (
    <section className='mainSection' style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
        <div style={{maxWidth: "700px"}}>
        <DragAndDrop/>
        </div>
    </section>
  )
}

export default PlacaCumple
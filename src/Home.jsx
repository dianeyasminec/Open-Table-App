
import React from 'react'
import FloorPlan from './FloorPlan'
import MenuPopup from './MenuPopup'

export default function Home() {
    
  return (
    <>
    <h1 className='text-center'>Welcome to the Hard Rock Cafe Floor Plan</h1>
    <p className='text-center'>Guest have a 90minutes dining time, thank you!</p>
    <FloorPlan/>
    <MenuPopup/>
    </>
  )
}

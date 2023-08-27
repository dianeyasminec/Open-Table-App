// This component will display the floor plan and table availability.
// It will have a list of Table components.

// The FloorPlan component will render multiple Table components.
// Each Table component will have conditional rendering: if the 
// table is in the "seated" state, it will render the seated guest 
// icons; if not, it will render the GuestIcon component for draggable 
// guests.

import React from 'react'
import Table from './Table'

export default function FloorPlan() {
  return (
    <>
    <Table/>
    </>
  )
}

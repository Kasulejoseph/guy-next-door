import React, { ReactElement } from 'react'
import Navigation from './Nav'

export default function Layouts({children}: any) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
    
  )
}

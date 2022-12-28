import React, { ReactElement } from 'react'
import { Meta } from './Meta'
import Navigation from './Nav'

export default function Layouts({children}: any) {
  return (
    <>
      <Meta />
      <Navigation />
      {children}
    </>
    
  )
}

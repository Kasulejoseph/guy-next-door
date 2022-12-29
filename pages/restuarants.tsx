import React from 'react'
import { BreadCrumb } from '../components/Layouts/BreadCrumb'
import { Restuarants } from '../components/Restuarants'

export default function restuarant() {
  return (
    <>
    <BreadCrumb category='Restuarants'/>
    <Restuarants />
    </>
  )
}

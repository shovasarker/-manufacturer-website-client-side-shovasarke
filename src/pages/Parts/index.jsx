import React from 'react'
import PartsContainer from '../shared/partscontainer/PartsContainer'
import SectionTitle from '../standalone/SectionTitle'

const Parts = () => {
  return (
    <main>
      <SectionTitle subTitle={'All Available Parts'} center />
      <PartsContainer />
    </main>
  )
}

export default Parts

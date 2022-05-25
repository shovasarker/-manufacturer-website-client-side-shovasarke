import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

import PartsContainer from '../../../shared/partscontainer/PartsContainer'
import Button from '../../../standalone/Button'
import SectionTitle from '../../../standalone/SectionTitle'

const HomeParts = () => {
  const navigate = useNavigate()
  return (
    <section className='py-20 bg-[url(https://i.ibb.co/JqkCrrp/parts.jpg)] bg-no-repeat bg-fixed bg-cover bg-center'>
      <SectionTitle
        title={''}
        subTitle='All Parts'
        center
        className={'text-base-100'}
      />
      <PartsContainer
        perPage={3}
        glass
        url={'https://mwss-server.herokuapp.com/part'}
      />
      <Button
        outlined
        className={'!border-white !text-white !flex !mx-auto'}
        onClick={() => navigate('/parts')}
      >
        <span>View All</span>
        <AiOutlineArrowRight className='ml-2 w-5 h-5' />
      </Button>
    </section>
  )
}

export default HomeParts

import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../standalone/Button'

const PartCard = ({ part, glass }) => {
  const navigate = useNavigate()
  const { _id, name, img, description, price, minOrder, inStock } = part
  return (
    <div
      className={`card w-full glass ${
        glass ? 'text-base-100' : 'text-neutral'
      }`}
    >
      <figure>
        <img src={img} alt={name} className='aspect-[5/3] object-cover' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{name}</h2>
        <p>{description}</p>
        <p>
          Price: <span className='font-semibold'>${price} (per unit)</span>
        </p>
        <p>
          Minimun Order:{' '}
          <span className='font-semibold'>{minOrder} (unit)</span>
        </p>
        <p>
          Available: <span className='font-semibold'>{inStock} (unit)</span>
        </p>
      </div>
      <Button
        fullWidth
        neutral
        className={'rounded-t-none'}
        onClick={() => navigate(`/purchase/${_id}`)}
      >
        Place Order
      </Button>
    </div>
  )
}

export default PartCard

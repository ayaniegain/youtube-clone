import React from 'react'
import Button from './Button'

function ButtonList() {
  return (
    <div className='flex'>
      <Button name='All'/>
      <Button name='Gaming'/>
      <Button name='Song'/>
      <Button name='Cricket'/>
      <Button name='Soccer'/>
      <Button name='News'/>
      <Button name='Cooking'/>
    </div>
  )
}

export default ButtonList
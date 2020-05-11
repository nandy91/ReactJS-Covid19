import React, { Component } from 'react'
import { render } from '@testing-library/react'

const Cards = (props) => {
   console.log(props.data)
   return(
        <h1>Cards</h1>
   )
}

export default Cards

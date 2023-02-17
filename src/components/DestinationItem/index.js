// Write your code here
import './index.css'
// import {Component} from 'react'

const DestinationItem = props => {
  const {details} = props
  const {imgUrl, name} = details

  return (
    <li className="container1">
      <img className="img1" src={imgUrl} alt={name} />
      <p className="head1">{name}</p>
    </li>
  )
}

export default DestinationItem

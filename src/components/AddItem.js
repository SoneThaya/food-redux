import React, { useState } from 'react'
import { Link } from "react-router-dom"
import InputLabel from "@material-ui/core/InputLabel"
import TextField from "@material-ui/core/TextField"

import { connect } from 'react-redux';
import { addItem } from '../action/addItem'

const initialState = {
  title: "",
  description: "",
  category: "",
  price: "",
  itemImage: "",
}

const AddItem = (props) => {
  const [itemToAdd, setItemToAdd] = useState(initialState)

  const onChange = (e) => {
    setItemToAdd({
      ...itemToAdd,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    props.addItem(itemToAdd)
    setItemToAdd('')

    props.history.push('/menu')
  }

  return (
    <div>
      
    </div>
  )
}

export default AddItem

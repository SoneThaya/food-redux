import React, { useState, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Link, useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { Styles } from './Styles'

import updateItem from '../action/updateItem'

const UpdateItem = (props) => {
  const { id } = useParams()
  const history = useHistory()
  const dispatch = useDispatch()

  const { register, handleSubmit } = useForm()

  const onSubmit = (updatedItem) => {
    console.log(updatedItem, "New Item")
    dispatch(updateItem(updatedItem, props.item_id, history))

    props.history.push('/menu')
  }

  return (
    <Styles>
      <div className="container">
        <div className="entry-container">
          <h2>Update Item</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              label="title"
              id="title"
              name="title"
              ref={register({ required: "required" })}
            />
            <input
              type="text"
              label="description"
              id="description"
              name="description"
              ref={register({ required: "required" })}
            />
            <input
              type="text"
              label="category"
              id="category"
              name="category"
              ref={register({ required: "required" })}
            />
            <input
              type="text"
              label="price"
              id="price"
              name="price"
              ref={register({ required: "required" })}
            />
            <input
              type="text"
              label="itemImage"
              id="itemImage"
              name="itemImage"
              ref={register({ required: "required" })}
            />
            <button
							type="submit"
							variant="contained"
							color="primary"
						>
							Update Item
						</button>
            
            
          </form>
        </div>
      </div>
      
    </Styles>
  )
}

const mapStateToProps = ({ loginReducer, updateItemReducer }) => {
  return {
    item: updateItemReducer.item,
    item_id: updateItemReducer.itemToEdit,
    user_id: loginReducer.userID,
  }
}

export default connect(mapStateToProps, { updateItem })(UpdateItem)

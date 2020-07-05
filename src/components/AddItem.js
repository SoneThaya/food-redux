import React, { useState } from 'react'
import { Link } from "react-router-dom"
import InputLabel from "@material-ui/core/InputLabel"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

import { Styles } from './Styles';

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
    <Styles>
			<div>
				<div className="tabs-container">
					<Link
						className="tab"
						href="https://bw1-marketing-page.now.sh/"
					>
						Home
					</Link>
					<Link className="tab" to="/user-recipes">
						My Recipes
					</Link>
					<Link className="tab active" to="/add-recipe">
						Add Recipe
					</Link>
				</div>
				<div className="entry-container">
					<h2>Add an Item</h2>
          <form onSubmit={handleSubmit}>
            
            <br />
            
						<TextField
							required
							label="title"
							id="title"
							name="title"
							value={itemToAdd.title}
							onChange={onChange}
            />
            
            <br />
            
						<TextField
							required
							label="description"
							id="description"
							name="description"
							value={itemToAdd.description}
							onChange={onChange}
            />
            
            <br />

            <TextField
              required
              label="category"
              id="category"
              name="category"
              value={itemToAdd.category}
              onChange={onChange}
            />
						
            <br />

            <TextField
							required
							label="price"
							id="price"
							name="price"
							value={itemToAdd.price}
							onChange={onChange}
						/>
    
						<br />

            <TextField
							required
							label="itemImage"
							id="itemImage"
							name="itemImage"
							value={itemToAdd.itemImage}
							onChange={onChange}
            />
            
            <br />
            
						<Button
							type="submit"
							variant="contained"
							color="primary"
						>
							Submit
						</Button>
					</form>
				</div>
			</div>
		</Styles>
  )
}

const mapStateToProps = (state) => {
  return {
    addItem: state.addItem,
  }
}

export default connect(mapStateToProps, { addItem })(AddItem)

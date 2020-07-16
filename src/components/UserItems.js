import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect, useDispatch } from 'react-redux';

import getItemsByUser from "../action/getItemByUser";

import axiosWithAuth from "../utils/axiosWithAuth";
import updateItem from "../action/updateItem";
import deleteItem from "../action/deleteItem";
import { itemToEdit } from "../action/updateItem";

const UserItems = (props) => {
  const [userItems, setUserItems] = useState([])
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    axiosWithAuth()
      .get("/menu/my-items")
      .then(res => {
        setUserItems(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  return ( 
    <Styles>
			
				{usersRecipes.length === 0 ? (
					<p className="entry-container">
						You Don't Have Any Recipes Yet, add some
					</p>
				) : (
					<div className="recipe-body">
						{userItems.map((item) => {
							
							return (
								<div key={item.item_id}>
									<p>{item.title}</p>
									<p>{item.description}</p>
									<p>{item.category}</p>
									<p>{item.price}</p>
									<button
										variant="contained"
										color="secondary"
										onClick={() => {
											dispatch(
												recipeToEdit(
													item.item_id,
													history
												)
											)
										}}
									>
										Update
									</button>
									<button
										variant="contained"
										color="secondary"
										onClick={() => {
											dispatch(
												deleteItem(
													item.item_id,
													history
												)
											)
										}}
									>
										Delete
									</button>
								</div>
							)
						})}
					</div>
				)}
			
		</Styles>
  )
}

import React, { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import { connect, useDispatch } from "react-redux"
import Button from "@material-ui/core/Button"
import updateItem from "../action/updateItem"
import deleteItem from "../action/deleteItem"
import { itemToEdit } from "../action/updateItem"
import getItems from "../action/getItems"
// import CardBootStrap from "./RecipeCard"
import { Styles } from "./Styles"

const initialState = {
	title: "",
  description: "",
  category: "",
	price: "",
	itemImage: "",
}

function MenuList(props) {
	console.log("Look at me, props", props)

	const [itemsList, setItemsList] = useState(initialState)
	const [searchTerm, setSearchTerm] = useState("")
	const history = useHistory()
	const dispatch = useDispatch()

	useEffect(() => {
		console.log("ID Here", props.id)
		props.getItems(props.id)
	}, [])

	useEffect(() => {
		const result = props.itemsList.filter((item) =>
			item.title.toLowerCase().includes(searchTerm.toLowerCase())
		)
		console.log("Filtered recipes: ", result)
		setItemsList(result)
	}, [searchTerm])

	const deleteItem = (id) => {
		props.deleteItem(id)
	}

	const handleSearch = (e) => {
		setSearchTerm(e.target.value)
	}

	let itemData = []
	if (searchTerm !== "") {
		itemData = itemsList
	} else {
		itemData = props.itemsList
	}

	return (
		<Styles>
			<div>
				<div className="tabs-container">
					<Link
						className="tab active"
						onClick={props.getItems}
						to="/all-recipes"
					>
						Home
					</Link>
					<Link className="tab" to="/user-recipes">
						My Recipes
					</Link>
					<Link className="tab" to="/add-recipe">
						Add Recipe
					</Link>
				</div>
				<input
					className="search-input"
					type="text"
					placeholder="Search recipes here"
					value={searchTerm}
					onChange={handleSearch}
				></input>
				<div className="recipes-body">
					{recipeData.map((recipe) => {
						console.log("Recipe here", recipe.id)
						return (
							<div key={recipe.id} className="recipe-card">
								<h2 className="recipe-title">{recipe.title}</h2>
								<h4 className="recipe-author">
									By {recipe.creator}
								</h4>
								<p>
									<span className="ingredients">
										Ingredients:{" "}
									</span>
									{recipe.ingredients}
								</p>
								<br />
								<div className="recipe-card-buttons">
									<Link
										style={{ textDecoration: "none" }}
										to={`/recipes/${recipe.id}`}
									>
										<Button
											variant="contained"
											color="secondary"
											onClick={() => {
												dispatch(
													recipeToEdit(
														recipe.id,
														history
													)
												)
											}}
										>
											Update
										</Button>
									</Link>
									<Button
										variant="contained"
										color="secondary"
										onClick={(e) => {
											deleteRecipe(recipe.id)
										}}
									>
										Delete
									</Button>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</Styles>
	)
}

const mapStateToProps = ({ getItemsReducer }) => {
	return {
		itemsList: getItemsReducer.items,
	}
}

export default connect(mapStateToProps, {
	getItems,
	deleteItem,
	updateItem,
	itemToEdit,
})(MenuList)
import React, { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import { connect, useDispatch } from "react-redux"
import Button from "@material-ui/core/Button"
import updateItem from "../action/updateItem"
import deleteItem from "../action/deleteItem"
import { itemToEdit } from "../action/updateItem"
import getItem from "../action/getItem"
import MenuCard from "./MenuCard"
import { Styles } from "./Styles"
import CardMedia from '@material-ui/core/CardMedia';


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
		props.getItem(props.id)
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
				
				<input
					className="search-input"
					type="text"
					placeholder="Search recipes here"
					value={searchTerm}
					onChange={handleSearch}
				></input>
				<div className="recipes-body">
					{itemData.map((item) => {
						console.log("Recipe here", item.id)
						return (
              <div key={item.id} className="recipe-card">
              <CardMedia
              component="img"
              alt={item.title}
              height="140"
              image={item.itemImage}
              title={item.title}
            />
								<h2 className="recipe-title">{item.title}</h2>
								<h4 className="recipe-author">
									{item.description}
								</h4>
								<p>
									
									{item.category}
								</p>
								<br />
								<div className="recipe-card-buttons">
									<Link
										style={{ textDecoration: "none" }}
										to={`/menu/${item.id}`}
									>
										<Button
											variant="contained"
											color="secondary"
											onClick={() => {
												dispatch(
													itemToEdit(
														item.id,
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
											deleteItem(item.id)
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
	getItem,
	deleteItem,
	updateItem,
	itemToEdit,
})(MenuList)
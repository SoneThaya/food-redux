import React, { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import { connect, useDispatch } from "react-redux"
import Button from "@material-ui/core/Button"
import updateItem from "../action/updateItem"
import deleteItem from "../action/deleteItem"
import { itemToEdit } from "../action/updateItem"
import getItem from "../action/getItem"
import MenuCard from "./MenuCard"

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 545,
    margin: '25px',
  },
});



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
  
  const classes = useStyles();

	useEffect(() => {
		props.getItem(props.id)
	}, [])

	useEffect(() => {
		const result = props.itemsList.filter((item) =>
			item.title.toLowerCase().includes(searchTerm.toLowerCase())
		)
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
	
			<div>
				
				<input
					className="search-input"
					type="text"
					placeholder="Search recipes here"
					value={searchTerm}
					onChange={handleSearch}
        ></input>
        <Grid container spacing={3}>
          
			
					{itemData.map((item) => (
              
              <Grid item sx={12} sm={6} md={4} key={item.id}>
              <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={item.title}
                  height="140"
                  image={item.itemImage}
                  title={item.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Typography gutterBottom variant="h6" component="h6">
                  Price: {item.price}
                </Typography>
                    </CardActions>
                    
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
            </Card>
        </Grid>
             
				
						))}

        </Grid>
		</div>
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
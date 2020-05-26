import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { bookItems } from '../constants/index'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import { ShoppingCartOutlined } from '@material-ui/icons'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  gridList: {
    width: 800,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
})

const BookCard = () => {
  const classes = useStyles()

  return (
    <ul>
      <GridList cellHeight={160} className={classes.gridList} cols={5}>
        {bookItems.map((el) => (
          <GridListTile key={el.id} className={classes.root}>
            <img src={el.book_cover} alt={el.title} />
            <GridListTileBar
              title={el.title}
              subtitle={
                <span>
                  {el.author} ({el.published_date})
                </span>
              }
              actionIcon={
                <IconButton
                  aria-label={`shopping cart: ${el.title}`}
                  className={classes.icon}
                >
                  <ShoppingCartOutlined />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </ul>
  )
}

export default BookCard

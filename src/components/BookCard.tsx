import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { bookItems } from '../constants/index'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
})

const BookCard = () => {
  const classes = useStyles()

  return (
    <ul>
      {bookItems.map((el) => (
        <Card key={el.id} className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={el.book_cover}
              title='Books'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {el.title}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                <b>Author:</b> {el.author} <br />
                <b>Published Year:</b> {el.published_date} <br />
                <b>Pages:</b> {el.quantity} <br />
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size='small' color='primary'>
              Share
            </Button>
            <Button size='small' color='primary'>
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
    </ul>
  )
}

export default BookCard

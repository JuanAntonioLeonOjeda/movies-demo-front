import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { addFavoriteMovie } from '../../services/moviesService'

export default function MovieCard({info, favorite=false}) {

  const handleClick = () => {
    if (!favorite) {
      addFavoriteMovie(info.id)
    } else {
      // removeFromFavorite(info.id)
    }
  }

  return (
    <Card sx={{ width: '250px', height: '350px', marginRight: '10px' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6195/6195031_so.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { info.title }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {info.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClick}>{favorite ? 'Remove' : 'Add Favorite'}</Button>
      </CardActions>
    </Card>
  );
}
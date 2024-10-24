import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  transform: (props) => (props.expand ? 'rotate(180deg)' : 'rotate(0deg)'),
}));

const EventCard = ({ event }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  
  if (!event) {
    return <Typography variant="body2">Inga evenemang tillgängliga.</Typography>;
  }

  return (
    <Card sx={{ width: 275, height: 600 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="organizer">
            {event.organizerId ? event.organizerId.charAt(0) : 'O'} {/* Här ska istället hämtas orgnisatörens namn */}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={event.title}
        subheader={`Arrangerad av: ${event.organizerId || 'Okänd'}`}
      />
      <CardMedia
        component="img"
        height="194"
        image={`../src/Assets/${event.img || 'pumpkins.jpg'}`}
        alt={event.title}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
          {event.publicDescription}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Plats: {event.location || 'Ingen plats angiven'}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Tid och datum: {event.date ? new Date(event.date).toLocaleString() : 'Ingen tid angiven'}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {event.price > 0 ? `Kostnad: ${event.price} SEK` : 'Kostnad: Gratis'}
        </Typography>
        
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2">
            Anmälan krävs: {event.signUpRequierd ? 'Ja' : 'Nej'}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default EventCard;

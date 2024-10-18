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

  return (
    <Card sx={{ width: 275, height: 600}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="organizer">
            {event.organizer[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={event.title}
        subheader={`Arrangerad av: ${event.organizer}`}
      />
      <CardMedia
        component="img"
        height="194"
        image={`../src/Assets/${event.img}`}
        alt={event.title}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 'bold'}}>
          {event.description}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Plats: {event.place}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Tid och datum: {event.time_and_date}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {event.free_or_not_free === 'not free' 
            ? `Kostnad: ${event.cost} SEK, Betald: ${event.payment_received ? 'Ja' : 'Nej'}` 
            : 'Kostnad: Gratis'}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Max antal deltagare: {event.max_participants}
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
            Anmälan krävs: {event.registration.required === 'true' ? 'Ja' : 'Nej'}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default EventCard;

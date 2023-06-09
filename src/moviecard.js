import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import React from 'react';

const CardInfo = styled(CardContent)(({theme}) => ({
    '&:last-child': {
        paddingBottom: theme.spacing(2),
      }
  }));

const MovieCard = ({ movie }) => {
    return (
        <Card sx={{ maxWidth: 250, position: "relative" }}>
            <Box sx={{ position: 'relative'}}>
                <CardMedia
                    component="img"
                    height="250"
                    image={movie.image}
                    alt={movie.title}/>
            </Box>

            <CardInfo>
                <Typography variant="h6" gutterBottom component="div">
                    {movie.title}
                </Typography>

                <Typography mb={0} variant="subtitle1" gutterBottom component="div">
                    {movie.releaseDate}
                </Typography>
            </CardInfo>
        </Card>
    )
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        releaseDate: PropTypes.string
    }).isRequired,
}

export default MovieCard;
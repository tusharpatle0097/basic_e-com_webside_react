
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import { useState } from 'react';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const ProductMainPage = ({ data, filtermydata }) => {

    console.log(filtermydata, "kkiikkii")


    console.log(data)


    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <Grid container spacing={2}>

                {
                    filtermydata.map((items) => {
                        return (
                            <Grid item xs={12} lg={3} md={6} sm={6}>
                                <Card sx={{ maxWidth: 345 }}>

                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={items.image}
                                        alt="Paella dish"
                                    />
                                    <CardContent>
                                        <h4 className="text-truncate" style={{ maxWidth: "20rem" }}>{items.title}</h4>
                                    </CardContent>
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            <div className="text-truncate" style={{ maxWidth: "30rem" }}>{items.description}</div>
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
                                            <Typography paragraph>Method:</Typography>

                                        </CardContent>
                                    </Collapse>
                                </Card>
                            </Grid>
                        )
                    })
                }

            </Grid>
        </>
    )
}

export default ProductMainPage
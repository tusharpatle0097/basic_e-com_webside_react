
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import SideBar from '../pages/SideBar'
import { useContext } from 'react';
import { contextData } from '../context/ContextStore';
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const ProductMainPage = () => {


    const { filtermydata } = useContext(contextData);


    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    }));

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <SideBar />
                <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
                    <DrawerHeader />
                    <Typography>
                    </Typography>
                    <Grid container spacing={2}>
                        {
                            filtermydata.map((items, index) => {
                                return (
                                    <Grid item xs={12} lg={3} md={6} sm={6} key={index}>
                                        <Card sx={{ maxWidth: 345 }}>

                                            <CardMedia
                                                component="img"
                                                height="194"
                                                image={items.images[0]}
                                                alt="Paella dish"
                                            />
                                            <CardContent>
                                                <h4 className="text-truncate" style={{ maxWidth: "20rem" }}>
                                                    {items.title}
                                                </h4>
                                            </CardContent>
                                            <CardContent>
                                                <Typography variant="body2" color="text.secondary">
                                                    <div className="text-truncate" style={{ maxWidth: "30rem" }}>
                                                        {items.description}
                                                    </div>
                                                </Typography>
                                            </CardContent>
                                            <CardActions disableSpacing>
                                                <IconButton aria-label="add to favorites">
                                                    <FavoriteIcon />
                                                </IconButton>
                                                <div className='d-flex gap-2'>
                                                    <Button variant="contained" color="success" >Add to cart</Button>
                                                    <Link to={'/product-details/' + items.id}> <Button variant="outlined" color="error" > Details</Button></Link>
                                                </div>
                                            </CardActions>

                                        </Card>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                    <Stack spacing={2} className='mt-4 float-right'>
                        <Pagination count={10}
                            color="primary"
                        />
                    </Stack>
                </Box>
            </Box>
        </>
    )
}

export default ProductMainPage
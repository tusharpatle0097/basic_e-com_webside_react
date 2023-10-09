import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import SideBar from '../pages/SideBar'
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ProductMainPage = () => {

    const [ApiData, setApiData] = useState({})

    const params = useParams()

    useEffect(() => {
        getData2()
    }, [])

    const getData2 = (id) => {
        axios.get(`https://dummyjson.com/products/${params.id}`)
            .then(res => {
                console.log(res.data, "lllkjj");
                setApiData(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

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
                    <section className="pt-5 pb-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-6">
                                    <h3 className="mb-3">Some Images </h3>
                                </div>
                                <div className="col-6 text-right">
                                    <a className="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                                        <ArrowBackIcon />
                                    </a>
                                    <a className="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                                        <ArrowForwardIcon />
                                    </a>
                                </div>
                                <div className="col-12">
                                    <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">

                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <div className="row">

                                                    <div className="col-md-4 mb-3">
                                                        <div className="card">
                                                            <img className="img-fluid" alt="100%x280" src={ApiData.images && ApiData.images[0] ? ApiData.images[0] : ""} />
                                                            <div className="card-body">
                                

                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-3">
                                                        <div className="card">
                                                            <img className="img-fluid" alt="100%x280" src={ApiData.images && ApiData.images[1] ? ApiData.images[1] : ""} />
                                                            <div className="card-body">
                                                                

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-3">
                                                        <div className="card">
                                                            <img className="img-fluid" alt="100%x280" src={ApiData.images && ApiData.images[2] ? ApiData.images[2] : ""} />
                                                            <div className="card-body">
                                                                

                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                           
                                        
                                            <div className="carousel-item">
                                                    <div className="col-md-4 mb-3">
                                                        <div className="card">
                                                            <img className="img-fluid" alt="100%x280" src={ApiData.images && ApiData.images[3] ? ApiData.images[3] : ""} />
                                                            <div className="card-body">
                                                                
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Box>
            </Box>
        </>
    )
}

export default ProductMainPage
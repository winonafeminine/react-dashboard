import React from 'react';
import Grid from '@mui/material/Grid';
import ProductCard from './ProductCard';
import Box from '@mui/material/Box';

function Products() {
    const cats = [
        {
            name: "Ganster cat",
            src: "https://static.independent.co.uk/2021/06/16/08/newFile-4.jpg?width=982&height=726&auto=webp&quality=75",
            price: 230,
            salePrice: 200,
            des: "This is cat is a son of superman but it can only mew when hungry"
        },
        {
            name: "Sleepy cat",
            src: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg",
            price: 230,
            salePrice: 200,
            des: "This is cat is a son of superman but it can only mew when hungry"
        },
        {
            name: "Curious cat",
            src: "https://images.ctfassets.net/cnu0m8re1exe/1GxSYi0mQSp9xJ5svaWkVO/d151a93af61918c234c3049e0d6393e1/93347270_cat-1151519_1280.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill",
            price: 230,
            salePrice: 200,
            des: "This is cat is a son of superman but it can only mew when hungry"
        },
        {
            name: "Stare cat",
            src: "https://i.guim.co.uk/img/media/c9b0aad22638133aa06cd68347bed2390b555e63/0_477_2945_1767/master/2945.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=97bf92d90f51da7067d00f8156512925",
            price: 230,
            salePrice: 200,
            des: "This is cat is a son of superman but it can only mew when hungry"
        },
    ]
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Box sx={{
                width: '80%'
            }}>
                <Grid container spacing={2} sx={{
                    margin: '20px 0 0 0'
                }}>
                    {cats.map((value, ind) => (
                        <Grid item xl={3} lg={4} sm={6} xs={12} key={ind}>
                            <ProductCard 
                                name={value.name}
                                imageSrc={value.src}
                                description={value.des}
                                price={value.price}
                                salePrice={value.salePrice}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}

export default Products
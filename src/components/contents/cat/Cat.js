import React from 'react';
import Grid from '@mui/material/Grid';
import CatCard from './CatCard';
import Box from '@mui/material/Box';
import CatDialog from './CatDialog';
import {useNavigate} from 'react-router-dom';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import { catTheme } from '../../UIs/theme/catTheme';
import Grow from '@mui/material/Grow';

function Products() {
    const [catValue, setCatValue] = React.useState({
        name: "",
        src: "",
        price: 0,
        salePrice: 0,
        des: ""
    });
    const navigate = useNavigate();

    const [dialogOpen, setDialogOpen] = React.useState(false);

    const cats = [
        {
            name: "Ganster cat",
            src: "https://static.independent.co.uk/2021/06/16/08/newFile-4.jpg?width=982&height=726&auto=webp&quality=75",
            price: 230,
            salePrice: 200,
            des: "ก่าดฟหสกด่สฟห่กดสฟาห่กดสาฟ่หสกดา่ฟสหาก่ดสฟหาก่ดสฟาหก่ดสาฟห่กสาด่",
            gallery: [
                "https://static.independent.co.uk/2021/06/16/08/newFile-4.jpg?width=982&height=726&auto=webp&quality=75",
                "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg",
                "https://images.ctfassets.net/cnu0m8re1exe/1GxSYi0mQSp9xJ5svaWkVO/d151a93af61918c234c3049e0d6393e1/93347270_cat-1151519_1280.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill",

            ]
        },
        {
            name: "Sleepy cat",
            src: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg",
            price: 230,
            salePrice: 200,
            des: "This is cat is a son of superman but it can only mew when hungry",
            gallery: [
                "https://static.independent.co.uk/2021/06/16/08/newFile-4.jpg?width=982&height=726&auto=webp&quality=75",
                "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg",
                "https://images.ctfassets.net/cnu0m8re1exe/1GxSYi0mQSp9xJ5svaWkVO/d151a93af61918c234c3049e0d6393e1/93347270_cat-1151519_1280.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill",

            ]
        },
        {
            name: "Curious cat",
            src: "https://images.ctfassets.net/cnu0m8re1exe/1GxSYi0mQSp9xJ5svaWkVO/d151a93af61918c234c3049e0d6393e1/93347270_cat-1151519_1280.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill",
            price: 230,
            salePrice: 200,
            des: "This is cat is a son of superman but it can only mew when hungry",
            gallery: [
                "https://static.independent.co.uk/2021/06/16/08/newFile-4.jpg?width=982&height=726&auto=webp&quality=75",
                "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg",
                "https://images.ctfassets.net/cnu0m8re1exe/1GxSYi0mQSp9xJ5svaWkVO/d151a93af61918c234c3049e0d6393e1/93347270_cat-1151519_1280.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill",

            ]
        },
        {
            name: "Stare cat",
            src: "https://i.guim.co.uk/img/media/c9b0aad22638133aa06cd68347bed2390b555e63/0_477_2945_1767/master/2945.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=97bf92d90f51da7067d00f8156512925",
            price: 230,
            salePrice: 200,
            des: "This is cat is a son of superman but it can only mew when hungry",
            gallery: [
                "https://static.independent.co.uk/2021/06/16/08/newFile-4.jpg?width=982&height=726&auto=webp&quality=75",
                "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg",
                "https://images.ctfassets.net/cnu0m8re1exe/1GxSYi0mQSp9xJ5svaWkVO/d151a93af61918c234c3049e0d6393e1/93347270_cat-1151519_1280.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill",

            ]
        },
    ];


    const handleImgClicked = (value) => {
        setCatValue(value);
        setDialogOpen(true)
    }

    const handleViewDetailClick = (value) => {
        // const catname = 'catname';
        // const catsrc = 'catsrc';
        // const catprice = 'catprice';
        // const catsaleprice = 'catsaleprice';
        // const catdes = 'catdes';

        // save to localstorage/coookies
        const catdetail = 'catdetail';
        // convert to string
        const str_value = JSON.stringify(value);
        localStorage.setItem(catdetail, str_value);
        navigate('/cats/detail')
    }

    return (
        <ThemeProvider theme={catTheme}>
            <CssBaseline/>
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
                        {cats.map((value, ind) => ( // index start from 0
                            <Grow in={true} timeout={{
                                enter: 1000 + ((ind+1) -1)*300
                            }}>
                                <Grid item xl={3} lg={4} sm={6} xs={12} key={ind}>
                                    <CatCard 
                                        name={value.name}
                                        imageSrc={value.src}
                                        description={value.des}
                                        price={value.price}
                                        salePrice={value.salePrice}
                                        onImgClick={() => handleImgClicked(value)}
                                        onViewDetailClick={() => handleViewDetailClick(value)}
                                        gallery={value.gallery}
                                        
                                    />
                                </Grid>
                            </Grow>
                        ))}
                    </Grid>
                </Box>
                <CatDialog open={dialogOpen} setOpen={setDialogOpen} value={catValue}/>
            </Box>
        </ThemeProvider>
    )
}

export default Products
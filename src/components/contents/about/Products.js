import React from 'react';
import './Detail.css'
import Grid from '@mui/material/Grid';
import ProductCard from './ProductCard';
import Box from '@mui/material/Box';
import ProductDialog from './ProductDialog';
// import {useNavigate} from 'react-router-dom';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import { clotTheme } from '../../UIs/theme/clotTheme';
import Box1 from './Box'

function Products() {

    const [catValue, setCatValue] = React.useState({
        name: "",
        src: "",
        price: 0,
        salePrice: 0,
        des: ""
    });
    // const navigate = useNavigate();

    const [dialogOpen, setDialogOpen] = React.useState(false);

    const cats = [
        {
            name: "SNDMDNS",
            src: "https://th-live-05.slatic.net/p/ddd16792237425a7a99acfbd2c42d3e0.jpg_720x720q80.jpg_.webp",
            price: "Shirt",
            price1: 200,
            des: "เสื้อผ้าแฟชั่นผู้ชาย เสื้อยืดคอกลม ใส่สบาย สไตล์เกาหลี"
        },
        {
            name: "TIDE CUILD",
            src: "https://th-live-05.slatic.net/p/363c0941ce340f42975fc53e94bfbf94.jpg_720x720q80.jpg_.webp",
            price: "TATE",
            price1: 300,
            des: "เสื้อผู้ชายแขนสั้นมีฮู้ด เสื้อแฟชั่นผู้ชาย สไตล์เกาหลี"
        },
        {
            name: "MEN Short Sleeve",
            src: "https://th-live-05.slatic.net/p/5b15af55a0b3f65a3e038a8f787d43d4.jpg_720x720q80.jpg_.webp",
            price: "T-Shirt",
            price1: 400,
            des: "เสื้อผ้าแฟชั่นผู้ชาย เสื้อยืดคอกลมแขนสั้นผู้ชาย สไตล์เกาหลี"
        },
    ];

    const handleImgClicked = (value) => {
        setCatValue(value);
        setDialogOpen(true)
    }

    return (
        <ThemeProvider theme={clotTheme}>
        <CssBaseline/>
        <Box sx={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Box sx={{
                width: '80%'
            }}>
                <Grid container spacing={2} sx={{
                    // margin: '10px 0 0 0',
                    justifyContent: 'center'
                }}>
                    {cats.map((value, ind) => (
                        <Grid item xl={3} lg={4} sm={6} xs={12} key={ind}>
                            <ProductCard 
                                name={value.name}
                                imageSrc={value.src}
                                description={value.des}
                                price={value.price}
                                price1={value.price1}
                                onImgClick={() => handleImgClicked(value)}
                           />
                        </Grid>
                    ))}
                </Grid>
            </Box>   
            <ProductDialog open={dialogOpen} setOpen={setDialogOpen} value={catValue}/>
        </Box>  
        <div className="flex2"><Box1/></div>
        </ThemeProvider>
    )
}

export default Products;
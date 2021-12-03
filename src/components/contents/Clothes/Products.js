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
import Zoom from '@mui/material/Zoom';

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
            des: "เสื้อผ้าแฟชั่นผู้ชาย เสื้อยืดคอกลม ใส่สบาย สไตล์เกาหลี",
            gallery:["https://th-live-05.slatic.net/p/ddd16792237425a7a99acfbd2c42d3e0.jpg_720x720q80.jpg_.webp",
                    "https://th-live-05.slatic.net/p/5d1268ebeea7d3416ee4bbc945abd12e.png_720x720q80.jpg_.webp",
                    "https://th-live-05.slatic.net/p/244a31c3498779fa030ba9556cc1bffa.jpg_2200x2200q80.jpg_.webp",
        ]
        },
        {
            name: "TIDE CUILD",
            src: "https://th-live-05.slatic.net/p/363c0941ce340f42975fc53e94bfbf94.jpg_720x720q80.jpg_.webp",
            price: "TATE",
            price1: 300,
            des: "เสื้อผู้ชายแขนสั้นมีฮู้ด เสื้อแฟชั่นผู้ชาย สไตล์เกาหลี",
            gallery:[ "https://th-live-05.slatic.net/p/363c0941ce340f42975fc53e94bfbf94.jpg_720x720q80.jpg_.webp",
                      "https://th-live-05.slatic.net/p/e11f9bedbc5d461b5784acccbe5d3749.jpg_720x720q80.jpg_.webp",
                      "https://cf.shopee.co.th/file/678d0b48f6095b01f7f11fb4d5021d40", 
        ]             
        },
        {
            name: "MEN Short Sleeve",
            src: "https://th-live-05.slatic.net/p/5b15af55a0b3f65a3e038a8f787d43d4.jpg_720x720q80.jpg_.webp",
            price: "T-Shirt",
            price1: 400,
            des: "เสื้อผ้าแฟชั่นผู้ชาย เสื้อยืดคอกลมแขนสั้นผู้ชาย สไตล์เกาหลี",
            gallery:["https://th-live-05.slatic.net/p/5b15af55a0b3f65a3e038a8f787d43d4.jpg_720x720q80.jpg_.webp",
                     "https://cf.shopee.co.th/file/ea305334ca67471f4c8b64608c412cbc",
                     "https://cf.shopee.co.th/file/85c4611800b7f75acea16917333c8fa6"
        ]     
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
                width: '80%',
                cursor: 'pointer'
            }}>
                <Grid container spacing={2} sx={{
                    // margin: '10px 0 0 0',
                    justifyContent: 'center'
                }}>
                    {cats.map((value, ind) => (
                      <Zoom in={true} timeout={{
                        enter: 1000 + ((ind+1) -1)*300
                    }}> 
                        <Grid item xl={3} lg={4} sm={6} xs={12} key={ind}>
                            <ProductCard 
                                name={value.name}
                                imageSrc={value.src}
                                description={value.des}
                                price={value.price}
                                price1={value.price1}
                                onImgClick={() => handleImgClicked(value)}
                                gallery={value.gallery}
                           />
                        </Grid>
                    </Zoom>
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
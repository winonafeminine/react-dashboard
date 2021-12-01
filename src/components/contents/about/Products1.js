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
import Box1 from './Box';
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
            name: "Trousers",
            src: "https://cf.shopee.co.th/file/dde145e08f59501438abde51aef85a52",
            price: "Tatum",
            price1: 200,
            des: "กางเกงแฟชั่นผู้ชาย เอวยืดเชือกผูก กระเป๋ามีซิป ใส่สบาย สไตล์เกาหลี",
            gallery:["https://cf.shopee.co.th/file/dde145e08f59501438abde51aef85a52",
                     "https://img.kaidee.com/prd/20200808/357680187/m/98a0fa29-4b8e-4ba7-bd06-f98c96e76f11.jpg",
                     "https://cf.shopee.co.th/file/1756ffb62733f22aabe88646fe648006"
]     
        },
        {
            name: "MEN Short",
            src: "https://img.kaidee.com/prd/20200808/357680187/m/98a0fa29-4b8e-4ba7-bd06-f98c96e76f11.jpg",
            price: "Walnuts",
            price1: 300,
            des: "กางเกงแฟชั่น-กางเกงขาจั้ม-กางเกงผู้ชาย แฟชั่นผู้ชาย กางเกงขายาว กางเกงจ็อกเกอร์",
            gallery:["https://cf.shopee.co.th/file/dde145e08f59501438abde51aef85a52",
            "https://img.kaidee.com/prd/20200808/357680187/m/98a0fa29-4b8e-4ba7-bd06-f98c96e76f11.jpg",
            "https://cf.shopee.co.th/file/1756ffb62733f22aabe88646fe648006"
]     
        },
        {
            name: "CGW",
            src: "https://cf.shopee.co.th/file/1756ffb62733f22aabe88646fe648006",
            price: "CGW-1376",
            price1: 400,
            des: "⚡ Ag ⚡กางเกงลำลองผู้ชายกางเกงแฟชั่นผู้ชาย สีดำ กางเกงรัดรูปผู้ชายผ้ายืดสไตล์เกาหลี",
            gallery:["https://cf.shopee.co.th/file/dde145e08f59501438abde51aef85a52",
            "https://img.kaidee.com/prd/20200808/357680187/m/98a0fa29-4b8e-4ba7-bd06-f98c96e76f11.jpg",
            "https://cf.shopee.co.th/file/1756ffb62733f22aabe88646fe648006"
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
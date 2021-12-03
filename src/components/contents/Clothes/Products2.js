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
            name: "Otello",
            src: "https://www.otellothailand.com/wp-content/uploads/2019/03/1_6.jpg",
            price: "Oxford",
            price1: 200,
            des: " รองเท้าหนังวัวแท้ทรง Oxford 102-สีน้ำตาลเข้ม #น้ำตาลเข้ม",
            gallery:["https://www.otellothailand.com/wp-content/uploads/2019/03/1_6.jpg",
                     "https://cf.shopee.co.th/file/9a8b335e39c1977c6a692edad57797cb",
                     "http://ca.lnwfile.com/fhwix7.jpg"
]     
        },
        {
            name: "TIDE CUIStep",
            src: "https://cf.shopee.co.th/file/9a8b335e39c1977c6a692edad57797cb",
            price: "Shoes-911LD",
            price1: 300,
            des: "รองเท้าหนังแท้ผู้ชาย หุ้มส้น แบบผูกเชือก หนังออยล์ สีน้ำตาล",
            gallery:["https://www.otellothailand.com/wp-content/uploads/2019/03/1_6.jpg",
                     "https://cf.shopee.co.th/file/9a8b335e39c1977c6a692edad57797cb",
                     "http://ca.lnwfile.com/fhwix7.jpg"
]     
        },
        {
            name: "Shoes StepPro",
            src: "http://ca.lnwfile.com/fhwix7.jpg",
            price: "Boots-939",
            price1: 400,
            des: "รองเท้าหนังแท้ นูบัค บูทหุ้มข้อ ชนิดหนา 3mm รุ่น Boots Code 939",
            gallery:["https://www.otellothailand.com/wp-content/uploads/2019/03/1_6.jpg",
                     "https://cf.shopee.co.th/file/9a8b335e39c1977c6a692edad57797cb",
                     "http://ca.lnwfile.com/fhwix7.jpg"
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
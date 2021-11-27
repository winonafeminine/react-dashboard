import React from 'react';
import Grid from '@mui/material/Grid';
import ProductCard from './ProductCard';
import Box from '@mui/material/Box';
import ProductDialog from './ProductDialog';

function Products() {

    const [catValue, setCatValue] = React.useState({
        name: "",
        src: "",
        price: 0,
        salePrice: 0,
        des: ""
    });

    const [dialogOpen, setDialogOpen] = React.useState(false);

    const cats = [
        {
            name: "สินค้า",
            src: "https://cf.shopee.co.th/file/3638fe305720c8678d8d38f7cd097d88",
            price: "Product",
            price1: "#สบู่กลิ่นหอม",
            des: "รีวิวสบู่ในตำนาน ยอดสินค้าขายดีมากตลอดกาล #วิโนน่า ด้วยเสียงตอบรับจากผู้ใช้จริง รีวิวจริง แบบไม่จกตา"
        },
        {
            name: "เปิดตัวสินค้า",
            src: "https://scontent.fhdy2-1.fna.fbcdn.net/v/t39.30808-6/248722096_3977404445693289_1150480416032340103_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeE8n6fD6CsYLguwQWQ-etg9UPnhr1GrGbBQ-eGvUasZsCeXQ8uuodfYt04wmPsBo-O3HrQGVj56pywnOZCKB0oc&_nc_ohc=MxOAZaPnGrMAX_6y5q6&_nc_zt=23&_nc_ht=scontent.fhdy2-1.fna&oh=64f1cf283791e81c693a3869beb375c3&oe=61A5BD38",
            price: "Winona",
            price1: "#เเถลงข่าว",
            des: "ขอบคุณอีกครั้งสำหรับวิสัยทัศน์ของทุกคน ที่เห็นทะลุ challenge ของวิโนน่าและสนับสนุนเรา #สินค้าที่ทุกคนยอมรับ"
        },
        {
            name: "ตัวเเทนเเบรนด์จำหน่าย",
            src: "https://scontent.fhdy2-1.fna.fbcdn.net/v/t39.30808-6/246135656_1031482697607174_65625029330862834_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGBO45Z7WYlytDAWzTCWL42mv7miguD4cSa_uaKC4PhxEPRu1dmWrXWP5bv7Jdi0QnuaNT0qoIeiXJKrqnsZZLe&_nc_ohc=dKFmeVI_Zy0AX-vMKJ-&_nc_zt=23&_nc_ht=scontent.fhdy2-1.fna&oh=5bff64d967af1377fcfc9aa2ee0b5331&oe=61A56CA4",
            price: "By Presenter",
            price1: "#จำหน่ายทั่วประเทศ",
            des: "ปักหมุดรอสารสกัดหลักตัวต่อไปกันจ้า วันนี้ตัวที่ 4 ละน้าา บอกเลยไม่ธรรมดา💦‼️ #vinolasoap #vinolathailand #สบู่วิโนน่า #ทีมแม็กซ์วชิ"
        },
    ];

    const handleImgClicked = (value) => {
        setCatValue(value);
        setDialogOpen(true)
    }

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Box sx={{
                width: '80%'
            }}>
                <Grid container spacing={2} sx={{
                    margin: '10px 0 0 0'
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
    )
}

export default Products;
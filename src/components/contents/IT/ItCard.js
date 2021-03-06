import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ItDialog from './ItDialog';
import {useNavigate} from 'react-router-dom';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import { itTheme } from '../../UIs/theme/itTheme';
import ItCardDetail from './ItCardDetail';
import { Grow } from '@mui/material';

function ItCard() {
    const [ItValue, setItValue] = React.useState({
        name: "",
        src: "",
        price: 0,
        salePrice: 0,
        des: ""
    });
    const navigate = useNavigate();

    const [dialogOpen, setDialogOpen] = React.useState(false);

    const ITs = [
        {
            name: "MSI GL63 8RE-458TH",
            src: "https://notebookspec.com/nbs/upload_notebook/20180709-103800_c.jpg",
            price: 230,
            salePrice: 200,
            amount: [],
            des: "CPU Intel Core i5-8300H (2.30 GHz, 8 MB L3 Cache, up to 4.00 GHz), GPU NVIDIA GeForce GTX 1060 (6GB GDDR5), Resolution 15.6 inch (1920x1080) Full HD IPS,Memory Size 8 GB DDR4, Hard Disk Drive 1 TB 5400 RPM, Wireless LAN 802.11ac+Bluetooth 5.0, OS Bundle Windows 10 Home (64 Bit)",
            ITGallery: ["https://notebookspec.com/nbs/upload_notebook/20180709-103800_c.jpg",
                        "https://notebookspec.com/web/notebook-picture/MSI/GL63%208RE/GL63%208RE-bk.jpg",
                        "https://notebookspec.com/web/notebook-picture/MSI/GL63%208RE/GL63%208RE-f.jpg",
                        "https://notebookspec.com/web/notebook-picture/MSI/GL63%208RE/GL63%208RE-l.jpg"           
        ]
        },
        {
            name: "Lenovo IdeaPad Gaming 3 15IHU6-82K100DFTA",
            src: "https://notebookspec.com/nbs/upload_notebook/20210822-083821_c.jpg",
            price: 230,
            salePrice: 200,
            amount: [],
            des: "CPU Intel Core i5-11300H (3.10 GHz, 8 MB L3 Cache up to 4.40 Ghz), GPU NVIDIA GeForce RTX 3050 (4GB GDDR6), Resolution 15.6 inch (1920x1080) Full HD, Refresh Rate 120 Hz, Memory Size 16 GB DDR4, 512 GB SSD PCIe M.2, Wireless LAN 802.11 ax (Wi-Fi 6), Windows 10 Home (64 Bit)",
            ITGallery: ["https://notebookspec.com/web/notebook-picture/Lenovo/Ideapad%20gaming%2015ihu6/Ideapad%20gaming%2015ihu6-l.jpg",
                        "https://notebookspec.com/nbs/upload_notebook/20210822-083821_c.jpg",
                        "https://notebookspec.com/web/notebook-picture/Lenovo/Ideapad%20gaming%2015ihu6/Ideapad%20gaming%2015ihu6-bk.jpg",
                        "https://notebookspec.com/web/notebook-picture/Lenovo/Ideapad%20gaming%2015ihu6/Ideapad%20gaming%2015ihu6-bo.jpg"
                        ]
        },
        {
            name: "Asus TUF Gaming A15 FA506IC-HN011W",
            src: "https://notebookspec.com/nbs/upload_notebook/20210130-124639_c.jpg",
            price: 230,
            salePrice: 200,
            amount: [],
            des: "CPU AMD Ryzen 7 4800H (2.90 GHz up to 4.20 GHz, 8 MB L3 Cache), GPU NVIDIA GeForce RTX 3050 (4GB GDDR6), Resolution 15.6 inch (1920x1080) Full HD, Memory Size 8 GB DDR4, 512 GB SSD PCIe M.2, Wireless LAN 802.11ax (Wi-Fi 6), Bluetooth Bluetooth 5.1, Windows 11 Home (64 Bit)",
            ITGallery: ["https://notebookspec.com/nbs/upload_notebook/20210130-124639_c.jpg",
                        "https://notebookspec.com/web/notebook-picture/Asus/TUF%20Gaming%20A17%202021/TUF%20Gaming%20A17%202021-bk.jpg",
                        "https://notebookspec.com/web/notebook-picture/Asus/TUF%20Gaming%20A17%202021/TUF%20Gaming%20A17%202021-bo.jpg",
                        "https://notebookspec.com/web/notebook-picture/Asus/TUF%20Gaming%20A17%202021/TUF%20Gaming%20A17%202021-f.jpg"
                        ]
        },
        {
            name: "DELL G5 15 5590-W5660151621DPTHW10 Black",
            src: "https://notebookspec.com/web/notebook-picture/DELL/G5%2015%20Black/G5%2015%20Black-c.jpg",
            
            price: 230,
            salePrice: 200,
            amount: [],
            des: "CPU Intel Core i5-9300H (2.40 GHz, 8 MB L3 Cache, up to 4.10 GHz), GPU NVIDIA GeForce GTX 1650 (4GB GDDR5), Resolution 15.6 inch (1920x1080) Full HD IPS, Memory Size 8 GB DDR4, Hard Disk Drive 1 TB 5400 RPM, 128 GB SSD PCIe M.2, Wireless LAN 802.11ac, Bluetooth 5.0, Windows 10 Home (64 Bit)",
            ITGallery: ["https://notebookspec.com/web/notebook-picture/DELL/G5%2015%20Black/G5%2015%20Black-c.jpg",
                        "https://notebookspec.com/web/notebook-picture/DELL/G5%2015%20Black/G5%2015%20Black-bk.jpg",
                        "https://notebookspec.com/web/notebook-picture/DELL/G5%2015%20Black/G5%2015%20Black-l.jpg",
                        "https://notebookspec.com/web/notebook-picture/DELL/G5%2015%20Black/G5%2015%20Black-r.jpg"
                        ]
        },
        {
            name: "HP Pavilion Gaming 15-dk0149tx",
            src: "https://notebookspec.com/nbs/upload_notebook/20180605-232206_c.jpg",
            price: 230,
            salePrice: 200,
            amount: [],
            des: "CPU Intel Core i5-9300H (2.40 GHz, GPU NVIDIA GeForce GTX 1660 Ti (6GB GDDR6), Resolution 15.6 inch (1920x1080) Full HD IPS, Memory Size 8 GB DDR4, Hard Disk Drive 1 TB 7200 RPM, Wireless LAN Intel Wireless-AC 9560, Bluetooth Bluetooth 5.0, Windows 10 Home (64 Bit)",
            ITGallery: ["https://notebookspec.com/nbs/upload_notebook/20180605-232206_c.jpg",
                        "https://notebookspec.com/web/notebook-picture/HP/Pavilion%20Gaming%20Green/Pavilion%20Gaming%20Green-bk.jpg",
                        "https://notebookspec.com/web/notebook-picture/HP/Pavilion%20Gaming%20Green/Pavilion%20Gaming%20Green-l.jpg",
                        "https://notebookspec.com/web/notebook-picture/HP/Pavilion%20Gaming%20Green/Pavilion%20Gaming%20Green-r.jpg"
                        
                    ]
        },
    ];
    const handleImgClicked = (value) => {
        setItValue(value);
        setDialogOpen(true);
        
    }
    const handleViewDetailClick = (value) => {
        // save to localstorage/coookies
        const itdetail = 'itdetail';
        // convert to string
        const str_value = JSON.stringify(value);
        localStorage.setItem(itdetail, str_value);
        localStorage.setItem(itdetail, str_value);
        navigate('/it/detail');
    }
    
    return (
        <ThemeProvider theme={itTheme}>
            <CssBaseline/>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                margin: '30px 0 0 0',
            }}>
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                }}>
                    <Grid container spacing={2}>
                        {ITs.map((value, ind) => (
                            <Grow in={true} timeout={{
                                enter: 1000 + ((ind + 1) - 1)*300
                            }} key={value.name}>
                                <Grid item xl={3} lg={4} sm={6} xs={12} key={ind} sx={{padding: '0px'}}>
                                    <Box sx={{
                                        padding: '5px 0 0 0',
                                    }}>
                                        <ItCardDetail 
                                        name={value.name}
                                        imageSrc={value.src}
                                        description={value.des}
                                        price={value.price}
                                        salePrice={value.salePrice}
                                        onImgClick={() => handleImgClicked(value)}
                                        onViewDetailClick={() => handleViewDetailClick(value)}
                                        ITGallery={value.ITGallery}
                                    />
                                    </Box>
                                </Grid>
                            </Grow>
                        ))}
                    </Grid>
                </Box>
                <ItDialog open={dialogOpen} setOpen={setDialogOpen} value={ItValue}/>
            </Box>
        </ThemeProvider>
    )
}
export default ItCard
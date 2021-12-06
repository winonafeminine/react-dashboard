import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import styled from '@mui/material/styles/styled';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import CatCartDrawer from './CatCartDrawer';

// icons
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledPaper = styled(Paper)
    (({theme}) => ({
        borderRadius: '12px',
        padding: '12px',
        width: '70%'
    }));

function CatDetail() {
    const [localData, setLocalData] = React.useState([]);
    const [clicked, setClicked] = React.useState(false);
    const [openCatDrawer, setOpenCatDrawer] = React.useState(false);

    const catCartKey = 'catCartKey';

    const [amount, setAmount] = React.useState(0)
    const catdetail = 'catdetail';
    // convert to object
    const strdata = localStorage.getItem(catdetail);
    // raw data
    let data = JSON.parse(strdata);
    // console.log(data);

    React.useEffect(() => {
        const catCartStr = localStorage.getItem(catCartKey);
        const catCart = JSON.parse(catCartStr);
        if(!localData.includes(data))
        {
            if(catCart !== null)
            {
                setLocalData(catCart);
            }
            // console.log(localData);
            return
        }
        // console.log(localData)
        //eslint-disable-next-line
    }, [clicked]);

    const [catImg, setCatImg] = React.useState(data.src);

    const handleCatImgClick = (e, src) => {
        setCatImg(src)
    }
    const handleAddClick = (index) => {
        // const catCartKey = ''
        const catCartStr = localStorage.getItem(catCartKey);
        setAmount(amount + 1);
        if(catCartStr === null){return}

        // not null
        let catCart = JSON.parse(catCartStr);
        catCart.map((value, ind) => {
            if(value.name === data.name)
            {
                value['amount'] = amount + 1;
            }
            return value;
        });
        catCart = JSON.stringify(catCart);
        // console.log()
        localStorage.setItem(catCartKey, catCart);
    }

    const handleRemoveClick = (e) => {
        if(amount === 0)
        {
            // break
            return;
        }
        setAmount(amount - 1);
    }

    const handleAddToCart = (e) => {
        setClicked(!clicked);
        let catCart = JSON.parse(localStorage.getItem(catCartKey));
        let catCartStr = JSON.stringify(catCart);
        if(catCart === null)
        {
            catCart = [];
            data['amount'] = amount;
            catCart.push(data);
            catCartStr = JSON.stringify(catCart);
            localStorage.setItem(catCartKey, catCartStr);
            return;
        }

        let exist = false;
        catCart.map((value) => {
            if(value.name === data.name)
            {
                exist = true;
            }
            return value;
        });

        if(exist){
            return;
        }
            
        // catCart.push(data);

        catCart.push(data);
        catCartStr = JSON.stringify(catCart);
        localStorage.setItem(catCartKey, catCartStr);
    }

    // open or close catCartDrawer
    const handleOpenCatCartDrawer = () => {
        setOpenCatDrawer(true);
    }
    // console.log(catImg);
    return (
        <React.Fragment>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <StyledPaper>
                    {/* container */}
                    <Box sx={{
                        '&.MuiBox-root': {
                            flexGrow: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            position: 'relative',
                            height: '90vh'
                        }
                    }}>
                        {/* wrapper */}
                        <Box sx={{
                        '&.MuiBox-root': {
                            width: '80%'
                        }
                    }}>
                        <Badge color="primary" badgeContent={localData === null ? 0 : localData.length} sx={{
                                position: 'absolute',
                                bottom: 1,
                                right: 1,
                            }}>
                            <IconButton color="primary" onClick={handleOpenCatCartDrawer}>
                                <ShoppingCartIcon
                                    sx={{
                                        width: '35px',
                                        height: '35px'
                                    }}
                                />
                            </IconButton>
                        </Badge>
                        <Box sx={{
                            display: 'flex'
                        }}>
                            <Box sx={{
                                '&.MuiBox-root': theme => ({
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    '& img.catImg' : {
                                        width: '500px',
                                        height: '400px',
                                        borderRadius: '6px'
                                    }
                                })
                            }}>
                                <img className="catImg" src={catImg} alt=""/>
                                <Box sx={{
                                    '&.MuiBox-root': {
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        margin: '6px 0 0 0',
                                        '& .gallery': {
                                            width: '75px',
                                            height: '75px',
                                            borderRadius: '12px',
                                            margin: '0 3px',
                                            cursor: 'pointer'
                                        }
                                    }
                                }}>
                                    {
                                        data.gallery.map(value => (
                                            <Button key={value}>
                                                <img className="gallery" src={value} alt=""
                                                    onClick={(e) => handleCatImgClick(e, value)}
                                                />
                                            </Button>
                                        ))
                                    }
                                </Box>
                            </Box>
                            <Box sx={{
                                '&.MuiBox-root': {
                                    margin: '0 0 0 12px'
                                }
                            }}>
                                <Box sx={{
                                    display: 'flex'
                                }}>
                                    <Typography sx={{
                                        margin: '0 0 6px 0'
                                    }} variant="h5">{data.name}</Typography>
                                    <Chip color="primary" sx={{
                                        margin: '0 0 0 6px',
                                    }} label="New" />
                                </Box>
                                <Typography sx={{
                                    margin: '0 0 6px 0  '
                                }}>
                                    {data.des}
                                </Typography>
                                <Rating value={5} />
                                <Box sx={{
                                    display: 'flex'
                                }}>
                                    <Typography >{`฿${data.salePrice}`}</Typography>
                                    <Typography sx={{
                                        // margin: '0 0 0 6px',
                                        textDecoration: 'line-through'
                                    }}>{ `฿${data.price}`}</Typography>
                                </Box>
                                <ButtonGroup sx={{
                                    margin: '6px 0 0 0'
                                }}>
                                    <Button onClick={handleAddClick}><AddIcon/></Button>
                                    <Button>{data.amount !== undefined ? data.amount : amount }</Button>
                                    <Button onClick={handleRemoveClick}><RemoveIcon/></Button>
                                </ButtonGroup>
                                <Box sx={{
                                    display: 'flex',
                                    margin: '12px 0 0 0'
                                }}>
                                    <Button variant="outlined" startIcon={<AddShoppingCartIcon/>}
                                        onClick={handleAddToCart}
                                        >Add To Cart</Button>
                                    <Button sx={{
                                        margin: '0 0 0 6px'
                                    }} variant="contained" startIcon={<LocalMallIcon/>}>Buy Now</Button>
                                </Box>
                            </Box>
                        </Box>
                        </Box>
                    </Box>
                </StyledPaper>
            </Box>
            <CatCartDrawer
                open={openCatDrawer}
                setOpen={setOpenCatDrawer}
            />
        </React.Fragment>
    )
}

export default CatDetail
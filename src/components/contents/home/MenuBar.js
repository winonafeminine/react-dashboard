import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import deliveryimage from './Images/Delivery.png'
import PropTypes from 'prop-types';

function Item(props) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          color: 'white',
          p: 0,
          m: 0,
          borderRadius: 1,
          textAlign: 'center',
          height: '6rem',
          width: '8vw',
          display: 'block',
          ...sx,
        }}
        {...other}
      />
    );
  }
  
  Item.propTypes = {
    sx: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])),
      PropTypes.func,
      PropTypes.object,
    ]),
  };

function MenuBar() {
    return (
        <Box sx={{
            boxShadow: 1,
            borderRadius: '7px',
            align: 'center'
        }}>
            <Box className="menubar" style={{ width: '100%', margin : '40px 0 0 0'}}>
                <Box sx={{ 
                    display: 'grid',
                    gridTemplateColumns: 'repeat(10, 1fr)',
                    '& Button':{
                        border: 'none'
                    }
                    }}>
                    <Item>
                        <Button variant="outlined" size="large" sx={{
                            display: 'block',
                            width:'8vw',
                            height: '100%',
                            padding: '0px 16px',
                            '& img':{
                                width: '50%',
                            },
                            '& .code':{
                                color: 'black',
                                height: '25px',
                                fontSize: '12px'
                            }
                        }}>
                            <Box>
                                <img className="deliverimage" src={deliveryimage} alt="" />
                                <Box className="code">
                                    โค้ดส่งฟรี
                                </Box>
                            </Box>
                        </Button>
                    </Item>
                    <Item>
                        <Button variant="outlined" size="large" sx={{
                            display: 'block',
                            width:'8vw',
                            height: '100%',
                            padding: '0px 16px',
                            '& img':{
                                width: '50%',
                            },
                            '& .code':{
                                color: 'black',
                                height: '25px',
                                fontSize: '12px'
                            }
                        }}>
                            <img className="deliverimage" src={deliveryimage} alt="" />
                            <Box className="code">
                                โค้ดส่งฟรี
                            </Box>
                        </Button>
                    </Item>
                    <Item>
                        <Button variant="outlined" size="large" sx={{
                           display: 'block',
                           width:'8vw',
                           height: '100%',
                           padding: '0px 16px',
                           '& img':{
                               width: '50%',
                           },
                           '& .code':{
                               color: 'black',
                               height: '25px',
                               fontSize: '12px'
                           }
                        }}>
                            <img className="deliverimage" src={deliveryimage} alt="" />
                            <Box className="code">
                                โค้ดส่งฟรี
                            </Box>
                        </Button>
                    </Item>
                    <Item>
                        <Button variant="outlined" size="large" sx={{
                           display: 'block',
                           width:'8vw',
                           height: '100%',
                           padding: '0px 16px',
                           '& img':{
                               width: '50%',
                           },
                           '& .code':{
                               color: 'black',
                               height: '25px',
                               fontSize: '12px'
                           }
                        }}>
                            <img className="deliverimage" src={deliveryimage} alt="" />
                            <Box className="code">
                                โค้ดส่งฟรี
                            </Box>
                        </Button>
                    </Item>
                    <Item>
                        <Button variant="outlined" size="large" sx={{
                           display: 'block',
                           width:'8vw',
                           height: '100%',
                           padding: '0px 16px',
                           '& img':{
                               width: '50%',
                           },
                           '& .code':{
                               color: 'black',
                               height: '25px',
                               fontSize: '12px'
                           }
                        }}>
                            <img className="deliverimage" src={deliveryimage} alt="" />
                            <Box className="code">
                                โค้ดส่งฟรี
                            </Box>
                        </Button>
                    </Item>
                    <Item>
                        <Button variant="outlined" size="large" sx={{
                           display: 'block',
                           width:'8vw',
                           height: '100%',
                           padding: '0px 16px',
                           '& img':{
                               width: '50%',
                           },
                           '& .code':{
                               color: 'black',
                               height: '25px',
                               fontSize: '12px'
                           }
                        }}>
                            <img className="deliverimage" src={deliveryimage} alt="" />
                            <Box className="code">
                                โค้ดส่งฟรี
                            </Box>
                        </Button>
                    </Item>
                    <Item>
                        <Button variant="outlined" size="large" sx={{
                           display: 'block',
                           width:'8vw',
                           height: '100%',
                           padding: '0px 16px',
                           '& img':{
                               width: '50%',
                           },
                           '& .code':{
                               color: 'black',
                               height: '25px',
                               fontSize: '12px'
                           }
                        }}>
                            <img className="deliverimage" src={deliveryimage} alt="" />
                            <Box className="code">
                                โค้ดส่งฟรี
                            </Box>
                        </Button>
                    </Item>
                </Box>
            </Box>
        </Box>
    )
}
export default MenuBar



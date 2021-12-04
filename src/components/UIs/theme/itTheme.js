import createTheme from '@mui/material/styles/createTheme';


export const itTheme = createTheme({
    typography: {
        fontFamily: [
            '"Prompt"', 
            'sans-serif'
        ].join(',')
    }
});

export const cartscontainer = {
    width: '30vw',
    height: '97vh',
    backgroundColor: "white",
    position: "absolute",
    margin: "auto",
    top: '10px',
    right: '20px',
    borderRadius: '20px',
    maxWidth: '100vw',
    maxHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    '&.MuiContainer-root':{
        padding: '24px'
    },
}

export const ItDetailgallery = {
    '&.MuiBox-root': {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        margin: '6px 6px 0 6px',
        '& .itgallery': {
            width: '75px',
            height: '75px',
            borderRadius: '12px',
        },
        '& Button':{
            margin: '0 4px',
            borderRadius: '17px',
            border: 'none',
            background: 'white',
            cursor: 'pointer',
            '&:hover':{
                boxShadow: '0 0 10px 2px rgba(0, 140, 186, 0.5)',
            }
        },
    }
}

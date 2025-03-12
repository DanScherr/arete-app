//@ts-check
/** State */
import { useEffect, useState } from 'react';
/** MUI */
import { 
    Box,
    BottomNavigation,
    BottomNavigationAction,
    Paper, 
} from '@mui/material';
import RoofingIcon from '@mui/icons-material/Roofing';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DescriptionIcon from '@mui/icons-material/Description';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import { useNavigate } from 'react-router-dom';


export default function LayoutMainFooter( ) {
    const [value, setValue] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        navigateTo(value, navigate);
    }, [value]);

    return(
        <>
            <Paper sx={{
                position: 'fixed', bottom: 0, left: 0, right: 0,
                width: '100%',
                color: 'primary.main', 
                bgcolor: 'primary.dark', 
                boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)'}}
                elevation={3}
            >
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        console.log('mudanca de valor:', value)
                        setValue(newValue);
                    }}
                    sx={{bgcolor: 'primary.dark', }}
                >
                    <BottomNavigationAction label="Home" icon={<RoofingIcon />} />
                    <BottomNavigationAction label="Crie" icon={<EditNoteIcon />} />
                    <BottomNavigationAction label="Revise" icon={<DescriptionIcon />} />
                    <BottomNavigationAction label="Analise" icon={<AnalyticsIcon />} />
                </BottomNavigation>
            </Paper>
        </>
    )
};

const navigateTo = ((valor: any, func: (arg0: string) => void) => {
    switch (valor) {
        case 0:
            func('/');
            break;
        
        case 1:
            func('/criar');
            break;

        case 2:
            func('/revisar');
            break;
        
        case 3:
            func('/analisar');
            break;
    
        default:
            break;
    };
});
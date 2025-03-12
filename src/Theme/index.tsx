/** MUI */
import {createTheme} from '@mui/material';
import { grey, lime, teal } from '@mui/material/colors';

const color1 = lime;
const color2 = teal;

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#282c34'
        },
        primary: {
            main: color1['A400'], //#c6ff00
            light: color1['A100'], //#eeff41
            dark: color1['900'], //#f4ff81
            contrastText: color1['50'], //#f9fbe7
        },
        secondary: {
            main: color2['A400'], //#c6ff00
            light: color2['A200'], //#eeff41
            dark: color2['A100'], //#f4ff81
            contrastText: color2['50'], //#f9fbe7
        },
    }
});
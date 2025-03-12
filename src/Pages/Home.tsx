// import './Home.css'
import { Decagon } from "../Components/Shapes/Polygonsz/Decagon";
import { PieceOfPuzzleOne } from '../Components/Shapes/PieceOfPuzzle/PieceOfPuzzleOne';
import { darkTheme } from "../Theme";
import { Box } from "@mui/material";

export default function Home() {
  const homeContentWidth = 500;
  return (
    <Box display={'block'} position={'fixed'} top={'50%'} mt={'-250px'} left={'50%'} ml={`-${homeContentWidth/2}px`}>
      <Box>
        <PieceOfPuzzleOne bgcolor={darkTheme.palette.primary.light} size={200} margin={'auto'} />
        <Box maxWidth={homeContentWidth} margin={'auto'} mt={3} textAlign={'justify'}>
          Aretê ou areté[1] (do grego ἀρετή aretê,ês, "adaptação perfeita, excelência, virtude") é uma palavra de origem grega que expressa o conceito grego de "excelência" de qualquer tipo, ligado especialmente à noção de "virtude moral",[2] de cumprimento do propósito ou da função a que o indivíduo se destina.
        </Box>
        <Box maxWidth={homeContentWidth} margin={'auto'} mt={3} textAlign={'justify'}>
          No sentido grego, a virtude coincide com a realização da própria essência, e portanto a noção se estende a todos os seres vivos. Segundo Sócrates, a virtude é fazer aquilo que a que cada um se destina. Aquilo que no plano objetivo é a realização da própria essência, no plano subjetivo coincide com a própria felicidade. 
        </Box>
        <Box maxWidth={homeContentWidth} margin={'auto'} mt={3} textAlign={'justify'}>
          - Wikipedia
        </Box>
      </Box>
        
    </Box>
    
  );
}
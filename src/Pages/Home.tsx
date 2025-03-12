// import './Home.css'
import Decagon from "../Components/Shapes/Polygonsz/Decagon";
import { PieceOfPuzzleOne } from '../Components/Shapes/PieceOfPuzzle/PieceOfPuzzleOne';

export default function Home() {
  return (
    <div style={{textAlign: 'center'}} className="my-auto">
      Logo é meus ovo
      <Decagon />
      <PieceOfPuzzleOne sx={{bgcolor: 'blue'}} />
    </div>
  );
}
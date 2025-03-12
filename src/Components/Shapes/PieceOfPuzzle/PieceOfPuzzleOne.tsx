import { Box } from "@mui/material";
import { BoxProps } from '@mui/material'

export type BoxPropsType = BoxProps & {size?: number};

export const PieceOfPuzzleOne: React.FC<BoxPropsType> = (props) => {
  const radius = props.size ? `${props.size/10}px` : '30px'
  const size = props.size ? `${props.size}px` : '300px'
  const PieceOfPuzzleOneStyle = {
    "width":`calc(${size} + ${radius})`,
    "height":`${size}`,
    "mask":`radial-gradient(${radius} at ${radius} 50%,#000 calc(100% - 1px),#0000), radial-gradient(${radius} at bottom,#0000 calc(100% - 1px),#000) 100%/calc(100% - ${radius}) 100% no-repeat`
  }

  return <Box {...props} sx={PieceOfPuzzleOneStyle} />;
}
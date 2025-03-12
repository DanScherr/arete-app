import { Box } from "@mui/material";
import { BoxProps } from '@mui/material'

export type BoxPropsType = BoxProps & {size?: number};

export const Decagon: React.FC<BoxPropsType> = (props) => {
  const size = props.size ? `${props.size}px` : '200px'
  const DecagonStyle = {
    "width":size,
    "aspectRatio":"1",
    "clipPath":"polygon(100% 50%,90.45% 79.39%,65.45% 97.55%,34.55% 97.55%,9.55% 79.39%,0% 50%,9.55% 20.61%,34.55% 2.45%,65.45% 2.45%,90.45% 20.61%,100% 50%,calc(90.45% - 16.18px) calc(20.61% - -11.76px),calc(65.45% - 6.18px) calc(2.45% - -19.02px),calc(34.55% - -6.18px) calc(2.45% - -19.02px),calc(9.55% - -16.18px) calc(20.61% - -11.76px),calc(0% - -20px) calc(50% - 0px),calc(9.55% - -16.18px) calc(79.39% - 11.76px),calc(34.55% - -6.18px) calc(97.55% - 19.02px),calc(65.45% - 6.18px) calc(97.55% - 19.02px),calc(90.45% - 16.18px) calc(79.39% - 11.76px),calc(100% - 20px) calc(50% - 0px),calc(90.45% - 16.18px) calc(20.61% - -11.76px))",
    "background":"#f4ff81"
  }

  return (
    <Box {...props} sx={DecagonStyle} />
  );
}
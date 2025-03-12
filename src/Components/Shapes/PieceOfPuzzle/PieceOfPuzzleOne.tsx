import { Box } from "@mui/material";
import './PieceOfPuzzleOne.css'
import React from "react";
import { BoxProps } from '@mui/material'

export type BoxPropsType = BoxProps;

export const PieceOfPuzzleOne: React.FC<BoxPropsType> = () => {
  return (
    <Box className="puzzleOne" />
  )
}
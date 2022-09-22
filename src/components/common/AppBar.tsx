import React from 'react'
import {
    AppBar as MuiAppBar,
    Typography
} from '@mui/material'

type AppBarProps = {
    children?: React.ReactNode
}

const AppBar = (params: AppBarProps) => {
  return (
    <MuiAppBar
      position="static"
      sx={{
        backgroundColor: '#fff',
        color: '#000',
        boxShadow: 'none',
        borderBottom: '1px solid #e0e0e0'
      }}
    >
      {params.children ?? (<Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#f00' }}>No component</Typography>)}
    </MuiAppBar>
  )
}

export default AppBar

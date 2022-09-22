import React from 'react'
import {
    AppBar as MuiAppBar,
    IconButton,
    Typography
} from '@mui/material'
import {
    Menu as MenuIcon
} from '@mui/icons-material'

type AppBarProps = {
    children?: React.ReactNode
}

const AppBar = (params: AppBarProps) => {
  return (
      <MuiAppBar
          position="static"
          about='Customized AppBar for shoppyLite'
          elevation={1}
      >
      <IconButton
        size="large"
        edge="start"
        color='inherit'
        aria-label="menu"
        sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' color='inherit'>
          shoppyLite
        </Typography>
      </MuiAppBar>
  )
}

export default AppBar

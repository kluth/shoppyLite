import { Box, Typography } from "@mui/material"
import {
    AutoGraph as AuthoGraphIcon
} from '@mui/icons-material'

type TitleProps = {
    title: string
    subtitle?: string
}

const Title = (params: TitleProps) => {
    return (
        <Box sx={{ flexGrow: 1, justifyItems: 'center' }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'inherit', textAlign: 'center' }}>
            <AuthoGraphIcon /> {params.title}
            {params.subtitle && <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1, color: 'inherit', textAlign: 'center' }}>{params.subtitle}</Typography>}
            </Typography>
        </Box>
    )
}

export default Title
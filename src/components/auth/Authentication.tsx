import { Badge, Box, IconButton } from "@mui/material"
import {
    PersonAdd as PersonAddIcon,
    PersonOff as PersonOffIcon,
    Person as PersonIcon
} from '@mui/icons-material'

type AuthenticationProps = {
    auth?: {}
}
const Authentication = (params: AuthenticationProps) => {
    return (
        <Box>
            {!params.auth && (
                <>
            <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="login"
                sx={{ mr: 2 }}
            >
                <PersonIcon sx={{ color: 'green'}} />
            </IconButton>
            <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="signup"
                sx={{ mr: 2 }}
                    >
                        <Badge
                            badgeContent={'New'}
                            color="info"
                        >
                            <PersonAddIcon sx={{ color: 'gold' }} />
                        </Badge>
            </IconButton>
                </>
            )}
            {params.auth && (
                <IconButton
                    size="large"
                    edge="end"
                    color="inherit"
                    aria-label="logout"
                    sx={{ mr: 2 }}
                >
                    <PersonOffIcon sx={{color: 'red'}} />
                </IconButton>
            )}
        </Box>
    )
}

export default Authentication
import React from 'react'
import { Stack, Badge } from '@mui/material'
import ChatIcon from '@mui/icons-material/Chat'
import NotificationsIcon from '@mui/icons-material/Notifications'
import IconButton from '@mui/material/IconButton'
// import Avatar from '@mui/material/Avatar';


function Badges() {
    return (
        <div className=' grid grid-cols-2'>
            <div>
                <Stack spacing={12} direction=' row' className=' gap-3 mt-3'>
                    <Badge badgeContent={12} color='secondary'>
                        <IconButton>
                            <ChatIcon color='primary' />
                        </IconButton>
                    </Badge>

                    <Badge badgeContent={12} color='secondary' >
                        <IconButton>
                            <NotificationsIcon color='primary' />
                        </IconButton>
                    </Badge>

                </Stack>
            </div>

        </div>
    )
}

export default Badges
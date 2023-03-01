import React from 'react'
import { Stack, Badge } from '@mui/material'
import ChatIcon from '@mui/icons-material/Chat'
import NotificationsIcon from '@mui/icons-material/Notifications'


function Badges() {
    return (
        <div className=' grid grid-cols-2'>
            <div>
                <Stack spacing={12} direction=' row' className=' gap-3'>
                    <Badge badgeContent={12} color='secondary'>
                        <ChatIcon color='primary' />
                    </Badge>

                    <Badge badgeContent={12} color='secondary'>
                        <NotificationsIcon color='primary' />
                    </Badge>
                </Stack>    
            </div>

        </div>
    )
}

export default Badges
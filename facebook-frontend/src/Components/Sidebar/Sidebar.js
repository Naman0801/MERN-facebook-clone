import React from 'react'
import SidebarRow from './SidebarRow/SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'
import { useStateValue } from '../../StateProvider'


const Sidebar = () => {
    const [{ user }, dispatch] = useStateValue()

    return (
        <div style={{ padding: '10px', flex: '0.3', borderRight: '1px solid #ddd' }}>
            <SidebarRow src={user.photoURL} title={user.displayName} />
            <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 Information Center' />

            <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
            <SidebarRow Icon={PeopleIcon} title='Friends' />
            <SidebarRow Icon={ChatIcon} title='Messenger' />
            <SidebarRow Icon={StorefrontIcon} title='Marketplace' />

            <SidebarRow Icon={VideoLibraryIcon} title='Videos' />
            <SidebarRow Icon={ExpandMoreOutlined} title='More' />
        </div>
    )
}

export default Sidebar
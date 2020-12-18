import React, { useEffect, useState } from 'react'
import './Feed.css'
import MessageSender from './MessageSender/MessageSender'
import Post from './Post/Post'
import StoryReel from './StoryReel/StoryReel'
import axios from '../../axios'
import Pusher from 'pusher-js'


const pusher = new Pusher('8597c5be49cb9ed6db8b', {
    cluster: 'ap2'
});

const Feed = () => {
    const [profilePic, setProfilePic] = useState('')
    const [postsData, setPostsData] = useState([])

    const syncFeed = () => {
        axios.get('/get/posts')
            .then(res => setPostsData(res.data))
    }

    useEffect(() => {
        var channel = pusher.subscribe('posts');

        channel.bind('inserted', function(data) {
            syncFeed();
        });
    }, [])

    useEffect(() => {
        syncFeed();
    }, []);

    return (
        <div className='feed' >
            <StoryReel />
            <MessageSender />

            {
                postsData.map(entry => (
                    <Post
                        profilePic={entry.avatar}
                        message={entry.text}
                        timestamp={entry.timestamp}
                        imgName={entry.imgName}
                        username={entry.user}
                    />
                ))
            }
        </div>
    )
}

export default Feed

import React from 'react'
import Story from './Story/Story'

const StoryReel = () => {
    return (
        <div style={{ display: 'flex' }} >
            <Story
                image='https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/119733779/original/cc2e5944473be8570911a5f558f0d28a150e3cdc/paint-you-a-custom-abstract-portrait-drawing-illustration.png'
                profileSrc='https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg'
                title='Elon Musk'
            />
            <Story
                image='https://assets.yellowtrace.com.au/wp-content/uploads/2019/07/25141848/Abstract-Portrait-Paintings-by-Joseph-Lee-Yellowtrace-05.jpg'
                profileSrc='https://images.livemint.com/img/2020/11/02/600x338/f2da350a-1226-11eb-a334-291a0d3a9eb7_1604304136809_1604304196787.jpg'
                title='Mukesh Ambani'
            />
            <Story
                image='https://cdn.shopify.com/s/files/1/0128/3672/products/DIMENSIONAL_ABSTRACT_PORTRAIT_no._IV_1024x1024.png?v=1507719723'
                profileSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/1200px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg'
                title='Steve Jobs'
            />
        </div>
    )
}

export default StoryReel

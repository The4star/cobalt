import React from 'react'

import Directory from '../../components/directory/directory.component'

// styled components
import { HomepageContainer } from './homepage.styles'


const Homepage = () => {
    return (
        <HomepageContainer>
            <Directory />
        </HomepageContainer>
    )
} 

export default Homepage;
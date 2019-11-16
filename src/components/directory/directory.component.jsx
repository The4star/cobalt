import React from 'react';
import axios from 'axios'

import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss'

class Directory extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            directories: null
        }
    }

    componentDidMount = () => {
        this.getDirectories()
    }

    componen

    getDirectories = async () => {
        const response = await axios.get('/data/directories');
        const data =  response.data
        this.setState({directories: data})
    }

    render() {
        const { directories } = this.state; 
        console.log(directories)
        return(
            <div className='directory-menu'>
                {
                    directories ?
                    directories.map(({_id, ...otherdirectoryProps}) => {
                        return <MenuItem key={_id} {...otherdirectoryProps}/>
                    })
                    : null
                }
            </div>       
        )
    }
};


export default Directory;

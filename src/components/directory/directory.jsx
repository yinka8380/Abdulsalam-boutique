import './directory.scss'
import { Component } from 'react'
import MenuItem from '../menu-item/menu-item'
class Directory extends Component{
    constructor(){
        super()
        this.state={
            sections: [{
                title: "Hat",
                imageUrl:"https://www.pngmart.com/files/6/Hat-PNG-Image.png",
                size:"small",
                id:1
            },
            {
                title: "Jacket",
                imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",
                size:"small",
                id:2

            },
           {
                title: "Sneaker",
                imageUrl:"https://pluspng.com/img-png/shoes-png-nike-shoes-transparent-background-800.png",
                size:"small",
                id:3
            },
            {
                title: "Men",
                imageUrl:"https://www.pngarts.com/files/3/Man-PNG-Free-Download.png",
                size:"large",
                id:4
            },
            {
                title: "Women",
                imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",
                size:"large",
                id: 5
            }
             
        ]
        }
    }
    render(){
        return(
            <div className='directory-menu'>
             {this.state.sections.map(({title, imageUrl, id, size})=>(<MenuItem key={id} size ={size} title={title} imageUrl={imageUrl}/>))}
            </div>
        );
    }
}

export default Directory;
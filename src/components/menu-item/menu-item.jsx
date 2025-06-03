import './menu-item.scss'
const MenuItem=({title,size, imageUrl})=>{
return(
 <div className={`${size} menu-item`}>
  <div className='backgroundimage'  style={{backgroundImage: `url(${imageUrl})`}} >
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle"> SHOP ITEM </span>
            </div>
            </div>
  </div>
)
}
export default MenuItem;
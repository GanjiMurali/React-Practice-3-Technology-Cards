// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardList} = props
  const {title, description, imgUrl, className} = cardList
  return (
    <li className={`${className} card-item `}>
      <h1 className="heading">{title}</h1>
      <p className="paragraph">{description}</p>
      <img className="image" src={imgUrl} alt={title} />
    </li>
  )
}

export default CardItem

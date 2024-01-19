import resList from "../utils/mockData";
import './../../index.css';

const RestaurantCard = ({resList}) => {

    return (
        <div className="res-card">
            <img src={resList.info.image.url} className="res-logo" alt="restaurant-logo" />
            <h3>{resList.info.name}</h3>
            <h4>{resList.info.cuisine.map(cuisine => cuisine.name).join(", ")}</h4>
            <h4>{resList.info.rating.aggregate_rating} ⭐</h4>
            <h4>{resList.order.deliveryTime}</h4>
            <h4>{resList.info.cft.text}</h4>
            <h4>{resList.info.locality.name}</h4>
        </div>
    )
}

export default RestaurantCard;
import resList from "../utils/mockData";
import './../../index.css';
import {cloudinaryID} from "../utils/constants";

const RestaurantCard = ({resList}) => {

    return (
        <div className="res-card">
            <img src={cloudinaryID + resList?.info.cloudinaryImageId} className="res-logo" alt="restaurant-logo" />
            <h3>{resList.info.name}</h3>
            <p>{resList.info.cuisines?.map(cuisine => cuisine).join(", ")}</p>
            <h4>{resList.info.avgRating} ⭐</h4>
            <h4>{resList.info.sla.deliveryTime} mins</h4>
            <h4>{resList.info.costForTwo}</h4>
            
        </div>
    ) 
}

export default RestaurantCard;
import resList from "../utils/mockData";
import './../../index.css';
import {cloudinaryID} from "../utils/constants";

const RestaurantCard = ({resList}) => {

    return (
        <div className="m-4 p-4 w-[250px] bg-violet-300 rounded-md hover:bg-violet-400">
            <img src={cloudinaryID + resList?.info.cloudinaryImageId} className="rounded-t-md" alt="restaurant-logo" />
            <h3 className="font-bold py-2 text-lg">{resList.info.name}</h3>
            <p>{resList.info.cuisines?.map(cuisine => cuisine).join(", ")}</p>
            <h4>{resList.info.avgRating} ⭐</h4>
            <h4>{resList.info.sla.deliveryTime} mins</h4>
            <h4>{resList.info.costForTwo}</h4>
            
        </div>
    ) 
}

export default RestaurantCard;
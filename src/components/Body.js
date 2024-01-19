import './../../index.css';
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from 'react';


const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState(resList)
    const [search, setSearch] = useState('')
    // let listORes = [
    //     {
    //         "info": {
    //           "resId": 310446,
    //           "name": "Burger King",
    //           "image": {
    //             "url": "https://b.zmtcdn.com/data/pictures/chains/8/310078/749216f498eb2ed21ffd317f4bdc8a1d_o2_featured_v2.jpg"
    //           },
    //           "rating": {
    //             "aggregate_rating": "4.9",
    //           },
    //           "cft": {
    //             "text": "₹400 for two"
    //           },
    //           "locality": {
    //             "name": "Connaught Place, New Delhi",
    //           },
    //           "cuisine": [
    //             {               
    //               "name": "Burger"
    //             },
    //             {                 
    //               "name": "Fast Food"
    //             },
    //             {                 
    //               "name": "Desserts"
    //             },
    //             {
    //               "name": "Shake"
    //             }
    //           ],
    //         },
    //         "order": {
    //           "deliveryTime": "28 min",
    //         },           
    //     },
    //     {
    //         "info": {
    //           "resId": 310447,
    //           "name": "Burger King",
    //           "image": {
    //             "url": "https://b.zmtcdn.com/data/pictures/chains/8/310078/749216f498eb2ed21ffd317f4bdc8a1d_o2_featured_v2.jpg"
    //           },
    //           "rating": {
    //             "aggregate_rating": "4.9",
    //           },
    //           "cft": {
    //             "text": "₹400 for two"
    //           },
    //           "locality": {
    //             "name": "Connaught Place, New Delhi",
    //           },
    //           "cuisine": [
    //             {               
    //               "name": "Burger"
    //             },
    //             {                 
    //               "name": "Fast Food"
    //             },
    //             {                 
    //               "name": "Desserts"
    //             },
    //             {
    //               "name": "Shake"
    //             }
    //           ],
    //         },
    //         "order": {
    //           "deliveryTime": "28 min",
    //         },           
    //     },
    //     {
    //         "info": {
    //           "resId": 310448,
    //           "name": "Burger King",
    //           "image": {
    //             "url": "https://b.zmtcdn.com/data/pictures/chains/8/310078/749216f498eb2ed21ffd317f4bdc8a1d_o2_featured_v2.jpg"
    //           },
    //           "rating": {
    //             "aggregate_rating": "3.9",
    //           },
    //           "cft": {
    //             "text": "₹400 for two"
    //           },
    //           "locality": {
    //             "name": "Connaught Place, New Delhi",
    //           },
    //           "cuisine": [
    //             {               
    //               "name": "Burger"
    //             },
    //             {                 
    //               "name": "Fast Food"
    //             },
    //             {                 
    //               "name": "Desserts"
    //             },
    //             {
    //               "name": "Shake"
    //             }
    //           ],
    //         },
    //         "order": {
    //           "deliveryTime": "28 min",
    //         },           
    //     },
    // ];

    const handleSearch = () =>{
        
    }

    const handleFilter = () =>{
        const filteredList = listOfRestaurant.filter(res => 
             res.info.rating.aggregate_rating > 4
        );
        setListOfRestaurant(filteredList);
    }
    

    return (
        <div className="main-body">
            <div className="search">
                <input type="text" className='search-txt'/>
                <button className="search-btn" onclick={handleSearch}>
                    🔍
                </button>
            </div>
            <div className="filter">
                <button className='filter-btn' onClick={handleFilter}>Top</button>
            </div>
            <div className="res-container">
                {/* restaurants  */}
                {
                    listOfRestaurant.map(restaurant => (
                        <RestaurantCard key={restaurant.id} resList={restaurant}/> 
                    ))
                }
            </div>
        </div>
    )
}

export default Body;
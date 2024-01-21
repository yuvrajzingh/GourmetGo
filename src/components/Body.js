import './../../index.css';
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from 'react';
import Shimmer from './Shimmer';


const Body = () => {

    //whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
    const [listOfRestaurant, setListOfRestaurant] = useState(resList)
    const [filteredRestaurant, setFilteredRestaurant] = useState(resList);
    const [search, setSearch] = useState('');

    const handleSearch = () =>{

        setFilteredRestaurant(listOfRestaurant.filter(res => (res.info.name.toLowerCase().includes(search.toLowerCase()))));
      
    }

    const handleFilter = () =>{
        const filteredList = listOfRestaurant.filter(res => 
             res.info.rating.aggregate_rating > 4
        );
        setListOfRestaurant(filteredList);
    }
    
    // if(listOfRestaurant === resList){ //* shimmer component
    //     return <Shimmer/>
    // }

    return (
        <div className="main-body">           
            <div className="filter">
                <div className="search">
                    <input type="text" 
                        className='search-box'
                        placeholder='search...' 
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                        onKeyDown={(e) =>{
                            if(e.key === 'Enter'){
                                handleSearch();
                            }
                        }} />
                    <button className="search-btn" onClick={handleSearch}>
                        🔍
                    </button>
                </div>
                <button className='filter-btn' onClick={handleFilter}>Top</button>
            </div>
            <div className="res-container">
                {/* restaurants  */}
                {
                    filteredRestaurant.map(restaurant => (
                        <RestaurantCard key={restaurant.id} resList={restaurant}/> 
                    ))
                }
            </div>
        </div>
    )
}

export default Body;
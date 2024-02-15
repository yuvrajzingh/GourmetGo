import './../../index.css';
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useRestaurants from '../utils/useRestaurants';
import useOnlineStatus from '../utils/useOnlineStatus';


const Body = () => {

    //whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [search, setSearch] = useState('');

    const listOfRestaurant = useRestaurants();
    useEffect(() => {
        setFilteredRestaurant(listOfRestaurant);
    }, [listOfRestaurant]);

    const handleSearch = () =>{
        setFilteredRestaurant(listOfRestaurant.filter(res => (res.info.name.toLowerCase().includes(search.toLowerCase()))));
    }


    const handleFilter = () =>{
        const filteredList = listOfRestaurant.filter(res => 
             res.info.avgRating > 4
        );
        setFilteredRestaurant(filteredList);
    }
    

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false)
        return (
    
            <h1>
                Looks like you're offline!! Please check your internet connection
            </h1>
        )



    return filteredRestaurant.length === 0  ? <Shimmer/> : (
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
                        
                        <Link to={"/restaurants/"+ restaurant.info.id} key={restaurant.info.id}><RestaurantCard  resList={restaurant}/></Link>                        
                    ))
                }
            </div>
        </div>
    )
}

export default Body;
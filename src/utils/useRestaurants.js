import { useEffect, useState } from "react"
import { RESTAURANTS_API } from "./constants";



const useRestaurants = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState([])


    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async ()=>{
        const data = await fetch(RESTAURANTS_API);
        const json = await data.json();
        console.log(json)
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }



    return (
        listOfRestaurant
    );
}

export default useRestaurants;
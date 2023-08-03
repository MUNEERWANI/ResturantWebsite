import MealSummary from "./MealSummary";
import AvailableMeals from "./AvailableMeals";
import { Fragment } from "react";
const Meals=()=>{
 return(
    <Fragment>
        <MealSummary />
        <AvailableMeals />
        
    </Fragment>
 )
}
export default Meals;
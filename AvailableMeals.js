import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Biryani',
      description: 'full hydrabadi',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Pizza',
      description: 'dominos pizza!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Kfc chickens',
      description: 'American, raw, crispy',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Pg food  ',
      description: 'majbouri',
      price: 18.99,
    },
  ];
const AvailableMeals=()=>{
    const mealsList=DUMMY_MEALS.map((meal)=>{
        return(
            <MealItem 
             key={meal.id} 
             id={meal.id}
             name={meal.name} 
             description={meal.description} 
             price={meal.price}/>
        )
            
        
    });
    
    return(
        <section className={classes.meals}>
            <Card>
            <ul>
            {mealsList}
            </ul>
            </Card>
        </section>

    );
};
export default AvailableMeals;
import {Fragment}from 'react';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.Module.css';
import HeaderCartButton from './HeaderCartButton';
const Header=(props)=>{
    return (
        <Fragment>
            <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton/>
            </header>
            <div className={classes['main-image']}>
            <img src={mealsImage} alt='A table full of melicious food 'className={classes['.main-image']}/>
            </div>{/*in this i am going to add images*/}

        </Fragment>

);
}
export default Header;

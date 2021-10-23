import React from 'react'
import { useState } from 'react';
import { addFood } from '../feature/customerSlice'
import {useDispatch} from 'react-redux'

interface CustomerType{
    name:string,
    id:string,
    food:string[]
}

interface CustomerCardType{
    customer:CustomerType
}

const CustomerCard = ({customer}:CustomerCardType) => {
    const [newFood, setNewFood] = useState(''); 
    const dispatch = useDispatch();

    const onButtonClick = () => {
        dispatch(addFood({id: customer.id, food:newFood}))
        setNewFood('')
    }

    return (
        <div className="customer-food-card-container">
            <p>{customer.name}</p>
            <div className="customer-foods-container">
                {customer.food.map(food => (<div className="customer-food">{food}</div>))}
                <div className="customer-food-input-container">
                    <input value={newFood} onChange={(e) => setNewFood(e.target.value)}/>
                    <button onClick={() => onButtonClick()}>Add</button>
            </div>
            </div>
        </div>
    )
}

export default CustomerCard

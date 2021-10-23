import React, { useState } from "react";
import "./App.css";
import {RootState} from './app/store'
import {useSelector, useDispatch} from 'react-redux'
import ReservationCard from './components/ReservationCard'
import { addReservation } from "./feature/reservationSlice";
import CustomerCard from "./components/CustomerCard";

function App() {
  
  const reservations = useSelector((state: RootState) => state.reservation.value)
  const [newReservation, setnewReservation] = useState('');
  const dispatch = useDispatch();
  const addReservationFunction = () => {
    dispatch(addReservation(newReservation));
    setnewReservation('')
  }
  const customers = useSelector((state:RootState) => state.customer.value);
  console.log(customers)
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((reservation,index:number) => (<ReservationCard name={reservation} key={index} index={index}/>))}
            </div>
          </div>
          <div className="reservation-input-container">
            <input value={newReservation} onChange={(e) => setnewReservation(e.target.value)}/>
            <button onClick={() => addReservationFunction()}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          
          {customers.map(customer => (<CustomerCard customer={customer}/>))}
          
        </div>
      </div>
    </div>
  );
}

export default App;
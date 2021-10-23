import React from 'react'
import {RootState} from '../app/store'
import {useSelector, useDispatch} from 'react-redux'
import {removeReservation} from '../feature/reservationSlice'
import { addCustomer } from "../feature/customerSlice"
import { v4 as uuid } from 'uuid';

interface PropType {
    name: string,
    index: number
}

const ReservationCard = ({name, index}: PropType) => {
    const reservations = useSelector((state: RootState) => state.reservation.value)
    const customers = useSelector((state: RootState) => state.customer.value)
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(addCustomer({name:name, id:uuid(), food:[]}))
        dispatch(removeReservation(index));
    }

    return (
        <div onClick={() => handleClick()}>
            <p className="reservation-card-container">{name}</p>
        </div>
    )
}

export default ReservationCard

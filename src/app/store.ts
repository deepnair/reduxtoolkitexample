import {configureStore} from '@reduxjs/toolkit';
import reservationReducer from '../feature/reservationSlice';
import customerReducer from '../feature/customerSlice'

const store = configureStore({
    reducer: {
        reservation: reservationReducer,
        customer: customerReducer
        
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch 
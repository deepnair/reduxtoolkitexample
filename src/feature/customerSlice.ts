import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Customer{
    name: string,
    id: string,
    food: string[]
}

interface CustomerStateType{
    value: Customer[]
}

const initialState:CustomerStateType = {
    value: []
}

interface AddFoodType{
    food: string
    id: string
}

const customerSlice = createSlice({
    name: "customers",
    initialState,
    reducers: {
        addCustomer: (state, action:PayloadAction<Customer>) => {
            state.value.push(action.payload)
        },
        addFood: (state, action:PayloadAction<AddFoodType>) => {
            state.value.forEach((customer:Customer) => {
                customer.id === action.payload.id && customer.food.push(action.payload.food)
            })
        }

    }
})

export const {addCustomer, addFood} = customerSlice.actions;

export default customerSlice.reducer;
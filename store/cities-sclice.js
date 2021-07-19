import { createSlice } from "@reduxjs/toolkit"

const citiesSlice = createSlice({
    name: "cities",
    initialState: {
        cities: []
    },
    reducers: {
        addCityToArray(state, action) {
            const data = action.payload.data
            
            if (state.cities.length == 3) {
                state.cities.shift()
            }s
            state.cities.push(data)
        }
    }
})

export const citiesActions = citiesSlice.actions
export default citiesSlice
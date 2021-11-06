import { createSlice } from "@reduxjs/toolkit"

const weatherSlice = createSlice({
    name: "geo",
    initialState: {
        geo: null
    },
    reducers: {
        setGeo(state, action) {
            const data = action.payload.data
            
            state.geo = data
        }
    }
})

export const weatherActions = weatherSlice.actions
export default weatherSlice
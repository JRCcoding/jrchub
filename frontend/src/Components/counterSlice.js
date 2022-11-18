// counterSlice.js
import { createSlice } from 'react-slice' // 👈👈👈

export default createSlice({
  reducer: /*👈👈👈*/ (state, action) => {
    switch (action.type) {
      case 'increment':
        return state + 1
      default:
        return state
    }
  },
  initialState: /*👈👈👈*/ 0,
  debugName: 'Counter', // Optional.
})

// import { configureStore, combineReducers } from '@reduxjs/toolkit'
// import offerReducer from "../features/offerSlice.js"
// import { persistReducer,persistStore } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// const persistConfig={
//   key:'persist-store',
//   storage
// }


// const reducer=combineReducers({
//     offer:offerReducer
// })

// const persistedReducer=persistReducer(persistConfig,reducer)

// const store= configureStore({
//   reducer: persistedReducer
// })
// export default store

import { configureStore } from '@reduxjs/toolkit'
import offerReducer from "../features/offerSlice.js"

export default configureStore({
  reducer: {
    offer:offerReducer
}
})
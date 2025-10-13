import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './features/cart';
import wishlistSlice from './features/wishlist';
import  compareSlice from './features/compare';
import utility from './features/utility';
import filter from './features/filter';

export const store = configureStore({
  reducer: {
    cart:cartSlice,
    wishlist:wishlistSlice,
    compare:compareSlice,
    utility:utility,
    filter:filter,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
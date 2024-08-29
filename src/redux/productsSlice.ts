import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ProductInterface } from '../types/Product.Interface'
import { createFetchThunk } from './createFetchThunk'
import { RootState } from './store'

interface ProductStateInterface {
  products: ProductInterface
  error: string | null
  isLoading: boolean
}

const initialState: ProductStateInterface = {
  products: {} as ProductInterface,
  error: null,
  isLoading: false
}

export const fetchAllProducts = createFetchThunk<ProductInterface>('posts/fetchAllProducts')

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        ;(state.isLoading = true), (state.error = null)
      })
      .addCase(fetchAllProducts.fulfilled, (state, action: PayloadAction<ProductInterface[]>) => {
        state.isLoading = false
        state.products = action.payload as unknown as ProductInterface
      })
      .addCase(fetchAllProducts.rejected, (state, action: PayloadAction<unknown>) => {
        state.isLoading = false
        if (action.payload instanceof Error) {
          state.error = action.payload.message
        } else {
          state.error = 'An unexpected error occurred'
        }
      })
  }
})

export const selectProducts = (state: RootState) => state.products.products
export const selectProductsLoading = (state: RootState) => state.products.isLoading
export const selectProductsError = (state: RootState) => state.products.error

export default productsSlice.reducer

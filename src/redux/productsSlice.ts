import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ProductInterface } from '../types/Product.Interface'
import { RootState } from './store'
import { createUrl } from '../utils/mockApi'

interface ProductStateInterface {
  isLoading: boolean
  items: ProductInterface[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: ProductStateInterface = {
  error: null,
  isLoading: false,
  items: [],
  status: 'idle'
}

export const fetchAllProducts = createAsyncThunk(
  'products/fetchAll',
  async (params: { page: number; name: string; sort: string; order: string }) => {
    try {
      const url = createUrl(params.page, params.name, params.sort, params.order)
      const res = await fetch(url)
      const data = await res.json()

      return { data }
    } catch (error) {
      throw error
    }
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.items = action.payload.data
      })
      .addCase(fetchAllProducts.rejected, (state, action: PayloadAction<unknown>) => {
        state.isLoading = false
        if (action.payload instanceof Error) {
          state.error = action.payload.message
        } else {
          state.error = 'An error occurred'
        }
      })
  }
})

export const selectProducts = (state: RootState): ProductInterface[] => state.products.items
export const selectProductsLoading = (state: RootState) => state.products.isLoading
export const selectProductsError = (state: RootState) => state.products.error

export default productsSlice.reducer

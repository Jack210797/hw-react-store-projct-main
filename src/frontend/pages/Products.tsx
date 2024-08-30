import { useEffect, useRef, useState } from 'react'
import { ProductInterface } from '../types/Product.Interface'
import { API_ITEMS_PAGE_LIMIT } from '../../utils/mockApi'
import ProductRender from '../components/ProductRender'
import AddProductButton from '../components/AddProduct'
import { debounce } from '../../utils/debounce'
import { ORDER_BY_LIST, SORT_BY_LIST } from '../../data/mockData'
import { MdRefresh } from 'react-icons/md'
import InputField from '../components/form/InputField'
import SelectField from '../components/form/SelectField'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../redux/store'
import { fetchAllProducts, selectProducts } from '../redux/productsSlice'
import { selectProductsError, selectProductsLoading } from '../redux/productsSlice'
import { RootState } from '../redux/store'
import Pagination from '../components/form/Pagination'

const Products = () => {
  const [page, setPage] = useState(1)
  const [name, setName] = useState('')
  const [sort, setSort] = useState('')
  const [order, setOrder] = useState('')
  const [reload, setReload] = useState('0')
  const [totalProducts, setTotalProducts] = useState(0)

  const inputRef = useRef<HTMLInputElement>(null)

  const dispatch = useDispatch<AppDispatch>()
  const products = useSelector(selectProducts)
  const isLoading = useSelector(selectProductsLoading)
  const error = useSelector(selectProductsError)
  const { isLogged } = useSelector((state: RootState) => state.auth)

  useEffect(() => {
    dispatch(fetchAllProducts({ page, name, sort, order })).then((action) => {
      if (fetchAllProducts.fulfilled.match(action)) {
        setTotalProducts(action.payload.data.totalProducts)
      }
    })
  }, [dispatch, page, name, sort, order, reload])

  const debouncedSetName = debounce(setName, 1000)

  const resetFilters = () => {
    setName('')
    setSort('')
    setOrder('')
    inputRef.current && (inputRef.current.value = '')
  }

  const totalPages = totalProducts ? Math.ceil(totalProducts / API_ITEMS_PAGE_LIMIT) : 1

  return (
    <div>
      <h1>Products list page</h1>
      <div className="products-filter">
        <InputField
          ref={inputRef}
          id="filter"
          type="text"
          placeholder="Filter products by name..."
          onChange={(event) => debouncedSetName(event.target.value)}
        />

        <SelectField id="sort" value={sort} onChange={(event) => setSort(event.target.value)} options={SORT_BY_LIST} />

        <SelectField
          id="order"
          value={order}
          onChange={(event) => setOrder(event.target.value)}
          options={ORDER_BY_LIST}
        />

        <button onClick={resetFilters}>
          <MdRefresh />
        </button>
      </div>
      {isLoading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {!isLoading && !error && (
        <div className="content">
          <div className="buttons-group">
            {isLogged && <AddProductButton />}

            <div className="pagination">
              <button
                className="pagination__btn"
                disabled={page === 1}
                onClick={() => setPage((prevState) => prevState - 1)}
              >
                Previous page
              </button>

              <button
                className="pagination__btn"
                disabled={products.length < API_ITEMS_PAGE_LIMIT}
                onClick={() => setPage((prevState) => prevState + 1)}
              >
                Next page
              </button>
            </div>
          </div>

          <ul className="products-list">
            {!!products.length &&
              products.map((product: ProductInterface) => (
                <ProductRender reload={() => setReload(product.id + Date.now())} key={product.id} product={product} />
              ))}
          </ul>

          <div className="buttons-group-down">
            <div className="pagination">
              <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Products

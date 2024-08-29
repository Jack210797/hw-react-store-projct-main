import { FaEdit, FaTrash } from 'react-icons/fa'
import { ProductInterface } from '../types/Product.Interface'
import { AxiosError } from 'axios'
import { API_URL } from '../utils/mockApi'
import { useDelete } from '../hooks/useDelete'
import EditProductButton from './EditProduct'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
// import { PaginationInterface } from '../types/Pagination.interface'

interface ProductPropsInterface {
  product: ProductInterface
  // pagination: PaginationInterface
  reload: () => void
}

const ProductRender = ({
  product: { id, name, description, category, price, image },
  // pagination,
  reload
}: ProductPropsInterface) => {
  const { isLogged } = useSelector((state: RootState) => state.auth)
  const { delete: deleteProduct } = useDelete(API_URL)

  const handleDeleteProduct = async () => {
    try {
      await deleteProduct(id)
      reload()
    } catch (error) {
      console.log((error as AxiosError).message)
    }
  }

  return (
    <li className="product-item">
      <h2 className="product-item__name">{name}</h2>
      <p className="product-item__description">{description}</p>
      <p className="product-item__category">{category}</p>
      <p className="product-item__price">{price}</p>
      <img className="product-item__image" src={image} alt={name} />
      {isLogged && (
        <div className="product-item__actions">
          <button className="product-item__delete" onClick={handleDeleteProduct}>
            <FaTrash />
          </button>
          <EditProductButton product={{ id, name, price, description, category, image }} reload={reload}>
            <FaEdit />
          </EditProductButton>
        </div>
      )}
      {/* <div>
        Page {pagination.currentPage} of {pagination.totalPages}
      </div> */}
    </li>
  )
}

export default ProductRender

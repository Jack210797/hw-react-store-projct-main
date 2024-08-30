import { ReactNode, useState } from 'react'
import { ProductInterface } from '../types/Product.Interface'
import { API_URL } from '../../utils/mockApi'
import Modal from '../modals/Modal'
import ProductForm from './form/ProductForm'
import { useUpdate } from '../hooks/useUpdate'

interface EditProductButtonPropsInterface {
  children: ReactNode
  product: ProductInterface
  reload: () => void
}
const EditProductButton = ({ children, product, reload }: EditProductButtonPropsInterface) => {
  const [showModal, setShowModal] = useState(false)
  const { update, error } = useUpdate(API_URL)

  const handleOpen = () => setShowModal(true)

  const handleClose = () => setShowModal(false)

  const handleSubmit = async (product: Partial<ProductInterface>) => {
    try {
      await update(product as ProductInterface)
      handleClose()
      reload()
    } catch (error) {
      console.log((error as Error).message)
    }
  }

  return (
    <>
      <button className="product-item__edit" onClick={handleOpen}>
        {children}
      </button>

      {showModal && (
        <Modal onClose={handleClose}>
          <h2 className="modal__title">
            Edit product #{product.id}, {product.name}
          </h2>
          {error && <p className="error">{error}</p>}
          <ProductForm onSubmit={handleSubmit} product={product} />
        </Modal>
      )}
    </>
  )
}

export default EditProductButton

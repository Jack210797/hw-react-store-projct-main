import { useState } from 'react'
import Modal from '../modals/Modal'
import ProductForm from './form/ProductForm'
import { ProductInterface } from '../types/Product.Interface'
import { API_URL } from '../../utils/mockApi'
import { useAdd } from '../hooks/useAdd'
import { INITIAL_PRODUCT } from '../../data/mockData'

const AddProductButton = () => {
  const [showModal, setShowModal] = useState(false)
  const { add, error } = useAdd(API_URL)

  const handleOpen = () => setShowModal(true)

  const handleClose = () => setShowModal(false)

  const handleSubmit = async (product: Partial<ProductInterface>) => {
    try {
      const newProduct = await add(product)
      console.log(newProduct)
      handleClose()
    } catch (error) {
      console.log((error as Error).message)
    }
  }

  return (
    <>
      <button className="add-product-btn" onClick={handleOpen}>
        Add product
      </button>

      {showModal && (
        <Modal onClose={handleClose}>
          <h2 className="modal__title">Add a new Product</h2>
          {error && <p className="error">{error}</p>}
          <ProductForm onSubmit={handleSubmit} product={INITIAL_PRODUCT} />
        </Modal>
      )}
    </>
  )
}

export default AddProductButton

import { FormEvent, useState } from 'react'
import { PRODUCT_CATEGORIES } from '../../data/mockData'
import InputField from './InputField'
import SelectField from './SelectField'
import { ProductInterface } from '../../types/Product.Interface'

interface ProductFormPropsInterface {
  onSubmit: (product: Partial<ProductInterface>) => void
  product: Partial<ProductInterface>
}

const ProductForm = ({ onSubmit, product }: ProductFormPropsInterface) => {
  const [name, setName] = useState(product.name as string)
  const [description, setDescription] = useState(product.description as string)
  const [price, setPrice] = useState(product.price as number)
  const [category, setCategory] = useState(product.category as string)
  const [image, setImage] = useState(product.image as string)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    const returnProduct: Partial<ProductInterface> = { name, price, description, category, image }

    if (product.id) returnProduct.id = product.id

    onSubmit(returnProduct)
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        id="name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Product Name...."
      />

      <InputField
        id="description"
        textarea={true}
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Product description...."
      />

      <InputField
        id="price"
        type="number"
        value={`${price}`}
        onChange={(event) => setPrice(+event.target.value)}
        placeholder="Price...."
      />

      <InputField
        id="image"
        type="url"
        value={image}
        onChange={(event) => setImage(event.target.value)}
        placeholder="Image URL..."
      />

      <SelectField
        id="category"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        options={PRODUCT_CATEGORIES}
      />

      <div className="form-group">
        <button className="form-button" type="submit">
          Submit
        </button>
      </div>
    </form>
  )
}

export default ProductForm

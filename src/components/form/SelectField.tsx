import { ChangeEvent } from 'react'
import { ProductCategoriesInterface } from '../../data/mockData'

interface SelectFieldPropsInterface {
  id: string
  value: string
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
  options: ProductCategoriesInterface[]
  required?: boolean
}
const SelectField = ({ id, value, onChange, options, required = true }: SelectFieldPropsInterface) => {
  return (
    <div className="form-group">
      <label htmlFor="name" className="form-label">
        {id.charAt(0).toUpperCase() + id.slice(1)}:
      </label>
      <select className="form-control" name="category" id={id} value={value} onChange={onChange} required={required}>
        <option value=""> Please select a {id}...</option>
        {options.map((option: ProductCategoriesInterface) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectField

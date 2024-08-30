interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      <button className="pagination__btn" disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
        Попередня сторінка
      </button>
      <span>{`Сторінка ${currentPage} з ${totalPages}`}</span>
      <button
        className="pagination__btn"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Наступна сторінка
      </button>
    </div>
  )
}

export default Pagination

import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    searchInput,
    activeCategoryId,
    activeRatingId,
    updateSearchInput,
    enterSearchInput,
    onClickCategory,
    onClickRating,
    clearFilters,
  } = props

  const onChangeSearchInput = event => {
    updateSearchInput(event.target.value)
  }

  const onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const onClickClearFiltersBtn = () => {
    clearFilters()
  }
  return (
    <div className="filters-group-container">
      <div className="searchbar-container">
        <input
          type="search"
          className="search-bar"
          placeholder="Search"
          onChange={onChangeSearchInput}
          value={searchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
      <h1 className="category-heading">Category</h1>
      <ul className="category-list">
        {categoryOptions.map(eachItem => (
          <li className="category-item" key={eachItem.categoryId}>
            <button
              type="button"
              className={`category-btn ${
                eachItem.categoryId === activeCategoryId ? 'add-color' : ''
              }`}
              onClick={() => onClickCategory(eachItem.categoryId)}
            >
              <p className="category-name">{eachItem.name}</p>
            </button>
          </li>
        ))}
      </ul>
      <h1 className="category-heading">Rating</h1>
      <ul className="category-list">
        {ratingsList.map(eachItem => (
          <li className="category-item" key={eachItem.ratingId}>
            <button
              type="button"
              className={`rating-holder ${
                eachItem.ratingId === activeRatingId ? 'add-color' : ''
              }`}
              onClick={() => onClickRating(eachItem.ratingId)}
            >
              <img
                src={eachItem.imageUrl}
                alt={`rating ${eachItem.ratingId}`}
                className="rating-image"
              />
              <span className="up">& up</span>
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="clear-btn"
        onClick={onClickClearFiltersBtn}
      >
        Clear Filters
      </button>
    </div>
  )
}
export default FiltersGroup

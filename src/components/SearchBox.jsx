import './SearchBox.css'

export default function SearchBox({ onSearchChange }) {
  return(
    <div className='input-container'>
      <input 
        type="search" 
        placeholder='search cool people'
        onChange={onSearchChange}
      />
    </div>
  )
}
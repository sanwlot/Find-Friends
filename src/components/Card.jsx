import './Card.css'

export default function Card({ title, first, last, email, picture }) {
  return (
    <div className='card'>
      <img src={picture} alt="user" />
      <div>
        <h2>{title} {first} {last}</h2>
        <p>{email}</p>
      </div>
    </div> 
  )
}
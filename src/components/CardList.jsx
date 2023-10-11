import Card from './Card.jsx'
import { v4 as uuidv4 } from 'uuid';

export default function CardList({ filteredUsers }) {
  return (
    <>
      {
      filteredUsers.map(user => 
        <Card 
            key={uuidv4()} 
            title={user.name.title}
            first={user.name.first} 
            last={user.name.last}
            email={user.email} 
            picture={user.picture.large}
        />)
      }
    </>
  )
}



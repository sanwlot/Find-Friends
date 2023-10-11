import './Scroll.css'

export default function Scroll(props) {
  return (
    <div className='scroll-component'>
      {props.children}
    </div>
  )
}
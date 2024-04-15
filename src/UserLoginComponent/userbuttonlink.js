import { Link } from 'react-router-dom';
import "./userlogin.css"

export default function UserButtonLink({ to }) {
  return (
    <Link to={to} className='adminbutton'>
          <button class="btn-primary adminbutton">
            User Login
          </button>
    </Link>
  )
}
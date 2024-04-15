import { Link } from 'react-router-dom';
import "./style.css"

export default function AdminButtonLink({ to }) {
  return (
    <Link to={to} className='adminbutton'>
          <button class="btn-secondary adminbutton">
            Admin Login
          </button>
    </Link>
  )
}

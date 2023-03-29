import logo from './assets/logo.svg'

function Header() {
  return (
    <nav className='navbar bg-light mb-4 p-2'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='/'>
            <div className="d-flex">
                <img src={logo} alt='logo' />
                <div>ProjectMgmt</div>
            </div>
        </a>
      </div>
    </nav>
  )
}

export default Header

import { Link } from "react-router-dom";
const randColour = () =>
  ["green", "red", "blue", "yellow"][Math.floor(Math.random() * 4)];

function Header({ filterProducts }) {
  return (
    <header
      className="header"
      style={{ ["--border-colour"]: `var(--${randColour()})` }}
    >
      <div className="header__logo" style={{ color: `var(--${randColour()})` }}>
        Hoxbay
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            {/* Create here a link to this page */}
            <Link to='/products' >Home</Link> 
          </li>
          <li>
            {/* Create here a Link to this page */}
            <Link to='/categories' >Categories</Link>
          </li>
          <li>
            {/* Create here a Link to this page */}
            <Link to='/basket' >Basket</Link>
            
          </li>
          <li>
          <input type="search" placeholder="Search product..."  className="searach" 
          onChange={(e) => {
            filterProducts(e.target.value)
            console.log(e.target.value)}}/>
        </li>
        </ul>
        
      </nav>
    </header>
  );
}
export default Header;

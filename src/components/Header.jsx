import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
        <h1>Honkai Fan Page</h1>
        <nav>
            <ul class = "navbar">
              <Link to="/about">
              About me
              </Link>
              <Link to="/">
              Home
              </Link>
              <Link to="/resume">
              Resume
              </Link>
              <Link to="/calc">
              Calculator
              </Link>
            </ul>
        </nav>
    </header>
  );
}

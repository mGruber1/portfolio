import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Marcus GRUBER
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="https://github.com/mGruber1?tab=repositories"
              >
                Projects
              </Link>
            </li>
          </ul>
          <span className="navbar-text">Citizen Programmer By Heart</span>
        </div>
      </div>
    </nav>
  );
};

import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

// NavLink ima mogucnost da prima className koji nije regularan kao kod drugih el
// vec prima funkciju i kao parametar moze da koristi isActive prop
// da primeni odredjenu klasu ukoliko je link aktivan

// end se stavlja jer rrd proverava pocetak path propertija i
// na osnovu toga gleda da li je link aktivan ili nije
// desava se da vise linkova obelezi kao aktivne jer svi pocinju sa /
// da bi se to sprecilo stavi se end prop sto znaci da ce rrd proveriti
// da li se link zavrsava sa / i na taj nacin uporedjivati ostale linkove

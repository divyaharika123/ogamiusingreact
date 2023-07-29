import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";

import { Grid } from "@mui/material";
import "../styles/navbar.scss";

const Navbar = () => {
    let price = 10;
  return (
    <>
      <div className="navbar-container">
        <Grid container spacing={2}>
          <Grid item md={4}>
            <img
              src="https://ogami-react.vercel.app/assets/images/logo.png"
              className="nav-logo"
            />
          </Grid>
          <Grid item md={8}>
            <Grid container spacing={4}>
              <Grid item md={8}>
                <ul className="nav-links">
                  <li className="nav-item ">Home</li>
                  <li className="nav-item ">Shop</li>
                  <li className="nav-item ">Blog</li>
                  <li className="nav-item nav-highlight">About</li>
                  <li className="nav-item nav-highlight">Pages</li>
                </ul>
              </Grid>
              <Grid item md={2} className="nav-info">
                <div className="nav-info-container">
                  <AiOutlineHeart />
                  <p className="nav-info">0</p>
                </div>
                <div className="nav-info-container">
                  <MdOutlineShoppingCart />
                  <p className="nav-info">0</p>
                </div>
                <p className="nav-price">${price ?price.toFixed(2): "0.00"}</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Navbar;
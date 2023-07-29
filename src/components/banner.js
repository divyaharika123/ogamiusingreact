import { Accordion, AccordionSummary, Grid, Typography, AccordionDetails, Menu, MenuItem, Button } from "@mui/material";
import { MdExpandMore } from "react-icons/md";
import "../styles/banner.scss";
import HomeProductList from "../components/homeProductList"
import { useState } from "react";
const Banner = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const categories = [
    "Bread",
    "Fast Food",
    "Fresh Meat",
    "Ocean Foods",
    "Oatmeal",
    "Fresh Bananas",
  ];
  return (
    <div className="banner-container">
      <Grid container spacing={2}>
        <Grid item md={4}>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<MdExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="cato">All Departments</Typography>
            </AccordionSummary>
            <AccordionDetails>

              {categories.map((e) => (
                <p
                  key={Math.random().toString(36).slice(2)}
                  className="category-item"
                >
                  {e}
                </p>
              ))}
            </AccordionDetails>
          </Accordion>
          <Button className="cato"
            type="primary"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <Typography className="cato">All Departments</Typography>
          </Button>
        </Grid>

        <Grid item md={8}>
          <HomeProductList />
          <Grid item md={8}>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {categories.map((e) => (
                <MenuItem
                  onClick={handleClose}
                  key={Math.random().toString(36).slice(2)}
                  className={open ? "class1" : "class2"}
                >
                  {e}
                </MenuItem>

              ))}
            </Menu>
          </Grid>
        </Grid>
      </Grid>

    </div>
  );
};

export default Banner;
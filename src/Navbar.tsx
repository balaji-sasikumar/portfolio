import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  ListItemText,
  Box,
} from "@mui/material";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navItems = [
    "About",
    "Experience",
    "Projects",
    "Skills",
    "Certifications",
    "Awards",
  ];

  const toggleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{ background: "linear-gradient(to right, #3b82f6, #9333ea)" }}
      >
        <Toolbar className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Balaji S</div>

          {/* Hamburger Button for Mobile */}
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu}
            edge="end"
            sx={{ display: { xs: "block", lg: "none" } }}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </IconButton>

          {/* Menu for Mobile */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={closeMenu}
            slotProps={{
              paper: {
                sx: {
                  backgroundColor: "#2563eb", // Custom background color
                },
              },
            }}
          >
            {navItems.map((item, index) => (
              <MenuItem key={index} onClick={closeMenu}>
                <a
                  href={`#${item.toLowerCase()}`}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <ListItemText>{item}</ListItemText>
                </a>
              </MenuItem>
            ))}
          </Menu>

          {/* Navigation Links for Larger Screens */}
          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-lg hover:underline mx-6"
                onClick={() => setIsOpen(false)}
                style={{ color: "white", textDecoration: "none" }}
              >
                {item}
              </a>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;

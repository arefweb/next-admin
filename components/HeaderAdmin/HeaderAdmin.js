import React, { useState, useEffect } from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AppsIcon from "@mui/icons-material/Apps";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";


const HeaderAdmin = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [deffredPrompt, setDeffredPrompt] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    if (deffredPrompt) {
      setTimeout(() => {
        deffredPrompt.prompt();
        setDeffredPrompt(null);
      }, 2000);
    }
  };

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      setDeffredPrompt(event);
    });
  }, []);

  const handleClose = () => {
    setAnchorEl(null);
  };


  useEffect(() => {
    const resizeToggle = (e) => {
      if (e.target.innerWidth < 1000) {
        if (
          !document.querySelector(".sidebar").classList.contains("menuHide") &&
          !isMenuOpen
        ) {
          document.querySelector(".sidebar").classList.add("menuHide");
        }
        if (
          document.querySelector(".sidebar").classList.contains("menuHide") &&
          isMenuOpen
        ) {
          document.querySelector(".sidebar").classList.remove("menuHide");
        }
        
      }
    };
    window.addEventListener("resize", resizeToggle);
    return ()=>{
      window.removeEventListener("resize", resizeToggle);
    }
  }, [])


  useEffect(() => {
    function closeMenu(e){
      if (e.target.id == this.id) {
        document.querySelector(".sidebar").classList.add("menuHide");
        setIsMenuOpen(false);
        document.getElementById("overlay").style.display = "none";
      }
    }
    // closeMenu.this = closeMenu.bind(document.getElementById("overlay"));
    document.getElementById("overlay").addEventListener("click", closeMenu);
    return () => {
      document.getElementById("overlay").removeEventListener("click", closeMenu);
    }
  }, [])


  function toggleMenu(){
    if (document.querySelector(".sidebar").classList.contains("menuHide")) {
      document.querySelector(".sidebar").classList.remove("menuHide");
      setIsMenuOpen(true);
      document.getElementById("overlay").style.display = "block";
    }
    else {
      document.querySelector(".sidebar").classList.add("menuHide");
      setIsMenuOpen(false);
      document.getElementById("overlay").style.display = "none";
    }
  }

   const open = Boolean(anchorEl);
   const id = open ? "simple-popover" : undefined;

  return (
    <header className="content-area__header">
      <div className="content-area__header-buttons">
        <IconButton onClick={toggleMenu} id="menu-btn">
          <MenuIcon />
        </IconButton>
        <IconButton variant="contained" onClick={handleClick}>
          <AppsIcon />
        </IconButton>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{ horizontal: "right" }}
        >
          <Typography
            sx={{ p: 2 }}
            style={{ direction: "rtl", fontFamily: "Vazir" }}
          >
            <article>
              <h3>داشبورد ادمین</h3>
              <p>تکنولوژی ها:</p>
              <ul style={{ fontFamily: "Montserrat", paddingRight: "20px" }}>
                <li>Next.js</li>
                <li>React.js</li>
                <li>PWA</li>
              </ul>
            </article>
          </Typography>
        </Popover>
      </div>
      <div className="logo">
        <Link href="/">
          <a >Aref</a>
        </Link>
      </div>
    </header>
  );
};

export default HeaderAdmin;

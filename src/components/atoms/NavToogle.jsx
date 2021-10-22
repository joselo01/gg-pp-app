import React from 'react';
export const NavToogle = ({navFlag}) => {
  const sidebarToggle = (e) => {
    const sidebarToggle = document.body.querySelector("#sidebarToggle");
    if (sidebarToggle) {
      e.preventDefault();
      console.log("llega el click");
      document.body.classList.toggle("sb-sidenav-toggled");
      localStorage.setItem(
        "sb|sidebar-toggle",
        document.body.classList.contains("sb-sidenav-toggled")
      );
    }
  };
  return (
    <>
    {
      (navFlag) ?
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container-fluid">
        <button
          onClick={sidebarToggle}
          className="btn btn-primary"
          id="sidebarToggle"
        >
          <i className="bi bi-list"></i>
           <span>Menu</span>
        </button>
      </div>
    </nav>
    : null

    }
    </>
  );
};

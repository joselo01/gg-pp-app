import React from 'react';
export const NavToogle = () => {
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
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container-fluid">
        <button
          onClick={sidebarToggle}
          className="btn btn-primary"
          id="sidebarToggle"
        >
          <i className="bi bi-list"></i>
        </button>
      </div>
    </nav>
  );
};

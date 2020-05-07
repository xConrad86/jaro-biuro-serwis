import React from "react";

const footer = () => {
  const currentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer className="text-center p-4">
      <div className="container">
        <div className="row">
          <div className="col">
            <p>Copyright&copy; {currentYear()} lewap90/xConrad86/pieknyAdas</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default footer;

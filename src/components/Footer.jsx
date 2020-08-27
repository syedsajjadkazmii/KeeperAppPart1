import React from "react";

let d = new Date();
let currYear = d.getFullYear();

function Footer() {
  return (
    <div>
      <footer>
        <p>Copyright {currYear}</p>
      </footer>
    </div>
  );
}

export default Footer;

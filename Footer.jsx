import React from "react";

function Footer()
 {
  var curYr=new Date().getFullYear();
  return (
    <footer>
      <p>┬ęCopyright @ {curYr}</p>
    </footer>
  );
}

export default Footer;

import React from "react";
import "./footer.css";
import FootCards from "./FootCards";
function Footer() {
  return (
    <div className="footer">
      <FootCards title="Bootmine">
        De Volger 25 1483GA De Rijp KvK: 82726612 VAT ID: NL862581308B01
      </FootCards>
      <FootCards title=" Terms & Conditions">© 2022 Ruben Kuipers</FootCards>
      <FootCards title="Social">Facebook</FootCards>
    </div>
  );
}

export default Footer;

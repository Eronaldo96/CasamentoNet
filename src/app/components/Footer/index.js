import React from "react";
import "./styles.scss";

export default function Footer() {
  return (
    <div className="footerStyle">
      <p>© 2024 Ero Company, Inc.</p>
      <p className="float-right">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Back to top
        </button>
      </p>
    </div>
  );
}

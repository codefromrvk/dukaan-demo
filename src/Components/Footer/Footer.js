import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-wrapper">
          <div className="brand">
            <div className="logo-img">
              <img
                className="bg-logo"
                src="images/Vector.png"
                alt="logo background"
              />
              <img className="logo" src="images/top-vector.png" alt="logo" />
              <span className="brand-text">dukaan</span>
            </div>
          </div>
          <div class="grid-container-footer">
            <div class="grid-item-footer">Contact</div>
            <div class="grid-item-footer">Privacy</div>
            <div class="grid-item-footer">Tutorials</div>
            <div class="grid-item-footer">About</div>
            <div class="grid-item-footer">FAQ's </div>
            <div class="grid-item-footer">Blog</div>
            <div class="grid-item-footer">Banned Items</div>
            <div class="grid-item-footer">
              Jobs <span>3</span>
            </div>
          </div>

          <div className="socials">
            <span>Facebook</span>
            <span>Twitter</span>
            <span>LinkedIn</span>
          </div>
        </div>
        <hr />
        <div className="copyright">
          <span>Dukaan 2020, All rights reserved.</span>
          <div>
            <span>Made in </span> <img src="images/ind.png" />
          </div>
        </div>
      </div>
    </footer>
  );
}

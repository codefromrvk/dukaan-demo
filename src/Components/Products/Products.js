import React from "react";
import "./product.css";

export default function Products() {
  return (
    <div className="products-wrapper">
      <h1>Try our other free products</h1>
      <div>
        <div class="grid-container">
          <div class="grid-item">
            <img src="images/privacy.png" />
            <span>Privacy Policy Generator</span>
            <p>
              Stock your store with 100s of products and start selling to
              customers in minutes, without the hassle of inventory or
              packaging.
            </p>
          </div>
          <div class="grid-item">
            <img src="images/terms.png" />
            <span>Terms & Conditions Generator</span>
            <p>
              Stock your store with 100s of products and start selling to
              customers in minutes, without the hassle of inventory or
              packaging.
            </p>
          </div>
          <div class="grid-item">
            <img src="images/domain.png" />
            <span>Domain Name Generator</span>
            <p>
              Stock your store with 100s of products and start selling to
              customers in minutes, without the hassle of inventory or
              packaging.
            </p>
          </div>
          <div class="grid-item">
            <img src="images/invoice.png" />
            <span>Invoice Generator</span>
            <p>
              Stock your store with 100s of products and start selling to
              customers in minutes, without the hassle of inventory or
              packaging.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./ProgressBar.css";

export default function ProgressBar() {
  return (
    <div class="row d-flex justify-content-center mt-100">
      <div class="">
        <div class="progress blue">
          <span class="progress-left">
            <span class="progress-bar"></span>
          </span>
          <span class="progress-right">
            <span class="progress-bar"></span>
          </span>
          <div class="progress-value">20%</div>
        </div>

        <div class="progress yellow">
          <span class="progress-left">
            <span class="progress-bar"></span>
          </span>
          <span class="progress-right">
            <span class="progress-bar"></span>
          </span>
          <div class="progress-value">37.5%</div>
        </div>

        <div class="progress yellow">
          <span class="progress-left">
            <span class="progress-bar"></span>
          </span>
          <span class="progress-right">
            <span class="progress-bar"></span>
          </span>
          <div class="progress-value">37.5%</div>
        </div>
      </div>
    </div>
  );
}

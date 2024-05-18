import React from "react";

const SVGPractice = () => {
  return (
    <div className="plane-container">
      <p className="E">59</p>
      <div className="F">60</div>
      <div className="G">61</div>

      <div className="svg-plane">
        <svg viewBox="0 0 100 100" style={{ border: "green solid;" }}>
          <g className="grid">
            <path d="M10 0 V100" stroke-width=".2" stroke="green" />
            <path d="M20 0 V100" stroke-width=".2" stroke="green" />
            <path d="M30 0 V100" stroke-width=".2" stroke="green" />
            <path d="M40 0 V100" stroke-width=".2" stroke="green" />
            <path d="M50 0 V100" stroke-width=".8" stroke="green" />
            <path d="M60 0 V100" stroke-width=".2" stroke="green" />
            <path d="M70 0 V100" stroke-width=".2" stroke="green" />
            <path d="M80 0 V100" stroke-width=".2" stroke="green" />
            <path d="M90 0 V100" stroke-width=".2" stroke="green" />

            <path d="M0 10 H100" stroke-width=".2" stroke="green" />
            <path d="M0 20 H100" stroke-width=".2" stroke="green" />
            <path d="M0 30 H100" stroke-width=".2" stroke="green" />
            <path d="M0 40 H100" stroke-width=".2" stroke="green" />
            <path d="M0 50 H100" stroke-width=".8" stroke="green" />
            <path d="M0 60 H100" stroke-width=".2" stroke="green" />
            <path d="M0 70 H100" stroke-width=".2" stroke="green" />
            <path d="M0 80 H100" stroke-width=".2" stroke="green" />
            <path d="M0 90 H100" stroke-width=".2" stroke="green" />
          </g>
          <g>
            <text x="21.5" y="10" font-size="8" fill="white">
              M
            </text>
            <text x="10" y="40" font-size="8" fill="white">
              T
            </text>
            <text x="40" y="40" font-size="8" fill="white">
              V
            </text>
          </g>

          <g className="numbers">
            <text x="10" y="10" font-size="2">
              10
            </text>
            <text x="20" y="10" font-size="2">
              20
            </text>
            <text x="30" y="10" font-size="2">
              30
            </text>
            <text x="40" y="10" font-size="2">
              40
            </text>
            <text x="50" y="10" font-size="2">
              50
            </text>
            <text x="60" y="10" font-size="2">
              60
            </text>
            <text x="70" y="10" font-size="2">
              70
            </text>
            <text x="80" y="10" font-size="2">
              80
            </text>
            <text x="90" y="10" font-size="2">
              90
            </text>

            <text y="20" x="50.5" font-size="2">
              20
            </text>
            <text y="30" x="50.5" font-size="2">
              30
            </text>
            <text y="40" x="50.5" font-size="2">
              40
            </text>
            <text y="50" x="50.5" font-size="2">
              50
            </text>
            <text y="60" x="50.5" font-size="2">
              60
            </text>
            <text y="70" x="50.5" font-size="2">
              70
            </text>
            <text y="80" x="50.5" font-size="2">
              80
            </text>
            <text y="90" x="50.5" font-size="2">
              90
            </text>
            <text y="100" x="50.5" font-size="2">
              100
            </text>

            <text x="0" y="49" font-size="4">
              X
            </text>
            <text x="50.5" y="3" font-size="4">
              Y
            </text>
          </g>
          <polygon
            className="triangle1"
            stroke="maroon"
            stroke-width="1"
            fill="none"
            points="25 10, 10 40,40 40"
          >
            <text x="25" y="10" font-size="12">
              H
            </text>
          </polygon>
        </svg>
      </div>
    </div>
  );
};

export default SVGPractice;

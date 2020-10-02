import * as React from "react";

function SvgDashboard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      height={props.height !== undefined ? props.height : "32px"}
      viewBox="0 0 24 24"
      width={props.width !== undefined ? props.width : "32px"}
      fill={props.fill !== undefined ? props.fill : "white"}
      {...props}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
    </svg>
  );
}

export default SvgDashboard;

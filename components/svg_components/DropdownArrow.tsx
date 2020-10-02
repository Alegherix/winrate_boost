import * as React from "react";

function SvgDropdownArrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      height={props.height !== undefined ? props.height : "32px"}
      viewBox="0 0 24 24"
      width={props.width !== undefined ? props.width : "32px"}
      fill={props.fill !== undefined ? props.fill : "white"}
      {...props}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M7 10l5 5 5-5z" />
    </svg>
  );
}

export default SvgDropdownArrow;

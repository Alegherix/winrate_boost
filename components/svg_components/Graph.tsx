import * as React from "react";

function SvgGraph(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      height={props.height !== undefined ? props.height : "32px"}
      viewBox="0 0 24 24"
      width={props.width !== undefined ? props.width : "32px"}
      fill={props.fill !== undefined ? props.fill : "white"}
      {...props}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z" />
    </svg>
  );
}

export default SvgGraph;

import * as React from "react";

function SvgGames(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      height={props.height !== undefined ? props.height : "32px"}
      viewBox="0 0 24 24"
      width={props.width !== undefined ? props.width : "32px"}
      fill={props.fill !== undefined ? props.fill : "white"}
      {...props}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z" />
    </svg>
  );
}

export default SvgGames;

import * as React from "react";

function SvgCrosshair(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width !== undefined ? props.width : "32px"}
      height={props.height !== undefined ? props.height : "32px"}
      viewBox="0 0 24 24"
      fill={props.fill !== undefined ? props.fill : "white"}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46 86c22.091 0 40-17.909 40-40S68.091 6 46 6 6 23.909 6 46s17.909 40 40 40zm0-7c18.225 0 33-14.775 33-33S64.225 13 46 13 13 27.775 13 46s14.775 33 33 33z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46 71c13.807 0 25-11.193 25-25S59.807 21 46 21 21 32.193 21 46s11.193 25 25 25zm0-5c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20z"
        fill="#fff"
      />
      <rect x={43} y={54} width={6} height={38} rx={3} fill="#fff" />
      <rect
        y={49}
        width={6}
        height={38}
        rx={3}
        transform="rotate(-90 0 49)"
        fill="#fff"
      />
      <path d="M57 49a3 3 0 110-6h32a3 3 0 110 6H57z" fill="#fff" />
      <rect x={43} width={6} height={38} rx={3} fill="#fff" />
    </svg>
  );
}

export default SvgCrosshair;

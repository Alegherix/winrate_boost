import * as React from "react";

function SvgRifle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width !== undefined ? props.width : "32px"}
      height={props.height !== undefined ? props.height : "32px"}
      viewBox="0 0 24 24"
      fill={props.fill !== undefined ? props.fill : "white"}
      {...props}
    >
      <g clipPath="url(#rifle_svg__clip0)" fill="#fff">
        <path d="M83.265 2.793a1.542 1.542 0 00-2.18-2.181l-.567.566-.726-.726a1.542 1.542 0 10-2.18 2.18l.726.727-10.23 10.23-3.73-1.695a1.542 1.542 0 00-1.728.313l-9.383 9.383-.058-.059a1.542 1.542 0 00-2.181 0L22.841 49.718c-.29.29-.452.681-.452 1.09v3.16l-4.446 8.531-3.389 1.13a1.54 1.54 0 00-.734.522L3.603 77.419a1.542 1.542 0 00.41 2.252l11.478 7.099a1.542 1.542 0 002.22-.684l11.174-25.081 1.958.909a3.85 3.85 0 011.93 2l3.277 7.776a1.542 1.542 0 002.024.82l5.851-2.484a1.542 1.542 0 00.879-1.848L41.53 56.87l5.762-5.763a32.558 32.558 0 009.016 3.94 32.92 32.92 0 008.445 1.099c2.693 0 5.387-.329 8.01-.988a1.542 1.542 0 001.144-1.758l-1.63-9.412a1.542 1.542 0 00-1.946-1.218 20.128 20.128 0 01-19.198-4.533L51.608 36l6.943-6.944a1.542 1.542 0 00.27-1.819l10.711-10.711L83.265 2.793zM15.612 83.218L7.09 77.947l8.886-11.541 3.534-1.178c.38-.126.695-.395.88-.75l3.937-7.556 2.076 2.076-10.79 24.22zm13.284-26.09l-3.423-3.422v-2.259L44.852 32.07l3.66 3.661-.48 2.261L28.897 57.13zm12.065-4.05l-1.165 1.165-1.827-1.827 1.165-1.164 1.827 1.826zm-2.669 15.99l-2.677-6.352a6.929 6.929 0 00-3.473-3.6l-.596-.276 4.242-4.243 2.637 2.637 3.036 10.488-3.169 1.346zm4.85-18.17l-1.827-1.827 1.428-1.428c.64.582 1.302 1.14 1.984 1.669l-1.585 1.585zm26.38-4.751l1.097 6.335a29.9 29.9 0 01-13.518-.416 29.55 29.55 0 01-12.178-6.604l4.56-4.559a23.214 23.214 0 0020.039 5.244zM50.195 33.05l-3.162-3.163 4.982-4.982c.018.02.035.042.055.062l3.104 3.104-4.979 4.979zm6.492-8.042l-1.239-1.239 8.627-8.627 1.703.774-9.091 9.092z" />
        <path d="M34.902 46.464a1.542 1.542 0 00-2.181 0l-2.979 2.978a1.542 1.542 0 002.181 2.18l2.979-2.978a1.542 1.542 0 000-2.18z" />
      </g>
      <defs>
        <clipPath id="rifle_svg__clip0">
          <path fill="#fff" d="M0 0h87v87H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgRifle;
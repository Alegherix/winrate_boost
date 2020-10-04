import * as React from 'react';

function SvgSignout(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={props.width !== undefined ? props.width : '32px'}
      height={props.height !== undefined ? props.height : '32px'}
      fill={props.fill !== undefined ? props.fill : 'white'}
      {...props}
    >
      <path fill="white" d="M0 0h24v24H0z" />
      <path
        fill="white"
        d="M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z"
      />
    </svg>
  );
}

export default SvgSignout;

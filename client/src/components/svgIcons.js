import React from "react";

export const Twitter = ({ width, height, color }) => {
  return (
    <svg
      className="feather feather-twitter"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke={color}
    >
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </svg>
  );
};

export const Facebook = ({ fill, width, height, color, svgClass }) => {
  return (
    <svg
      className={`feather feather-twitter ${svgClass}`}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke={color}
      fill={fill}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
};

export const Youtube = ({ width, height, color }) => {
  return (
    <svg
      className="feather feather-youtube"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke={color}
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
};

export const Location = ({ width, height, color, locationClass }) => {
  return (
    <svg
      className={locationClass}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke={color}
    >
      <path d="M12 0c-5.5 0-10 4.5-10 10 0 7.4 9.1 13.6 9.4 13.8 0.2 0.1 0.4 0.2 0.6 0.2s0.4-0.1 0.6-0.2c0.3-0.2 9.4-6.4 9.4-13.8 0-5.5-4.5-10-10-10zM12 21.8c-1.9-1.4-8-6.4-8-11.8 0-4.4 3.6-8 8-8s8 3.6 8 8c0 5.4-6.1 10.4-8 11.8z" />
      <path d="M12 6c-2.2 0-4 1.8-4 4s1.8 4 4 4c2.2 0 4-1.8 4-4s-1.8-4-4-4zM12 12c-1.1 0-2-0.9-2-2s0.9-2 2-2c1.1 0 2 0.9 2 2s-0.9 2-2 2z" />
    </svg>
  );
};

export const Instagram = ({ width, height, color }) => {
  return (
    <svg
      className="feather feather-instagram"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke={color}
    >
      <path d="M17 1h-10c-3.3 0-6 2.7-6 6v10c0 3.3 2.7 6 6 6h10c3.3 0 6-2.7 6-6v-10c0-3.3-2.7-6-6-6zM21 17c0 2.2-1.8 4-4 4h-10c-2.2 0-4-1.8-4-4v-10c0-2.2 1.8-4 4-4h10c2.2 0 4 1.8 4 4v10z" />
      <path d="M12.8 7c-0.5-0.1-1-0.1-1.5 0-2.7 0.4-4.6 3-4.2 5.7 0.2 1.3 0.9 2.5 2 3.3 0.9 0.6 1.9 1 3 1 0.2 0 0.5 0 0.7-0.1 1.3-0.2 2.5-0.9 3.3-2s1.1-2.4 0.9-3.7c-0.3-2.2-2-3.9-4.2-4.2zM14.5 13.7c-0.5 0.6-1.2 1.1-2 1.2-1.6 0.2-3.2-0.9-3.4-2.5-0.3-1.6 0.9-3.2 2.5-3.4 0.1 0 0.3 0 0.4 0s0.3 0 0.4 0c1.3 0.2 2.3 1.2 2.5 2.5 0.2 0.8 0 1.6-0.4 2.2z" />
      <path d="M16.8 5.8c-0.2 0.2-0.3 0.4-0.3 0.7s0.1 0.5 0.3 0.7c0.2 0.2 0.5 0.3 0.7 0.3 0.3 0 0.5-0.1 0.7-0.3s0.3-0.5 0.3-0.7c0-0.3-0.1-0.5-0.3-0.7-0.4-0.4-1-0.4-1.4 0z" />
    </svg>
  );
};

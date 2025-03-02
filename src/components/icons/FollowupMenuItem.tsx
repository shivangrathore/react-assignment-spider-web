import { ComponentProps } from "react";

type Props = ComponentProps<"svg">;
export default function FollowupMenuItem(props: Props) {
  return (
    <svg
      viewBox="0 0 14 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.9998 54.7C13.3864 54.7 13.6998 54.3866 13.6998 54C13.6998 53.6134 13.3864 53.3 12.9998 53.3V54.7ZM0.299802 0V44.9677H1.6998V0H0.299802ZM0.299802 44.9677C0.299802 49.0689 1.3258 51.5893 3.19628 53.0374C5.02413 54.4525 7.49221 54.7 9.9998 54.7V53.3C7.50739 53.3 5.47548 53.0314 4.05332 51.9304C2.6738 50.8623 1.6998 48.8666 1.6998 44.9677H0.299802ZM9.9998 54.7H12.9998V53.3H9.9998V54.7Z"
        fill="currentColor"
        stroke="currentColor" // Add this line to set the stroke color
        strokeWidth={props.strokeWidth || 2} // This will now have an effect
      />
    </svg>
  );
}

import { ComponentProps } from "react";

type Props = ComponentProps<"svg">;
export default function FirstMenuItem({ strokeWidth = 2, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 14 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.9998 21.7C13.3864 21.7 13.6998 21.3866 13.6998 21C13.6998 20.6134 13.3864 20.3 12.9998 20.3V21.7ZM0.299802 0V11.9677H1.6998V0H0.299802ZM0.299802 11.9677C0.299802 16.0689 1.3258 18.5893 3.19628 20.0374C5.02413 21.4525 7.49221 21.7 9.9998 21.7V20.3C7.50739 20.3 5.47548 20.0314 4.05332 18.9304C2.6738 17.8623 1.6998 15.8666 1.6998 11.9677H0.299802ZM9.9998 21.7H12.9998V20.3H9.9998V21.7Z"
        fill="currentColor"
        stroke="currentColor" // Ensure stroke is set
        strokeWidth={strokeWidth} // Use the strokeWidth prop
      />
    </svg>
  );
}

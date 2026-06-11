import { cn } from "../lib/utils";

function IconHome({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-4", className)}
    >
      <path
        d="M1.66602 8.33334L9.25568 2.34153C9.46743 2.1743 9.72943 2.08334 9.99935 2.08334C10.2693 2.08334 10.5313 2.1743 10.743 2.34153L13.7493 4.71492V3.33334C13.7493 2.87311 14.1224 2.50001 14.5827 2.50001H15.416C15.8763 2.50001 16.2493 2.8731 16.2493 3.33334V6.68861L18.3327 8.33334"
        stroke="#457D82"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6673 9.58334V12.9167C16.6673 15.2737 16.6673 16.4522 15.9351 17.1844C15.2028 17.9167 14.0243 17.9167 11.6673 17.9167H8.33398C5.97696 17.9167 4.79845 17.9167 4.06622 17.1844C3.33398 16.4522 3.33398 15.2737 3.33398 12.9167V9.58334"
        stroke="#457D82"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 12.9167C11.8337 13.4353 10.9585 13.75 10 13.75C9.0415 13.75 8.16627 13.4353 7.5 12.9167"
        stroke="#457D82"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconArrowRight({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-4", className)}
      {...props}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function IconClock({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-4", className)}
      {...props}
    >
      <path
        d="M9.99959 18.3337C14.602 18.3337 18.3329 14.6027 18.3329 10.0003C18.3329 5.39795 14.602 1.66699 9.99959 1.66699C5.39722 1.66699 1.66626 5.39795 1.66626 10.0003C1.66626 14.6027 5.39722 18.3337 9.99959 18.3337Z"
        stroke="#01636C"
      />
      <path
        d="M7.91699 7.91693L10.8336 10.8333M13.3337 6.66693L9.16699 10.8336"
        stroke="#01636C"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconUser({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-4", className)}
      {...props}
    >
      <path
        d="M12.9173 8.75004C12.9173 7.13921 11.6115 5.83337 10.0007 5.83337C8.38982 5.83337 7.08398 7.13921 7.08398 8.75004C7.08398 10.3609 8.38982 11.6667 10.0007 11.6667C11.6115 11.6667 12.9173 10.3609 12.9173 8.75004Z"
        stroke="#01636C"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3327 9.99996C18.3327 5.39758 14.6017 1.66663 9.99935 1.66663C5.39697 1.66663 1.66602 5.39758 1.66602 9.99996C1.66602 14.6023 5.39697 18.3333 9.99935 18.3333C14.6017 18.3333 18.3327 14.6023 18.3327 9.99996Z"
        stroke="#01636C"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 16.6667C15 13.9053 12.7614 11.6667 10 11.6667C7.23857 11.6667 5 13.9053 5 16.6667"
        stroke="#01636C"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconEye({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-4", className)}
      {...props}
    >
      <path
        d="M25.1341 12.8863C25.4888 13.3837 25.6661 13.6324 25.6661 14.0005C25.6661 14.3686 25.4888 14.6173 25.1341 15.1146C23.5403 17.3495 19.4702 22.1671 13.9994 22.1671C8.52867 22.1671 4.45855 17.3495 2.86481 15.1146C2.51011 14.6173 2.33276 14.3686 2.33276 14.0005C2.33276 13.6324 2.51011 13.3837 2.86481 12.8863C4.45855 10.6515 8.52867 5.8338 13.9994 5.8338C19.4702 5.8338 23.5403 10.6515 25.1341 12.8863Z"
        stroke="#2A3648"
        strokeWidth="2"
      />
      <path
        d="M17.4995 14.0005C17.4995 12.0674 15.9326 10.5005 13.9995 10.5005C12.0665 10.5005 10.4995 12.0674 10.4995 14.0005C10.4995 15.9335 12.0665 17.5005 13.9995 17.5005C15.9326 17.5005 17.4995 15.9335 17.4995 14.0005Z"
        stroke="#2A3648"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconSearch({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-4", className)}
      {...props}
    >
      <path
        d="M12.916 12.9167L14.166 14.1667"
        stroke="#4F596B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5271 16.271C14.0457 15.7896 14.0457 15.0091 14.5271 14.5277C15.0084 14.0463 15.7889 14.0463 16.2703 14.5277L17.9716 16.229C18.453 16.7104 18.453 17.4909 17.9716 17.9722C17.4902 18.4537 16.7097 18.4537 16.2283 17.9722L14.5271 16.271Z"
        stroke="#4F596B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.1667 8.33333C14.1667 5.11168 11.555 2.5 8.33333 2.5C5.11168 2.5 2.5 5.11168 2.5 8.33333C2.5 11.555 5.11168 14.1667 8.33333 14.1667C11.555 14.1667 14.1667 11.555 14.1667 8.33333Z"
        stroke="#4F596B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconCheck({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-4", className)}
      {...props}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export {
  IconArrowRight,
  IconClock,
  IconEye,
  IconHome,
  IconSearch,
  IconUser,
  IconCheck,
};

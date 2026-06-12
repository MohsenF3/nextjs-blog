export default function BlogCardMask() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-10 drop-shadow-[0px_0px_40px_rgba(0,0,0,0.1)]">
      <svg className="hidden md:block w-full h-full overflow-visible">
        <defs>
          <mask id="desktop-cutout">
            <rect width="100%" height="100%" rx="12" fill="white" />
            <svg x="0" y="100%" overflow="visible">
              <path
                d="M 82,0 L 74,0 A 12,12 0,0,1 62,-12 L 62,-42 A 20,20 0,0,0 42,-62 L 12,-62 A 12,12 0,0,1 0,-74 L -10,-74 L -10,10 L 82,10 Z"
                fill="black"
              />
            </svg>
          </mask>
        </defs>

        <rect
          width="100%"
          height="100%"
          rx="12"
          fill="var(--card)"
          mask="url(#desktop-cutout)"
        />
        <rect
          width="100%"
          height="100%"
          rx="12"
          fill="none"
          stroke="var(--border)"
          strokeWidth="1.5px"
          mask="url(#desktop-cutout)"
        />

        <svg x="0" y="100%" overflow="visible">
          <path
            d="M 82,0 L 74,0 A 12,12 0,0,1 62,-12 L 62,-42 A 20,20 0,0,0 42,-62 L 12,-62 A 12,12 0,0,1 0,-74"
            fill="none"
            stroke="var(--border)"
            strokeWidth="1.5px"
          />
        </svg>
      </svg>

      <svg className="block md:hidden w-full h-full overflow-visible">
        <defs>
          <mask id="mobile-cutout">
            <rect width="100%" height="100%" rx="12" fill="white" />
            <svg x="0" y="100%" overflow="visible">
              <path
                d="M 66,0 L 58,0 A 12,12 0,0,1 46,-12 L 46,-26 A 20,20 0,0,0 26,-46 L 12,-46 A 12,12 0,0,1 0,-58 L -10,-58 L -10,10 L 66,10 Z"
                fill="black"
              />
            </svg>
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          rx="12"
          fill="var(--card)"
          mask="url(#mobile-cutout)"
        />
        <rect
          width="100%"
          height="100%"
          rx="12"
          fill="none"
          stroke="var(--border)"
          strokeWidth="1.5px"
          mask="url(#mobile-cutout)"
        />

        <svg x="0" y="100%" overflow="visible">
          <path
            d="M 66,0 L 58,0 A 12,12 0,0,1 46,-12 L 46,-26 A 20,20 0,0,0 26,-46 L 12,-46 A 12,12 0,0,1 0,-58"
            fill="none"
            stroke="var(--border)"
            strokeWidth="1.5px"
          />
        </svg>
      </svg>
    </div>
  );
}

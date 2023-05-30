const BackgroundImage = ({ className }) => {
    return (
        <svg
            viewBox="0 0 1241 1241"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M1191.7 612c0 337.998-266.773 612-595.851 612S0 949.998 0 612 266.771 0 595.849 0C924.927 0 1191.7 274.002 1191.7 612Z"
                fill="url(#a)"
            />
            <path
                d="M1180.35 542.954c0 147.332-116.29 266.769-259.731 266.769-143.444 0-259.729-119.437-259.729-266.769 0-147.333 116.285-266.769 259.729-266.769 143.441 0 259.731 119.436 259.731 266.769Z"
                fill="url(#b)"
            />
            <defs>
                <radialGradient
                    id="a"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(0 612 -595.849 0 595.849 612)"
                >
                    <stop offset={0.307} stopColor="#284FC6" />
                    <stop offset={1} stopColor="#D9D9D9" stopOpacity={0} />
                </radialGradient>
                <radialGradient
                    id="b"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="scale(259.729 266.769) rotate(90 .755 2.79)"
                >
                    <stop offset={0.516} stopColor="#284FC6" />
                    <stop offset={1} stopColor="#D9D9D9" stopOpacity={0} />
                </radialGradient>
                <linearGradient
                    id="d"
                    x1={920.619}
                    y1={423.244}
                    x2={920.619}
                    y2={940.642}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop
                        offset={0.792}
                        stopColor="#1A55E3"
                        stopOpacity={0.16}
                    />
                    <stop offset={1} stopColor="#1C4EE7" stopOpacity={0.46} />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default BackgroundImage;

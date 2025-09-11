import * as React from "react";

interface GridProps {
    children?: React.ReactNode;
    min: string;
    max: string;
    gap: string;
}

function Grid({ children, min, max, gap}: GridProps) {
    const grid: React.CSSProperties = {
        display: "grid",
        justifyContent: "center",
        gridTemplateColumns: `repeat(auto-fit, minmax(${min}, ${max}))`,
        gap: gap,
    };

    return (
        <div style={grid}>
            {children}
        </div>
    );
}

export default Grid;

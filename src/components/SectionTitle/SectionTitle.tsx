import * as React from "react";
import UnderLine from "../UnderLine/UnderLine";

interface SectionTitleProps {
    title: string;
    children?: React.ReactNode;
}

function SectionTitle({title}: SectionTitleProps) {
    return (
        <>
            <p className="text-3xl mb-1">{title}</p>
            <UnderLine/>
        </>
    )
}


export default SectionTitle;

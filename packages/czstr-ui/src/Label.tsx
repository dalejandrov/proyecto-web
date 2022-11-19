import React from "react"

const Label = (props: {
    text: string;
    htmlFor: string;
    requiered?: string;
}) => {
    const { text, requiered, htmlFor } = props;

    return <>
        <label htmlFor="{htmlFor}">
            <span className="font-bold">{text}</span>
            {requiered && <span className="text-red-700">*</span>}
        </label>
    </>
};

export default Label;

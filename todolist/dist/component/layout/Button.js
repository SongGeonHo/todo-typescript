import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import classNames from "classnames";
const sizeMap = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4",
};
const GradientButton = ({ text, onClick, size = "md", disabled = false, }) => {
    return (_jsx("button", { onClick: onClick, disabled: disabled, className: classNames("rounded-full font-semibold text-white shadow-md transition transform duration-300", "bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500", "hover:shadow-xl hover:scale-105 hover:brightness-110", "disabled:opacity-50 disabled:cursor-not-allowed", sizeMap[size]), children: text }));
};
export default GradientButton;

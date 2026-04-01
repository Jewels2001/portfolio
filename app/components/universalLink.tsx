import type { PropsWithChildren } from "react";
import { Link, type LinkProps } from "react-router";

interface UniversalLinkProps extends PropsWithChildren<LinkProps> {}

// we can use `to` as a specific prop ... LinkProps defines to
// to is just our link we are passing in
// children is the html/css/webpage/etc passing in
// props is anything else passed in, ie styling for the link 
const UniversalLink = ({to, children, ...props}: UniversalLinkProps) => {
    // check if external (web) link [not checking for emails here]
    // we check typeof to bc it can also be a Location Object (or a string)
    const isExternal = 
    typeof to === "string" && /^https?:\/\//.test(to)

    if (isExternal) {
        return (<a href={to} rel="noreferrer" {...props}>
                    {children}
                </a>
        );
    }

    return (
        <Link to={to} {...props}>
            {children}
        </Link>
    );
};

export default UniversalLink;
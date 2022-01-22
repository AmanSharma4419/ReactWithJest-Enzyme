import React from "react";
import "./style.scss"

const HeadLine = ({heading}) => {
    if (!heading) {
        return null;
    }
return (
    <>
    <section className="post-section" data-test="post-section">
        <div>
            <h2 className="post-headline" data-test="post-headline">{heading}</h2>
            <p className="post-content" data-test="post-content">You can read the latest post below...</p>
        </div>
    </section>
    </>
)
}

export default HeadLine;
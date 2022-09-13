import React from "react";
import Layouts from "../../src/components/layouts";
const About = () => {
    return (
        <div>
            123
        </div>
    )
}

export default About

About.getLayout = function getLayout(page :any) {
    return (
        <Layouts>{page}</Layouts>
    )
}
import React from "react";
import Layouts from "../../src/components/layouts";
const Image = () => {
    return (
        <div>
            abcdsc
        </div>
    )
}

export default Image

Image.getLayout = function getLayout(page :any) {
    return (
        <Layouts>{page}</Layouts>
    )
}
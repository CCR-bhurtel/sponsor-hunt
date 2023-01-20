import React from 'react';

function ContentWrapper(props) {
    return (
        <div className="content  flex items-center justify-center ">
            <div className="content-wrapper content-wrapper max-w-[300px] usm:max-w-[350px] md:max-w-[550px] lg:max-w-[720px]">
                {props.children}
            </div>
        </div>
    );
}

export default ContentWrapper;

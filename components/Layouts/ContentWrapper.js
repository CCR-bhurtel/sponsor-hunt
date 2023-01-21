import React from 'react';

function ContentWrapper(props) {
    return (
        <div className="content  flex items-center justify-center ">
            <div className="content-wrapper content-wrapper max-w-[305px] lsm:max-w-[350px] usm:max-w-[365px] md:max-w-[550px] lg:max-w-[720px]">
                {props.children}
            </div>
        </div>
    );
}

export default ContentWrapper;

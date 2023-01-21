import React from 'react';

function ContentWrapper(props) {
    return (
        <div className="content  flex items-center justify-center ">
            <div className="content-wrapper content-wrapper w-[310px] lsm:w-[373px] usm:w-[365px] md:w-[550px] lg:w-[720px]">
                {props.children}
            </div>
        </div>
    );
}

export default ContentWrapper;

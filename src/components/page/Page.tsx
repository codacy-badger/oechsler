import React, { ReactNode, Children } from 'react';

interface PageProps {
    background?: string;

    children?: ReactNode;
}

const Page = (props: PageProps) => {
    return (
        <div
            className='w-screen bg-cover bg-center'
            style={{ backgroundImage: `url(${props.background})` }}>
            <div className='mx-auto py-24 px-40 max-w-6xl'>
                {props.children}
            </div>
        </div>
    );
};

export { Page };

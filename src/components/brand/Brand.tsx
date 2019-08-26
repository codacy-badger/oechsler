import React from 'react';

interface BrandProps {
    size: string;
    color?: string;
}

const Brand = (props: BrandProps) => {
    return (
        <span
            className={`font-lato font-light text-${props.size} text-${
                props.color
            }`}>
            <strong className='font-semibold'>Oechsler</strong>.it
        </span>
    );
};

export { Brand };

import React from 'react';

const Elevator = () => {
    return (
        <>
            <img
                src='https://secure.gravatar.com/avatar/760c95a88c6d3a3607c12730ca89c792?size=1024'
                alt='Gravatar image'
                className='w-72 rounded-full'
            />
            <h2
                className='pt-8 font-pacifico font-bold text-5xl text-white'
                style={{ transform: 'rotateZ(-2.5deg)' }}>
                Samuel Oechsler
            </h2>
            <h3 className='pt-4 font-lato text-base text-white'>
                <strong>20.</strong> Student, developer{' '}
                <a href='#' className='opacity-75 hover:opacity-100 font-lato'>
                    @medialesson
                </a>
                .
            </h3>
        </>
    );
};

export { Elevator };

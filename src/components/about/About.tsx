import React, { ReactNode } from 'react';

interface AboutProps {
    children?: ReactNode;
}

const About = (props: AboutProps) => {
    return (
        <div className='flex'>
            <div className='w-3/4 pr-2'>
                <h1 className='text-3xl font-semibold'>About me.</h1>
                <p className='mt-2 text-justify'>
                    <strong>I'm a computer science student</strong> at
                    Baden-Wuerttemberg Cooperative State University in Karlsruhe
                    and work for medialesson GmbH in Pforzheim. During my spare
                    time I like to create awesome apps. You can find a selection
                    of my already released projects below, other stuff can be
                    found on GitHub.
                </p>
                <h2 className='mt-6 text-xl font-semibold'>Languages</h2>
                <div className='mt-4'>
                    <i className='devicons devicons-react text-5xl mr-2' />
                    <i className='devicons devicons-sass text-5xl mx-2' />
                    <i className='devicons devicons-go text-5xl mx-2' />
                    <i className='devicons devicons-swift text-5xl mx-2' />
                    <i className='devicons devicons-visualstudio text-5xl mx-2' />
                    <i className='devicons devicons-docker text-5xl ml-2' />
                </div>
            </div>
            <div className='w-1/4 pl-2'>
                <div className='float-right'>
                    <div>
                        <p>
                            <strong>Samuel Oechsler</strong>
                        </p>
                        <p>Spichernstraße 22</p>
                        <p>75173 Pforzheim</p>
                    </div>
                    <div className='mt-4'>
                        <p>
                            Mail: <a href='#'>you@oechsler.it</a>
                        </p>
                        <p>
                            Phone: <a href='#'>07231 4709400</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { About };

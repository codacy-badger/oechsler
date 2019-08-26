import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface NavigationItemProps {
    href: string;
    text: string;
}

const NavigationItem = (props: NavigationItemProps) => {
    const renderItem = () => {
        return (
            <div className='text-sm text-white opacity-75 hover:opacity-100 font-lato'>
                {props.text}
            </div>
        );
    };

    const renderAnchor = () => {
        return <a href={props.href}>{renderItem()}</a>;
    };

    const renderLink = () => {
        return <Link to={props.href}>{renderItem()}</Link>;
    };

    return (
        <div className='pl-6'>
            {props.href.startsWith('#') ? renderAnchor() : renderLink()}
        </div>
    );
};

export { NavigationItem };

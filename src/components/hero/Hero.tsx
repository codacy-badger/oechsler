import React, { ReactNode } from 'react';
import { typeFilter } from '../../utils/typeFilter';
import { Navigation } from '../navigation/Navigation';
import { isNullOrUndefined } from 'util';
import { Elevator } from '../elevator/Elevator';

interface HeroProps {
    background?: string;
    blur?: number;
    opacity?: number;
    scale?: number;
    scroll?: number;

    children?: ReactNode;
}

const Hero = (props: HeroProps) => {
    const renderNavigation = () => {
        if (isNullOrUndefined(props.children)) return;
        return typeFilter(props.children, [Navigation]);
    };

    const renderElevator = () => {
        if (isNullOrUndefined(props.children)) return;
        return typeFilter(props.children, [Elevator]);
    };

    return (
        <div className='w-screen h-screen relative bg-orange'>
            <div
                className='w-full h-full absolute bg-center bg-cover z-0'
                style={{
                    backgroundImage: `url(${props.background})`,
                    backgroundPositionY: `-${props.scroll}px`,
                    backgroundSize: `calc(100% * ${props.scale})`,
                    filter: `blur(${props.blur}px)`,
                    opacity: props.opacity,
                }}
            />
            <div className='w-full h-full absolute z-10 p-2'>
                <div className='w-full absolute'>{renderNavigation()}</div>
                <div className='h-full flex flex-col justify-center items-center'>
                    {renderElevator()}
                </div>
            </div>
        </div>
    );
};

export { Hero };

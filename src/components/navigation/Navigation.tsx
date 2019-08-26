import React, { ReactNode } from 'react';
import { NavigationItem } from './NavigationItem';
import { Brand } from '../brand/Brand';
import { typeFilter } from '../../utils/typeFilter';

interface NavigationProps {
    children?: ReactNode;
}

const Navigation = (props: NavigationProps) => {
    return (
        <div className='container mx-auto'>
            <div className='h-20 flex items-center'>
                <Brand size='2xl' color='white' />
                <div className='w-full flex justify-end'>
                    {typeFilter(props.children, [NavigationItem])}
                </div>
            </div>
        </div>
    );
};

Navigation.Item = NavigationItem;
export { Navigation };

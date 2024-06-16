import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
    link: string;
    svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    children: string;
}

const Card: React.FC<CardProps> = ({ link, svg: Image, children }) => {
    return (
        <div className='card'>
            <Link to={link}>
                <div className='image-card'>
                    <Image className='svg-icon' />
                </div>
                <p>{children}</p>
            </Link>
        </div>
    )
}

export default Card;

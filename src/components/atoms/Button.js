import React,{FC} from 'react';

interface ButtonProps {
   onClick?: () => void;
    buttonTitle?: string;

}
export const Button:FC<ButtonProps> = ({onClick = () => {}, buttonTitle=''}) => {
    return(
        <div className={'a-button'} onClick={onClick}>
            <span className={'a-button--title'}>{buttonTitle}</span>
        </div>
    )
}
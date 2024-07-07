import React from 'react'

interface Props {
    stroke: string;
}

const Formula1Svg: React.FC<Props> = ({ stroke }) => {
    return (
        <svg viewBox="0 0 24 24" fill="none" height="24" width="24" xmlns="http://www.w3.org/2000/svg" aria-label="" className="tw-stroke-n-28-cloud-burst sport-picker__item__icon-sport kz-icon kz-icon-s">
            <path xmlns="http://www.w3.org/2000/svg" stroke={stroke} stroke-miterlimit="10" stroke-width="1.5" d="M5.04348 17.5H2.43478C2.19466 17.5 2 17.3054 2 17.0653V11.8479C2 11.6077 2.19466 11.4131 2.43478 11.4131H5.04348C5.2836 11.4131 5.47826 11.6077 5.47826 11.8479V17.0653C5.47826 17.3054 5.2836 17.5 5.04348 17.5zM21.565 17.5H18.9563C18.7161 17.5 18.5215 17.3054 18.5215 17.0653V11.8479C18.5215 11.6077 18.7161 11.4131 18.9563 11.4131H21.565C21.8051 11.4131 21.9997 11.6077 21.9997 11.8479V17.0653C21.9997 17.3054 21.8051 17.5 21.565 17.5zM10 10H7.43478C7.19466 10 7 9.80534 7 9.56522V7.43478C7 7.19466 7.19466 7 7.43478 7H16.5652C16.8053 7 17 7.19466 17 7.43478V9.56522C17 9.80534 16.8053 10 16.5652 10H14"></path>
            <path xmlns="http://www.w3.org/2000/svg" stroke={stroke} stroke-miterlimit="10" stroke-width="1.5" d="M11.9999 9C11.0393 9 10.2607 9.7787 10.2607 10.7391V13.3478H13.739V10.7391C13.739 9.7787 12.9604 9 11.9999 9zM5.47852 16.1957H18.522M5.47852 14.0217H9.10976L10.2611 16.1956M18.5219 14.0217H14.8906L13.7393 16.1956"></path>
        </svg>
    )
}

export default Formula1Svg
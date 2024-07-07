import React from 'react'

interface Props {
    stroke: string;
}

const BasketballSvg: React.FC<Props> = ({ stroke }) => {
    return (
        <svg viewBox="0 0 24 24" fill="none" height="24" width="24" xmlns="http://www.w3.org/2000/svg" aria-label="" className="tw-stroke-n-28-cloud-burst sport-picker__item__icon-sport kz-icon kz-icon-s">
            <path xmlns="http://www.w3.org/2000/svg" stroke={stroke} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.50002" d="M2.62793 12.0003C2.62793 14.4867 3.61566 16.8713 5.37383 18.6295 7.132 20.3877 9.5166 21.3754 12.003 21.3754 14.4895 21.3754 16.8741 20.3877 18.6322 18.6295 20.3904 16.8713 21.3781 14.4867 21.3781 12.0003 21.3781 9.51387 20.3904 7.12927 18.6322 5.3711 16.8741 3.61293 14.4895 2.6252 12.003 2.6252 9.5166 2.6252 7.132 3.61293 5.37383 5.3711 3.61566 7.12927 2.62793 9.51387 2.62793 12.0003zM5.14746 18.3962C6.28997 14.932 9.78501 7.40359 18.9193 5.67191M5.00195 5.76691C8.73866 7.12775 15.7287 10.8336 17.1946 19.8171"></path>
            <path xmlns="http://www.w3.org/2000/svg" stroke={stroke} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.50002" d="M10.7723 2.70522C10.8204 3.72495 10.6425 4.74271 10.2516 5.68574 9.86058 6.62877 9.26611 7.47379 8.51063 8.1604 7.75516 8.84701 6.85733 9.35825 5.88134 9.65758 4.90534 9.95691 3.87527 10.0369 2.86475 9.89196M11.8272 21.3737C7.93554 15.132 15.2264 7.97526 21.3748 11.8261"></path>
        </svg>

    )
}

export default BasketballSvg
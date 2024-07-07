import React from 'react'

interface Props {
    stroke: string;
}

const TennisSvg: React.FC<Props> = ({ stroke }) => {
    return (
        <svg viewBox="0 0 24 24" fill="none" height="24" width="24" xmlns="http://www.w3.org/2000/svg" aria-label="" className="tw-stroke-n-28-cloud-burst sport-picker__item__icon-sport kz-icon kz-icon-s">
            <path xmlns="http://www.w3.org/2000/svg" stroke={stroke} stroke-linecap="round" stroke-width="1.36923" d="M18.0005 5.42546C18.0005 5.42546 15.7396 7.94619 13.9123 8.29751 12.1788 8.63079 11.1437 8.6887 9.41843 8.29751 7.78053 7.92614 5.42387 5.94949 5.42387 5.94949M18.0005 18.002C18.0005 18.002 15.7396 15.4813 13.9123 15.13 12.1788 14.7967 11.1437 14.7388 9.41843 15.13 7.78053 15.5013 5.42387 17.478 5.42387 17.478"></path>
            <path xmlns="http://www.w3.org/2000/svg" stroke={stroke} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.50002" d="M2.81543 12.0001C2.81543 14.4359 3.78304 16.7719 5.5054 18.4943C7.22775 20.2166 9.56377 21.1842 11.9996 21.1842C14.4353 21.1842 16.7714 20.2166 18.4937 18.4943C20.2161 16.7719 21.1837 14.4359 21.1837 12.0001C21.1837 9.56434 20.2161 7.22832 18.4937 5.50596C16.7714 3.7836 14.4353 2.81599 11.9996 2.81599C9.56377 2.81599 7.22775 3.7836 5.5054 5.50596C3.78304 7.22832 2.81543 9.56434 2.81543 12.0001Z"></path>
        </svg>
    )
}

export default TennisSvg
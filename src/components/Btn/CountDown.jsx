import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Countdown = ({ initialMinutes = 1, initialSeconds = 30 }) => {
    const navigate = useNavigate()
    const [minutes, setMinutes] = useState(initialMinutes);
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        const timerId = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else if (minutes > 0) {
                setMinutes(minutes - 1);
                setSeconds(59);
            } else {
                clearInterval(timerId);
                navigate("/")
            }
        }, 1000);

        return () => clearInterval(timerId);
    }, [minutes, seconds]);

    return (
        <div>
            {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
        </div>
    );
};

export default Countdown;

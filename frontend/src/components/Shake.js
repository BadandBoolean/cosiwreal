import { useSpring, animated } from '@react-spring/web'
import { useState, useEffect } from 'react'

const Shake = ({ rotation = 0, timing = 150, children }) => {
    const [isShaken, setIsShaken] = useState(false);

    const style = useSpring({
        display: 'inline-block',
        cursor: 'pointer',
        backfaceVisibility: 'hidden',
        transform: isShaken
            ? `rotate(${rotation}deg)`
            : `rotate(0deg)`,
        config: {
            tension: 300,
            friction: 10,
        },
    });

    useEffect(() => {
        if (!isShaken) {
            return;
        }

        const timeoutId = window.setTimeout(() => {
            setIsShaken(false);
        }, timing);

        return () => {
            window.clearTimeout(timeoutId);
        };


    }, [isShaken, timing]);

    const trigger = () => {
        setIsShaken(true);
    };

    return (
        <animated.span onMouseEnter={trigger} style={style}>
            {children}
        </animated.span>
    );
};

export default Shake;
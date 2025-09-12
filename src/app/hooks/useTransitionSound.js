import { useEffect, useRef } from "react";

const useTransitionSound = (src = "/sounds/transition.m4a") => {
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current = new Audio(src);
    }, [src]);

    const playTransition = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }
    };

    return playTransition;
};

export default useTransitionSound;
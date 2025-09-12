import { useEffect, useRef } from "react";

const useSendSound = (src = "/sounds/send.m4a") => {
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current = new Audio(src);
    }, [src]);

    const playSend = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }
    };

    return playSend;
};

export default useSendSound;
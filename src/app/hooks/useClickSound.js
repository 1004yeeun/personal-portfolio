import { useEffect, useRef } from "react";

const useClickSound = (src = "/sounds/click.mp3") => {
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current = new Audio(src);
    }, [src]);

    const playClick = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }
    };

    return playClick;
};

export default useClickSound;
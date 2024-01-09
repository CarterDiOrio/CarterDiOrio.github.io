import * as React from "react";

/**
 * A hook for using the x and y mouse position
 */
const useMousePosition = () => {
    const [mousePosition, setMousePosition] = React.useState<{
        x: number;
        y: number;
    }>({ x: 0, y: 0 });

    const update = (event: MouseEvent) => {
        setMousePosition({
            x: event.clientX,
            y: event.clientY,
        });
    };

    React.useEffect(() => {
        window.addEventListener("mousemove", update);
        return () => {
            window.removeEventListener("mousemove", update);
        };
    }, []);

    return mousePosition;
};

export default useMousePosition;

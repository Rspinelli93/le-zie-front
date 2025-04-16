import { useRef } from "react";

export default function useImageZoom(zoom = 2) {
    const containerRef = useRef(null);
    const imgRef = useRef(null);

    const handleMouseMove = (e) => {
        const container = containerRef.current;
        const img = imgRef.current;

        if (!container || !img) return;

        const rect = container.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        img.style.transformOrigin = `${x}% ${y}%`;
        img.style.transform = `scale(${zoom})`;
    };

    const handleMouseLeave = () => {
        const img = imgRef.current;
        if (img) {
        img.style.transform = "scale(1)";
        img.style.transformOrigin = "center center";
        }
    };

    return {
        containerRef,
        imgRef,
        handleMouseMove,
        handleMouseLeave,
    };
}

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./scrol.scss"
export default function Scrol() {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) { // показывать кнопку после 300px прокрутки
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" }); // плавный скролл наверх
    };

    return (
        <div className={`scroll-to-top ${visible ? "show" : ""}`} onClick={scrollToTop}>
            <FaArrowUp />
        </div>
    )
}
import { ThemeContext } from "../context/ThemeContext"
import { useContext } from "react"
import ThemeToggle from "../components/ThemeToggle"
import DockButton from "./DockButton";
import SvgIcon from "./SvgIcon";
import Github from "../assets/icons/github.svg?react";
import Linkedin from "../assets/icons/linkedin.svg?react";
import Mail from "../assets/icons/mail.svg?react";
import ArrowUp from "../assets/icons/arrowup.svg?react"

const Dock = ({ ...props }) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="dock" {...props} >
            <DockButton data-tooltip-content="Back To Top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <SvgIcon icon={ArrowUp}/>
            </DockButton>
            <DockButton data-tooltip-content="Github" >
                <SvgIcon icon={Github} target="_blank" to="https://github.com/chabao18" />
            </DockButton>
            <DockButton data-tooltip-content="Linkedin">
                <SvgIcon icon={Linkedin} target="_blank" to="https://www.linkedin.com/in/zhixiong-lu-86b9a6281/" />
            </DockButton>
            <DockButton data-tooltip-content="Mail">
                <SvgIcon icon={Mail} target="_blank" to="mailto:zhixiong-lu@outlook.com" />
            </DockButton>
            <DockButton data-tooltip-content="Theme" onClick={toggleTheme}>
                <ThemeToggle theme={theme} />
            </DockButton>
        </div>
    );
};

export default Dock;

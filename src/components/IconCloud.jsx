import { ThemeContext } from "../context/ThemeContext"
import { useContext } from "react"
import { Cloud, renderSimpleIcon } from 'react-icon-cloud';
import { siPython, siHtml5, siCss3, siJavascript, siReact, siVercel, siTailwindcss, siFastapi, siNodedotjs, siMysql, siPostgresql, siMongodb, siRedis, siAmazonwebservices, siDocker, siGit, siOpenai, siRabbitmq, siExpress, siKubernetes, siGithub, siGrafana, siGo} from 'simple-icons';

const cloudIcons = [siPython, siHtml5, siCss3, siJavascript, siReact, siVercel, siTailwindcss, siFastapi, siNodedotjs, siMysql, siPostgresql, siMongodb, siRedis, siAmazonwebservices, siDocker, siGit, siOpenai, siRabbitmq, siExpress, siKubernetes, siGithub, siGrafana, siGo];


const IconCloud = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const icons = [...cloudIcons].map((icon) => {
        return renderSimpleIcon({
            minContrastRatio: 21,
            fallbackHex: (theme == 'dark') ? '#fff' : '#000',
            icon,
            size: 72,
            aProps: {
                onClick: (e) => e.preventDefault()
            }
        })
    });

    return (<>
        <Cloud options={{
            activeAudio: false,
            outlineMethod: 'none',
            wheelZoom: false,
            initial: [0.1, 0.1],
            minSpeed: 0.01,
            clickToFront: 500,
            reverse: true,
        }}
            containerProps={{
                className: 'icon-cloud'
            }}
        >
            {icons}
        </Cloud>
    </>);
};

export default IconCloud;

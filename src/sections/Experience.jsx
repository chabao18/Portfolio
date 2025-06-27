import Opensource from '../assets/opensource.svg?react';
import '../styles/experience.css';
import Timeline from '../components/Timeline';
import TimelineItem from '../components/TimelineItem';
import { TimeStamp } from '../components/TimelineItem';
import ByteDance from '../assets/icons/bytedance.svg?react'
import KNQ from '../assets/icons/knq.jpeg'


export default function Experience() {
    return (
        <div className='experience-section section' style={{ paddingBottom: '0' }}>
            <h2>Experience</h2>
            <div className='experience'>
                <div className="illustration">
                    <Opensource />
                </div>
                <div className='details'>
                    <h3>Internships</h3>
                    <p>After graduating with a bachelor's degree, I took a gap year to explore industry opportunities through hands-on internships, during which I gained valuable practical experience and deepened my understanding of real-world applications.</p>
                    <Timeline>
                        <TimelineItem icon={<img src={KNQ} />} to="https://knq.ai/">
                            <h4>KNQ.AI, Full Stack Developer</h4>
                            <TimeStamp stamp="Feb 2025 - July 2025"/>
                            <p>Developed an AI-powered commentary platform for the Hong Kong Jockey Club, delivering intelligent race insights in real time. </p>
                        </TimelineItem>
                        <TimelineItem icon={<ByteDance />} to="https://www.bytedance.com/en/">
                            <h4>ByteDance, Backend Developer</h4>
                            <TimeStamp stamp="Aug 2024 - Dec 2024" />
                            <p>Designed and implemented an automated content moderation pipeline to provide content safety support for TikTok and CapCut users.</p>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
            {/* <div className='experience reverse'>
                <div className='details'>
                    <h3>Open Source Contribution</h3>
                    <p>Actively contributed to open-source projects by developing new features, resolving issues, and enhancing documentation. Engaged with the community through code reviews and discussions to drive improvements.</p>
                    <Timeline>
                        <TimelineItem icon={<Github />} color="#0745a3" to="https://github.com">
                            <h4>Github</h4>
                            <TimeStamp stamp="2022 - now" />
                            <p>Maintained and contributed to repositories, collaborating on code, issues, and pull requests.</p>
                        </TimelineItem>
                    </Timeline>
                </div>

            </div> */}
        </div>
    )
}

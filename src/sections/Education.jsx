import Timeline from '../components/Timeline';
import TimelineItem from '../components/TimelineItem';
import { TimeStamp } from '../components/TimelineItem';
import Learning from '../assets/learning.svg?react';
import UCD from '../assets/icons/ucd.svg?react'
import BUPT from '../assets/icons/bupt.jpg'
import '../styles/education.css';

export default function Education() {
    return (
        <div className='section education-section'>
            <h2>Education</h2>
            <div className='education reverse'>

                <div className='details'>
                    <Timeline>
                        <TimelineItem icon={<UCD />} bgColor="#444444">
                            <h4>Univeristy College Dublin</h4>
                            <TimeStamp stamp="2025 - 2026 (Expected)" />
                            <p>Current GPA: (upcoming)</p>
                        </TimelineItem>
                        <TimelineItem icon={<img src={BUPT} />} bgColor="#444444">
                            <h4>Beijing University of Posts and Telecommunications</h4>
                            <TimeStamp stamp="2020 - 2024" />
                            <p>GPA: 87</p>
                            <p>Rank: top 20%</p>
                        </TimelineItem>
                    </Timeline>
                </div>
                                <div className="illustration">
                    <Learning />
                </div>
            </div>
        </div>
    )
}

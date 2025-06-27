import { Button1 } from '../components/Buttons'
import Pdf from "../assets/icons/pdf.svg?react";
import SvgIcon from '../components/SvgIcon';

export default function About() {


  return (
    <div className='about-section section'>
      <h2>About</h2>
      <p>
        I'm a first-year CS grad student who loves building software. I have gained a year of valuable real-world experience through my internships. My tech stack includes mainly <a>Java Spring Boot</a> and some <a>MERN</a> stack development. These days, I'm really into AI and exploring AI agent applications. Looking for <a>Software Development Engineer</a> opportunities where I can code, learn, and work on cool projects.
      </p>
      <p>Let’s build something great! ✨</p>
      {/* TODO 添加在线简历地址 */}
      <a href="" target='_blank'>
        <Button1>
          <SvgIcon icon={Pdf} />
          Resume
        </Button1>
      </a>
    </div>
  )
}

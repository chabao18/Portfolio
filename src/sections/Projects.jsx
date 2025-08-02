import '../styles/projects.css'
import ProjectCard, { Holder, Content, Tags, Tag, CardActions } from '../components/ProjectCard'
import neotubeImg from '../assets/neotube.png'
import sysImg from '../assets/sys.png'

export default function Projects() {
  return (
    <div className='section projects-section'>
      <h2>Projects</h2>
      <Holder>
        <ProjectCard>
          <img src={neotubeImg} alt='Neo-Tube' />
          <Content>
            <h3>Neo-Tube</h3>
            <p>NeoTube is a modern YouTube clone built to replicate the core functionality of the popular video-sharing platform.</p>
            <Tags>
              <Tag hashtag="React" />
              <Tag hashtag="Nextjs" />
              <Tag hashtag="shadcn/ui" />
              <Tag hashtag="Tailwind Css" />
              <Tag hashtag="PostgreSQL" />
            </Tags>
          </Content>
          <CardActions visit="https://neo-tube-nu.vercel.app" source="https://github.com/chabao18/NeoTube" />
        </ProjectCard>
        <ProjectCard>
          <img src={sysImg} alt='YATU' />
          <Content>
            <h3>YATU: Yet Another TinyURL</h3>
            <p>A modern, scalable, and high-performance URL Shortening Service built using Java 17, Spring Boot 3, and Spring Cloud Microservices Architecture.</p>
            <Tags>
              <Tag hashtag="Java" />
              <Tag hashtag="Spring Boot" />
              <Tag hashtag="Srping Cloud" />
              <Tag hashtag="Redis" />
            </Tags>
          </Content>
          <CardActions source="https://github.com/chabao18/Yet-Another-TinyURL" />
        </ProjectCard>
      </Holder>
    </div>
  )
}

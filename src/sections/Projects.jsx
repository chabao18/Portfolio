import '../styles/projects.css'
import ProjectCard, { Holder, Content, Tags, Tag, CardActions } from '../components/ProjectCard'

export default function Projects() {
  return (
    <div className='section projects-section'>
      <h2>Projects</h2>
      <Holder>
        <ProjectCard>
          <img src='' alt='Neo-Tube' />
          <Content>
            <h3>Neo-Tube</h3>
            <p>todo</p>
            <Tags>
              <Tag hashtag="React" />
              <Tag hashtag="Nextjs" />
              <Tag hashtag="shadcn/ui" />
              <Tag hashtag="Tailwind Css" />
              <Tag hashtag="PostgreSQL" />
            </Tags>
          </Content>
          <CardActions visit="x" source="x" />
        </ProjectCard>
        <ProjectCard>
          <img src='src/assets/sys.png' alt='YATU' />
          <Content>
            <h3>YATU: Yet Another TinyURL</h3>
            <p>todo</p>
            <Tags>
              <Tag hashtag="Java" />
              <Tag hashtag="Spring Boot" />
              <Tag hashtag="Srping Cloud" />
              <Tag hashtag="Redis" />
            </Tags>
          </Content>
          <CardActions source="x" />
        </ProjectCard>
      </Holder>
    </div>
  )
}

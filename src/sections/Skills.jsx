import SkillCard from '../components/SkillCard'

export default function Skills() {

    return (
        <div className='skills-section section'>
            <h2>Skills</h2>
            <SkillCard heading='Frontend' skills={[
                { 'name': 'HTML', 'icon': 'html5' },
                { 'name': 'CSS', 'icon': 'css3' },
                { 'name': 'JavaScript', 'icon': 'javascript' },
                { 'name': 'React', 'icon': 'react' },
                { 'name': 'Next.js', 'icon': 'nextjs'},
                { 'name': 'Tailwind CSS', 'icon': 'tailwindcss' },
            ]} />
            <SkillCard heading='Backend' hcolor="var(--clr-accent2)" skills={[
                { 'name': 'Java', 'icon': 'java' },
                { 'name': 'Spring', 'icon': 'spring' },
                { 'name': 'Python', 'icon': 'python' },
                { 'name': 'FastAPI', 'icon': 'fastapi' },
                { 'name': 'Node.js', 'icon': 'nodejs' },
                { 'name': 'SQL', 'icon': 'sqldeveloper'},
            ]} />
            <SkillCard heading='Tools' hcolor="var(--clr-accent3)" skills={[
                { 'name': 'Git', 'icon': 'git' },
                { 'name': 'GitHub Actions', 'icon': 'githubactions' },
                { 'name': 'Docker', 'icon': 'docker' },
                { 'name': 'Postman', 'icon': 'postman' },
                { 'name': 'Kubernetes', 'icon': 'kubernetes' },
            ]} />
        </div>
    )
}

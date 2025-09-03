import Sparkles from '../components/Sparkles'
import '../styles/contact.css'

export default function Contact() {
    return (
        <div className='section contact-section'>
            <h2>Contact</h2>
            <div className='heading-center'>
                <Sparkles>
                    <h1>Get In Touch</h1>
                </Sparkles>
            </div>
            <p className='contact-text'>
                Have questions? Ping me with a <a href="https://linkedin.com/in/spencer-lu-86b9a6281">linkedin</a> DM or email at <a href='mailto:zhixiong-lu@outlook.com'>zhixiong-lu@outlook.com</a>.
            </p>
        </div >
    )
}

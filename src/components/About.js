import React, { useState } from 'react'

export default function About(props) {
    
    return (
        <div className='container' style={{ color: props.mode === 'light' ? '#110735' : 'white' }}> {/*style={mystyle}*/}
            <h2>About us</h2>
            <div class="accordion" id="accordionExample" >
                <div class="accordion-item" >
                    <h2 class="accordion-header">
                        <button class="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            What is <strong> TextUtils</strong>?
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample" >
                        <div class="accordion-body" style={{ color: props.mode === 'dark' ? '#110735' : 'dark' }}>
                            TextUtils is a versatile React application designed to streamline text manipulation tasks with ease. Whether you need to convert text to uppercase or lowercase, clear unnecessary formatting, or even have the text spoken aloud, textutils offers a straightforward solution. Its user-friendly interface makes it accessible for anyone needing to quickly modify or interact with text. Whether you're a writer, editor, student, or simply someone who works with text regularly, textutils aims to simplify your workflow and enhance your productivity.<br/>
                            <strong>By Abhinav Goyal</strong>
                        </div>
                    </div>
                </div>
                <div class="accordion-item" >
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            What is the purpose of it?
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body" style={{ color: props.mode === 'light' ? '#110735' : 'white' }}>
                            The purpose of textutils is to provide a convenient and efficient tool for manipulating text in various ways. Whether you need to convert text between uppercase and lowercase, clear formatting, listen to text using text-to-speech functionality, or perform other essential text editing tasks, textutils aims to streamline these processes into a user-friendly interface.
                            Its primary goal is to enhance productivity and ease the workflow of anyone who regularly works with text, such as writers, students, editors, and professionals. By offering a range of text manipulation features in one place, textutils strives to be a versatile solution that simplifies common text-related tasks, making it an indispensable tool for everyday use.
                        </div>
                    </div>
                </div>
                <div class="accordion-item" >
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            What is the tech stack for it?
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body" style={{ color: props.mode === 'light' ? '#110735' : 'white' }}>
                            TextUtils is built using modern web development technologies to ensure a robust and responsive user experience. The primary components of its technology stack include:
                            <ul>
                                <li>
                                    React.js: textutils is developed using React.js, a popular JavaScript library for building user interfaces. React allows for efficient rendering and updating of components, which is ideal for dynamic and interactive applications.
                                </li>
                                <li>
                                    HTML & CSS: Standard HTML5 and CSS3 are used for structuring the content and styling the user interface of textutils. This ensures a clean and visually appealing layout that enhances usability.
                                </li>
                                <li>
                                    JavaScript (ES6+): JavaScript is the core programming language used to add interactivity and functionality to textutils. ES6 (ECMAScript 2015) and newer versions are leveraged to write modern and efficient JavaScript code.
                                </li>
                                <li>
                                    Bootstrap or Material-UI: Depending on the design framework chosen, either Bootstrap or Material-UI is utilized to provide a responsive and mobile-first design approach. These frameworks offer pre-styled components and utilities that help in creating a consistent and user-friendly interface.
                                </li><li>
                                    Speech Synthesis API: For the text-to-speech functionality, textutils utilizes the Speech Synthesis API available in modern web browsers. This API allows converting text into spoken language, enhancing accessibility and usability.
                                </li><li>
                                    Deployment: textutils may be deployed using platforms like Netlify, Vercel, or other cloud hosting services. These platforms provide seamless deployment, scalability, and performance optimization for web applications.
                                </li><li>
                                    Version Control: Git is used for version control, enabling collaborative development and tracking of changes made to the codebase.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <button onClick={togglestyle} type="button" className="btn btn-primary">{btntext}</button> */}
        </div>
    )
}

{
    /*
    const [mystyle, setmystyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })
    const [btntext, setbtntext] = useState('Enable dark mode')
    const togglestyle = () => {
        if (mystyle.color === 'black') {
            setmystyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setbtntext('Enable light mode')
        }
        else {
            setmystyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setbtntext('Enable dark mode')
        }
    }
    */
}
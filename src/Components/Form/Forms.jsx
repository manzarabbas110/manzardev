import React, { useState } from 'react'
import TopDataText from '../Sharedcomponents/TopDataText'
import './Form.css'

const Form = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleInputChange = (e) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value

        })
    }


    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(formData)

        setFormData({
            name: "",
            email: "",
            message: ""
        })

        const subject = encodeURIComponent(formData.name);
        const body = encodeURIComponent(
            `Name: ${formData.name}
            Email: ${formData.email}
            Message: ${formData.message}`
        );

        window.open(
            `https://mail.google.com/mail/?view=cm&fs=1&to=&su=${subject}&body=${body}`,
            "_blank"
        );
    }

    return (
        <div id='contactme'>
            <TopDataText
                topText="Connect with me"
                headingText="Get in touch"
                descText="I'd love to hear messages from you, any questions comments, please use the form below "
            />


            <form onSubmit={handleOnSubmit}>
                <div>
                    <input
                        type='text'
                        className=''
                        id='name'
                        placeholder='Enter your name'
                        onChange={handleInputChange}
                        value={formData.name}
                        name='name'
                    />

                    <input
                        type='email'
                        className=''
                        id='email'
                        placeholder='Enter your email'
                        onChange={handleInputChange}
                        value={formData.email}
                        name='email'
                    />
                </div>

                <input
                    type='text'
                    placeholder='Enter your message'
                    onChange={handleInputChange}
                    value={formData.message}
                    name='message'
                    id='message'
                    className=''
                />

                <button type='submit'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Form
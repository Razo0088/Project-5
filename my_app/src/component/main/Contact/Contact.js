import React from 'react'
import "./contact.scss"
import { FaInstagram, FaFacebookSquare, FaLinkedinIn, FaGithub, FaMapMarkerAlt, FaIdCard } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRegCreditCard, FaPhone } from "react-icons/fa6";
import { useForm } from "react-hook-form"
import { useEffect , } from 'react';

export default function Contact() {
    const item = ['About us', ' Were hiring', 'Support', 'Find store', 'Shipment', 'Payment', 'Gift card', 'Return', 'Help']
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    // const [list,setList] = useState([])
    useEffect(() => {
        const get = () => {
            fetch("http://localhost:5000/message").then((response) => {
                if (!response.ok) {
                    throw new Error("chka patasxan Beckic")
                } return response.json()
            }).then((dataFile) => {

                console.log(dataFile);
                
          
            })
        }
        get()
    }, [])

    const onsubmit = (data) => {
        console.log(data);
        fetch("http://localhost:5000/message", {
            method: "POST",
            body: JSON.stringify({ ...data }),
            headers: { "Content-Type": "application/json" }
        }).then((response) => {
            if (!response.ok) {
                throw new Error("chstacvec poxancel Json")
 }
            alert("Your message has been sent!!!")
            return (response.json())
        }).then((info) => {
            console.log({ ...info });
            reset()
})
}
    return (
        <div className='Contact'>
            <div className='register'>
                <h2>Contact</h2>
                <p>Questions? Go ahead.</p>
                <div className='inp'>
                    <form onSubmit={handleSubmit(onsubmit)}>
                        <input type="text" placeholder='Name'   {...register("Name", { required: "fill in the fields name" })} />
                        {errors.Name && <p style={{ color: "red" }}>{errors.Name.message}</p>}
                        <input type="email" placeholder='Email'{...register("Email", { required: "fill in the fields Email" })} />
                        {errors.Email && <p style={{ color: "red" }}>{errors.Email.message}</p>}
                        <input type="text" placeholder='Subject' {...register("Subject", { required: "fill in the fields Subject" })} />
                        {errors.Subject && <p style={{ color: "red" }}>{errors.Subject.message}</p>}
                        <input type="text" placeholder='Message'  {...register("Message", { required: "fill in the fields Message" })} />
                        {errors.Message && <p style={{ color: "red" }}>{errors.Message.message}</p>}
                        <button type='submit'>Send</button>
                    </form>
                </div>

            </div>
            <div className='find_us' >
                <div className='about'>
                    <h2>About</h2>
                    {item.map((elem, index) => {
                        return <a href="/" key={index}>{elem}</a>
                    })}
                </div>
                <div className='store'>
                    <h2>Store</h2>
                    <a href="/" target="_blank" rel="noreferrer"><FaMapMarkerAlt /> Company Name</a>
                    <a href="/" target="_blank" rel="noreferrer"><FaPhone /> 0044123123</a>
                    <a href="/" target="_blank" rel="noreferrer"> <MdEmail />ex@mail.com</a>
                    <h2> We accept</h2>
                    <a href="/" target="_blank" rel="noreferrer"> <FaIdCard />Amex</a>
                    <a href="/" target="_blank" rel="noreferrer"> <FaRegCreditCard />Credit Card</a>
                    <div className='social'>
                        <a href="https://www.facebook.com/razmik.gevorgyan.639312?locale=ru_RU" rel="noreferrer" target="_blank"><FaFacebookSquare /></a>
                        <a href="https://www.instagram.com/razo_0077/" rel="noreferrer" target="_blank"><FaInstagram /></a>
                        <a href="https://github.com/Razo0088/Project-1" rel="noreferrer" target="_blank"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/%D1%80%D0%B0%D0%B7%D0%BC%D0%B8%D0%BA-%D0%B3%D0%B5%D0%B2%D0%BE%D1%80%D0%B3%D1%8F%D0%BD-98956b242/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

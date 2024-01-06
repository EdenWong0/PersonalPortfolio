import React, { useState } from 'react'

const ContactRight = () => {

    const [userName, setUsername] = useState("");
    const [userPhone, setUserphone] =useState("");
    const [userEmail, setUseremail] =useState("");
    const [userMessage, setUsermessage] =useState("");
    const [errMessage, setErrMessage] =useState("");
    const [succMessage, setSuccMessage] =useState("");

    const emailValidation = () => {
        return String(userEmail)
        .toLocaleLowerCase()
        .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    }

    const phoneValidation = () => {
        // Assuming the Canadian phone number format is (XXX) XXX-XXXX or XXX-XXX-XXXX
        return String(userPhone)
            .match(/^(\([0-9]{3}\)\s*|[0-9]{3}[-.\s]*)[0-9]{3}[-.\s]*[0-9]{4}$/);
    }

    const handleMessage=(e) =>{
        e.preventDefault()
        if(userName === ""){
            setErrMessage("Name is required!");
        }else if(userPhone === "") {
            setErrMessage("Please enter your phone number");
        }else if(!phoneValidation(userPhone)){
            setErrMessage("Please enter a valid phone number!");
        }else if(userEmail === "") {
            setErrMessage("Please enter a your email");
        }else if(!emailValidation(userEmail)){
            setErrMessage("Please enter a valid email!");
        }else if(userMessage === "") {
            setErrMessage("Message is required");
        }else{
            setSuccMessage(`Thank you ${userName}. Message sent successfully!!`)
            setErrMessage("");
            setUsername("");
            setUserphone("");
            setUseremail("");
            setUsermessage("");

        }
    }

  return (
    <div className="w-full lgl:w-[60%] h-full flex flex-col bg-gradient-to-r from-[#595959] to-[#404040] p-4 lgl:p-8 rounded-lg shadow-shadowOne">
        <form className="w-full flex flex-col gap-2 lgl:gap-6 py-2 lgl:py-6">
            {
                errMessage && (<p className="text-lg py-2 bg-gradient-to-r text-center text-red-600 tracking-wide animate-bounce">{errMessage}</p>
            )}
            {
                succMessage && (<p className="text-lg py-2 bg-gradient-to-r text-center text-green-600 tracking-wide animate-bounce">{succMessage}</p>

            )}
            <div className="w-full flex flex-col lgl:flex-row gap-4">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                    <p className="text-md uppercase tracking-wide">Name: </p>
                    <input onChange={(e)=>setUsername(e.target.value)} value={userName} className="contactInput" type="text" />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                    <p className="text-md uppercase tracking-wide">Phone: </p>
                    <input onChange={(e)=>setUserphone(e.target.value)} value={userPhone} className="contactInput" type="text" />
                </div>
            </div>
            <div>
                <p className="text-md uppercase tracking-wide">Email: </p>
                    <input onChange={(e)=>setUseremail(e.target.value)} value={userEmail} className="contactInput" type="email" />
            </div>
            <div>
                <p className="text-md uppercase tracking-wide">Message: </p>
                    <textarea onChange={(e)=>setUsermessage(e.target.value)} value={userMessage} className="contactMessageText" cols="105" rows="10" />
            </div>
            <div className="w-full">
                <button onClick={handleMessage}className="w-full h-12 bg-[#12303b] rounded-lg text-base text-designColor tracking-wide uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent">Send Message</button>
            </div>
        </form>
    </div>
  )
}

export default ContactRight
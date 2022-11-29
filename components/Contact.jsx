import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
        <main>
            <h1>Contact Us</h1>

            <form action="">
                <div>
                    <label htmlFor=""> Name</label>
                    <input type="text" name="" id="" required placeholder='Name' />
                </div>

                <div>
                    <label htmlFor=""> Email</label>
                    <input type="email" name="" id=""  required placeholder='Email'/>
                </div>

                <div>
                    <label htmlFor=""> Message</label>
                    <input type="text" name="" id="" required placeholder='Tell us about anything' />
                </div>

                <button type="submit">Submit</button>


            </form>
        </main>

    </div>
  )
}

export default Contact
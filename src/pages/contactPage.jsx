import React from 'react'
import Layout from '../components/layout'
import "../css/aboutUs.css"

const ContactPage = () => {
  return (
    <Layout>
        <div className='contactFirstSection'/>
        <div className='contactSecondSection'>
            <h2 className='blueTitle'></h2>
            <div>
                <h2></h2>
                <div>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </div>
            <div>
                <form>
                    <input type="text" name='' placeholder=""></input>
                    <input type="text" name='' placeholder=""></input>
                    <input type="text" name='' placeholder=""></input>
                    <input type="text" name='' placeholder=""></input>
                    <input type="text" name='' placeholder=""></input>
                    <input type="text" name='' placeholder=""></input>
                    <input type="text" name='' placeholder=""></input>
                    <input type="text" name='' placeholder=""></input>
                    <select>
                        <option value=""></option>
                    </select>
                    <textarea type="text" name='' placeholder=""/>
                </form>
            </div>
            <p></p>

        </div>
        <div className='contactThirdSection'>
            <h2></h2>
        </div>
        <div className='contact'></div>
        <div className='contact'></div>
    </Layout>
    
  )
}

export default ContactPage


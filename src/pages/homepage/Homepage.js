import React, { useEffect, useState } from 'react'
import "./homepage.css"
import axios from 'axios'
import { format } from 'date-and-time'
import Topbar from '../../components/Topbar/Topbar'
import { useNavigate } from 'react-router-dom'

function Homepage() {
    const [news,setNews]=useState([])
    const nav=useNavigate()

    useEffect(()=>{
        getNews()
    },[])

    const getNews=async()=>{
        try {
            const {data}=await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2023-08-14&sortBy=publishedAt&apiKey=4ea3185d923542d59fb9cb004ed58668")
            setNews(data.articles)
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <div className='homeContainer'>
        <Topbar/>
        <div className='homeCard'>
            {
                news.map((item)=>{
                    // console.log(format(item.publishedAt))
                    return(
                        <div className='card'>
                            <div className='cardTop'>
                                <div className='cardTopLeft'>
                                    <img className='homeImage' src={item.urlToImage}/>
                                </div>
                                <div  className='cardTopRight'>
                                    <h5><span className='spanHome'>Author : </span>{item.author}</h5>
                                    <h6><span className='spanHome'>Publised At : </span>{item.publishedAt}</h6>
                                    <p><span className='spanHome'>Content : </span> {item.content}</p>
                                </div>
                            </div>
                            <div>
                                <p><span className='spanHome'>Description : </span>{item.description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Homepage
import React, { useEffect, useState } from 'react'

export default function News() {
    const [news, setnews] = useState([])
    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=c1fb00d93f4740a2981338371d25fb1d')
            .then(response => response.json())
            .then(data => setnews(data.articles));
    }, [])

    return (
        <>
            <div className="columns is-mobile is-multiline is-centered" 
            style={{marginTop : "50px", marginLeft : "30px", marginRight : "10px"}}>
                {news.map(x => (
                    <div className="column">
                        <div class="card" style={{ width: "300px" }}>
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src={x.urlToImage} alt="title" />
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-content">
                                    <a href={x.url} 
                                    target="_blank" className="title is-4">{x.title}</a>
                                    </div>
                                </div>

                                <div class="content">
                                    {x.source.name} ({x.author})
                                    <br></br>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </>
    )
}

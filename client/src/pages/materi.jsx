import React, {useState} from 'react'

export default function Materi() {
    const [status, setstatus] = useState("video")

    const setVideo = () => {
        setstatus("video")
    }

    const setArticle = () => {
        setstatus("article")
    }
    return (
        <>
            <article class="panel is-primary">
                <p class="panel-heading">
                    Materi Pembelajaran
                </p>
                <p class="panel-tabs">
                   {status === "video" ? <a className="is-active" onClick={setVideo}>Video</a> : <a onClick={setVideo}>Video</a> }
                   {status === "article" ? <a className="is-active" onClick={setArticle}>Article</a> : <a onClick={setArticle}>Article</a> }
                </p>
                { status === "video" ?
                <>
                <a class="panel-block is-active">
                    <span class="panel-icon">
                        <i class="fas fa-book" aria-hidden="true"></i>
                    </span>Ceritanya Video
                </a>

                <a class="panel-block">
                    <span class="panel-icon">
                        <i class="fas fa-book" aria-hidden="true"></i>
                    </span>
                    Nanti kalo di klik
                </a>
                
                <a class="panel-block">
                    <span class="panel-icon">
                        <i class="fas fa-book" aria-hidden="true"></i>
                    </span>
                    Langsung diarahin ke linknya
                </a>
                
                <a class="panel-block">
                    <span class="panel-icon">
                        <i class="fas fa-book" aria-hidden="true"></i>
                    </span>
                    Oke?
                </a>
                </> 
                :
                <>
                <a class="panel-block is-active">
                    <span class="panel-icon">
                        <i class="fas fa-book" aria-hidden="true"></i>
                    </span>Tutorial Pelihara Cupang
                </a>

                <a class="panel-block">
                    <span class="panel-icon">
                        <i class="fas fa-book" aria-hidden="true"></i>
                    </span>
                    Kiat Sukses Ternak Lele
                </a>
                
                <a class="panel-block">
                    <span class="panel-icon">
                        <i class="fas fa-book" aria-hidden="true"></i>
                    </span>
                    Cara Kaya Cepat Tanpa Ngepet
                </a>
                
                <a class="panel-block">
                    <span class="panel-icon">
                        <i class="fas fa-book" aria-hidden="true"></i>
                    </span>
                    Mau Kaya? Pelihara Tuyul Aja!
                </a>
                </>
                }
            </article>
        </>
    )
}

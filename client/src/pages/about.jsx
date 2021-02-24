import React from 'react'

export default function about() {
    return (
        <>
            <h1 className="title is-1" style={{ marginTop: "50px" }}>LPPM Inkubator UNJ</h1>

            <figure className="image is-128x128"
                style={{ marginTop: "50px",marginBottom : "50px" , display: "block", marginLeft: "auto", marginRight: "auto", alignItems: "center" }} >
                <img className="is-rounded"
                    alt="Ki Hajar Dewantara"
                    src="https://dl.kaskus.id/assets-a1.kompasiana.com/statics/crawl/552945d06ea834e73b8b4567.jpeg?t=o&v=800" />
            </figure>
            
            <ion-item style={{ fontSize: "25px"}}>
                <ion-icon name="location-outline" style={{marginRight : "5px", color : "black", display : "inline-block", verticalAlign : "middle"}}></ion-icon>
                <span style={{display: "inline-block", verticalAlign: "middle"}}>Alamat : Gedung Ki Hajar Dewantara Lt.1
            Kampus A Universitas Negeri Jakarta Jalan Rawamangun Muka, Jakarta Timur</span>
            </ion-item><br></br>

            <ion-item style={{ fontSize: "25px" }}>
                <ion-icon name="mail-outline" style={{marginRight : "5px", color : "black", display : "inline-block", verticalAlign : "middle"}}></ion-icon>
                <span style={{display: "inline-block", verticalAlign: "middle"}}>Email : universitybox.id@gmail.com</span>
            </ion-item><br></br>

            <ion-item style={{ fontSize: "25px" }}>
                <ion-icon name="logo-instagram" style={{marginRight : "5px", color : "black", display : "inline-block", verticalAlign : "middle"}}></ion-icon>
                <span style={{display: "inline-block", verticalAlign: "middle"}}>IG : @universitybox.id</span>
            </ion-item>
        </>
    )
}

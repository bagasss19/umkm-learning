import React from 'react'
import './page.css'

export default function legalitas() {
    return (
        <>
            <h1 className="title is-1" style={{ marginTop: "30px" }}>Info Legalitas</h1>
            <nav className="panel" style={{ marginTop: "50px" }}>
                <p className="panel-tabs">
                    <a className="is-active" href="/">Pendirian Badan Usaha</a>
                    <a href="/">SNI</a>
                    <a href="/">Sertifikat Halal</a>
                </p>
                <p className="panel-block is-active" style={{ textAlign: "center" }}>aa</p>
                    <ul>
                        <li>1. Fotokopi KTP, NPWP & KK para pemegang saham dan pengurus, minimal 2 orang</li>
                        <li>2. Foto Direktur ukuran 3x4 latar belakang merah</li>
                        <li>3. Copy PBB tahun terakhir sesuai domisili perusahaan</li>
                        <li>4. Copy Surat Kontrak/Sewa Kantor atau bukti kepemilikan tempat usaha</li>
                        <li>5. Surat Keterangan Domisili dari pengelola Gedung jika berdomisili di Gedung Perkantoran</li>
                        <li>6. Surat Keterangan RT / RW (jika dibutuhkan, untuk perusahaan yang berdomisili di lingkungan perumahan) khusus luar jakarta</li>
                        <li>7. Kantor berada di Wilayah Perkantoran/Plaza, atau Ruko, atau tidak berada di wilayah pemukiman</li>
                        <li>8. Surat Keterangan Zonasi dari Kelurahan</li>
                        <li>9. Stempel Perusahaan</li>
                    </ul>
                
            </nav>
        </>
    )
}

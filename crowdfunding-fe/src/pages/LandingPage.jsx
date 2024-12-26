import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import backgroundHeader from '.././assets/images/background-banner.png';
import backgroundHeader2 from '.././assets/images/Group 17.png';
import unicef from '.././assets/images/unicef-image.png';
import callCentre from '.././assets/images/call-centre.png';
import './LandingPage.css';
import { dataPenggalanDana, faqList } from "../data/PenggalanDana";

export default function LandingPage() {

    useEffect(() => {
        Aos.init({ duration: 2000 });

    }, []);

    return (
        <>
            <div id="header-bg" className="d-flex justify-content-center">
                <img src={backgroundHeader} alt="background header" className="bg-header" />
            </div>

            {/* Input Search */}
            <div className="search-container d-flex justify-content-center">
                <div className="search-box">
                    <input type="text" className="search-input" placeholder="Find donations..." />
                    <button className="search-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85a1.007 1.007 0 0 0-.115-.098zm-5.31.688a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Card Penggalan dana */}
            <div className="crowdfunding-container" data-aos='fade-up'>
                <div className="">
                    <h1>Mereka <b>Butuh</b> Bantuanmu</h1>
                </div>
                <div className="crowdfunding-cards">
                    {dataPenggalanDana.map((item) => (
                        <div className="card" style={{ width: '20rem' }} key={item.id}>
                            <img src={item.imageUrl} className="card-img-top" alt={item.nama} />
                            <div className="card-body">
                                <div className="card-span">
                                    <span>{item.tanggal}</span>
                                    <span><b>{item.totalDonasi}</b></span>
                                </div>
                                <h5 className="card-title">{item.nama}</h5>
                                <p className="card-text">{item.description}</p>
                                <a href="#" className="btn btn-primary">Bantu Sekarang</a>
                            </div>
                        </div>
                    ))}
                </div>
                <nav aria-label="Page navigation example" className="mt-4 mb-4">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item active" aria-current="page"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* FAQ Mari Membangun */}
            <div className="faq-container" data-aos='fade-up'>
                <div className="faq-title-header">
                    <h3>Salurkan Bantuan dengan <b>Mudah</b>, <b>Cepat</b>, dan <b>Transparan</b>.</h3>
                </div>

                <div className="faq-desc">
                    <p>Platform <b>MARI BERBAGI</b> adalah solusi inovatif untuk memudahkan Anda dalam menyalurkan bantuan kepada mereka yang membutuhkan. Dengan teknologi yang modern, kami memastikan proses donasi berlangsung cepat, aman, dan transparan, sehingga setiap bantuan yang Anda berikan dapat memberikan dampak nyata bagi komunitas. Jadilah bagian dari perubahan bersama kami.</p>
                    <a href="#">Baca Selengkapnya</a>
                </div>

                <div className="faq-line"></div>

                <div className="faq-section">
                    <h3>Frequently Asked Question</h3>

                    <div className="accordion" id="accordionExample">
                        {faqList.map((item, index) => (
                            <div className="accordion-item" key={item.id}>
                                <h2 className="accordion-header" id={`heading${index}`}>
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#collapse${index}`}
                                        aria-expanded={index === 0 ? "true" : "false"}
                                        aria-controls={`collapse${index}`}
                                    >
                                        {item.pertanyaan}
                                    </button>
                                </h2>
                                <div
                                    id={`collapse${index}`} // Unique ID
                                    className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        {item.jawaban}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* MARI BERBAGI DESCRIPTION */}
            <div className="mari-desc" data-aos="fade-up">
                
                <div className="mari-title-header">
                    <h2>Bantu Saudara yang Terdampak <b>Bencana</b>, <b>Kekurangan</b>, dan <b>Darurat Pertolongan</b></h2>
                </div>
                
                <div className="mari-explain">
                    <div className="mari-full-desc">

                        <div className="mari-text">
                            <b>22.690</b> Pembukaan Donasi telah terverifikasi dan aktif berjalan
                        </div>

                        <div className="mari-text">
                            <b>6.450</b> Bantuan telah disalurkan ke daerah tampak bencana.
                        </div>

                        <div className="mari-text">
                            <b>5.058</b> Bantuan telah disalurkan ke yayasan sosial dan panti asuhan.
                        </div>

                        <div className="mari-text">
                            <b>1.4 Miliar</b> Total dana berhasil dikumpulkan.
                        </div>

                        <div className="mari-text">
                            <b>10.517</b> Bantuan telah disalurkan ke saudara yang kekurangan
                        </div>

                        <div className="mari-text">
                            <b>4.803</b> Bantuan telah disalurkan untuk saudara dengan kondisi darurat pertolongan
                        </div>

                    </div>
                    <img src={backgroundHeader2} alt="Crowdfunding" className="mari-image" />
                </div>
            </div>

            {/* Line Pemisah */}
            <div className="line-pemisah-container">
                <div className="line-pemisah"></div>
            </div>

            {/* Partner Kami */}
            <div className="partner-container" data-aos='fade-up'>
                <div className="partner-title-header">
                    <span>PARTNER KAMI</span>
                    <h3>Lebih dari <b>50 Perusahaan</b> dan <b>Institusi</b> yang Mempercayakan Kami Selama Ini</h3>
                </div>

                <div className="partner-section">
                    <div className="partner-grid">
                        {Array.from({ length: 8 }, (_, index) => (
                            <div className="partner-item" key={index}>
                                <img src={unicef} alt="Partner Logo" className="partner-logo" />
                            </div>
                        ))}
                    </div>
                    <div className="partner-item more-count">
                        <span>dan <b>42 lainnya</b></span>
                    </div>
                </div>
            </div>

            {/* Image Call Centre */}
            <div className="call-centre" data-aos='fade-up'>
                <img src={callCentre} alt="call centre" width={'90%'}/>
            </div>
        </>
    );
}
import LandingPage from './pages/LandingPage';
import hands from './assets/images/hands.png';
import phone from './assets/images/phone-call.png';
import DeviceDetector from 'device-detector-js';

function App() {

  // Membuat instance device detector
  const deviceDetector = new DeviceDetector();
  // Mendapatkan informasi perangkat dari User-Agent
  const userAgent = window.navigator.userAgent;
  const device = deviceDetector.parse(userAgent);

  // Mengecek apakah perangkat adalah mobile
  const isMobile = device.client.name.includes('Mobile');

  console.log(isMobile)
  return (
    <div className="App">
      {/* Header */}

      {!isMobile ? (
        <div className="headers-nav px-6 py-3 bg-white text-white">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a href="#" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-blue text-decoration-none gap-2">
                <img src={hands} alt="Hands" />
                <h4 className='m-0'>MARI BERBAGI</h4>
              </a>
              <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                <li>
                  <a href="#" className="nav-link text-blue">Home</a>
                </li>
                <li>
                  <a href="#" className="nav-link text-blue">Dashboard</a>
                </li>
                <li>
                  <a href="#" className="nav-link text-blue">Orders</a>
                </li>
                <li>
                  <a href="#" className="nav-link text-blue">Products</a>
                </li>
                <li className='d-flex align-items-center'>
                  <img src={phone} alt="" width={16} height={16} />
                  <a href="#" className="nav-link text-blue p-1">+62 821-8152-2362</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"><img src={hands} alt="Hands" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-disabled="true">Disabled</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
      {/* Header Selesai */}

      <div className="">
        <LandingPage />
      </div>

      {/* Footer */}
      <div className="container" data-aos='fade-up'>
        <footer className="pt-5">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
              </ul>
            </div>

            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label for="newsletter1" className="visually-hidden">Email address</label>
                  <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                  <button className="btn btn-primary" type="button">Subscribe</button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2024 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use></use></svg></a></li>
              <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use></use></svg></a></li>
              <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use></use></svg></a></li>
            </ul>
          </div>
        </footer>
      </div>
      {/* Footer Selesai */}
    </div>
  );
}

export default App;
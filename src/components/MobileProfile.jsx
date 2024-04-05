

export default function MobileProfile({isOpen,setIsOpen}) {

  return (
    <div className="profile" id="mobile-profile" style={{display:isOpen ? "block" : "none"}}>
    <div className="profile-head">
      <p>Hesab və ayarlar</p>
      <button className="close" id="profile-close" onClick={setIsOpen(false)}>
       X
      </button>
    </div>
    <div className="profile-pay-button">
      <span>Aylıq Ödəniş</span>
    </div>
    <div className="profile-info">
      <div className="profile-image">
        <i className="far fa-user" />
      </div>
      <div className="profile-log">
        <p>Hesaba giriş və Qeydiyyat</p>
        <span>Şəxsi hesaba keçmək</span>
      </div>
      <i className="fas fa-arrow-right" />
    </div>
    <div className="profile-links">
      <ul>
        <li>sebet</li>
        <li>sebet</li>
        <li>sebet</li>
      </ul>
    </div>
    <div className="profile-services">
      <ul>
        <li>Catdirilma ve odeme</li>
        <li>Catdirilma ve odeme</li>
        <li>Catdirilma ve odeme</li>
        <li>Catdirilma ve odeme</li>
      </ul>
    </div>
    <div className="profile-contact">
      <ul>
        <li>Elaqe:</li>
        <li>
          <i className="fab fa-instagram" />
        </li>
      </ul>
    </div>
  </div>
  )
}

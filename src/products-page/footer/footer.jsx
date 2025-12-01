import "../footer/footer.css";

function Footer() {
  return (
    <div className="footer-section">
      <div className="color-overlay"></div>
      <div className="footer-content">
        <div className="footer-title">تواصل معنا</div>

        <div className="contact-icons">
          <div className="icon-item">
            <div className="icon-style">
              <i className="fas fa-phone"></i>
            </div>
            <span> +970 9 2322777</span>
            <span> +970 9 2326222</span>
            <span className="span-text-small">
              اطلب الرقم 972 بدلا من 970 عند الاتصال من الدول غير العربية
            </span>
          </div>
          <div className="icon-item">
            <div className="icon-style">
              <i className="fas fa-envelope"></i>
            </div>
            <span>Info@alarz.ps</span>
          </div>
          <div className="icon-item">
            <div className="icon-style">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <span>شركة الآرز للأيس كريم المحدودة</span>
            <span>P.O.Box: 20</span>
            <span>المنطقة الصناعية الشرقية</span>
            <span>نابلس، فلسطين</span>
          </div>
        </div>

        <div className="footer-social-icons">
          <i className="fab fa-facebook-square"></i>
          <i className="fab fa-instagram"></i>
          
        </div>


        <div className="footer-copyright">
          <h5>AL ARZ©</h5>
        </div>
      </div>
    </div>
  );
}

export default Footer;

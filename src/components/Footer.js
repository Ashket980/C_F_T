import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Carbon Footprint</h1>
          <p>An Initiative towards environmental sustainability!</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        {/* <div>
          <h4>Heading</h4>
          <a href="/">text</a>
          <a href="/">text</a>
          <a href="/">text</a>
          <a href="/">text</a>
        </div> */}
      
      <div>
          <h4>Community</h4>
          <a href="/">Github</a>
          <a href="/">Issues</a>
          <a href="/">Project</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubleshooting</a>
          <a href="/">Contact Us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms and Service</a>
          <a href="/">Privacy Policy</a>
          <a href="/">License</a>
        </div>
    </div>
    </div>
  );
};

export default Footer;

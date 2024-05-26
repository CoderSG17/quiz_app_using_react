import './Footer.scss'
const Footer = () => {
  return (
    
    <>
      <footer style={{bottom:"1px"}}>
        <div className="copyright" >
          <p>SG 2023 - Shray Solutions</p>
        </div>
        <div className="social">
          <a href="/" className="support">Contact Us</a>
          <a href="https://www.facebook.com/" className="face">facebook</a>
          <a href="https://twitter.com/" className="tweet">twitter</a>
          <a href="https://www.linkedin.com/" className="linked">linkedin</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;

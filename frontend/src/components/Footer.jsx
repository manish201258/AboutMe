import React from "react";
import { useAuth } from "../context/ContextHook";

const Footer = () => {
  const {mode} = useAuth();
  return (
    <>
      <div className="footer">
        <div className="d-flex justify-content-evenly pt-4">
          <div>
            <li className="fs-3 fw-bold mb-2 text-danger">Manish Jangir</li>
            <li>Information Technology</li>
            <li>Engineering Student</li>
          </div>
          <div>
            <li className="fs-3 fw-bold mb-2 text-danger">Get In Touch</li>
            <div className="d-flex justify-content-center gap-3"style={{filter:mode?'invert()':""}}>
                <img src="/instagram.png" alt="instagram" />
                <img src="/linkdin.png" alt="linkdin" />
                <img src="/github.png" alt="github" />
            </div>
          </div>
        </div>
        <div className="website-rights d-flex justify-content-center text-secondary">
        <p>&copy; 2024 Manish. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;

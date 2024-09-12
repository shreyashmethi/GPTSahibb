import React, { useEffect, useState } from "react";
import { updateMessagesOfUser } from "../services/firebase"
import { toast } from 'react-toastify';
import style from "./main.module.css";
import Card1 from "./card1";
import { Link } from "react-router-dom";
import PricingCard from "./card2";
import Faq from "./faq";
import "./cookie.css";

function Main() {
  const [login, setLogin] = useState();
  const [showCookiePopup, setShowCookiePopup] = useState(false);
  const [showCookiePopup2, setShowCookiePopup2] = useState(false);
  const [showCookiePopup3, setShowCookiePopup3] = useState(false);
  const [showCookiePopup4, setShowCookiePopup4] = useState(false);

  const handlePopupOpen = () => {
    setShowCookiePopup(!showCookiePopup);
  };
  const handlePopupOpen2 = () => {
    setShowCookiePopup2(!showCookiePopup2);
  };

  const handlePopupOpen3 = () => {
    setShowCookiePopup3(!showCookiePopup3);
  };
  const handlePopupOpen4 = () => {
    setShowCookiePopup4(!showCookiePopup4);
  };

  
  const CookiePopup = () => {
    return (
      <div className="cookie-popup">
        <div className="cookie-content">
          <h2>Cookie and Privacy Policy</h2>
          <p>
            Effective Date: 04-07-23
            <br />
            <br />
            This{" "}
            <span style={{ color: "blue", fontWeight: "bold" }}>
             Privacy Policy
            </span>{" "}
            explains how we collect, use, and protect your personal information
            when you visit and interact with our website, including information
            related to payment processing through Razorpay. By accessing or using
            our website, you consent to the terms outlined in this policy.
            <br />
            <br />
            1. Information Collection and Use:
            <br />
            a. Personal Information: We may collect personal information, such as
            your name, email address, contact details, and payment information
            (e.g., credit card details) when you voluntarily provide them to us
            for purposes such as completing transactions through Razorpay.
            <br />
            b. Cookies and Tracking Technologies: We use cookies and similar
            tracking technologies to enhance your browsing experience, analyze
            website traffic, and customize content. These technologies may
            collect anonymous information such as IP address, browser type, and
            pages visited.
            <br />
            c. Usage Data: We may collect non-personal information about your
            interactions with our website, including the date and time of your
            visit, the pages you access, and the duration of your stay.
            <br />
            <br />
            2. Information Sharing:
            <br />
            a. We respect your privacy and will not sell, rent, or disclose your
            personal information to third parties, except as required by law, or
            for the purpose of processing payments through Razorpay with your
            explicit consent.
            <br />
            b. We may engage trusted third-party service providers, including
            Razorpay, to assist us in delivering our services, subject to their
            agreement to maintain the confidentiality and security of your
            personal information.
            <br />
            <br />
            3. Data Security:
            <br />
            a. We implement appropriate technical and organizational measures to
            protect your personal information, including payment information,
            from unauthorized access, disclosure, or alteration. We use
            industry-standard encryption protocols to safeguard sensitive
            information during transmission and storage.
            <br />
            b. While we strive to maintain the security of your information,
            please note that no method of transmission over the internet or
            electronic storage is 100% secure.
            <br />
            <br />
            4. Payment Processing:
            <br />
            a. Payments for goods or services provided through our website are
            processed by PhonePe. When you make a payment, your personal and
            financial information may be collected by PhonePe for the purpose of
            processing the transaction. We / PhonePe do not save your data on our servers.
            <br />
            <br />
            5. External Links:
            <br />
            Our website may contain links to external websites or resources that
            are not controlled or operated by us. This Cookie and Privacy Policy
            does not apply to those third-party websites, and we encourage you to
            review their respective privacy policies.
            <br />
            <br />
            6. Changes to the Policy:
            <br />
            We reserve the right to update or modify this Cookie and Privacy
            Policy at any time. We encourage you to review this policy
            periodically for any changes.
            <br />
            <br />
            If you have any questions, concerns, or requests regarding your
            personal information or this policy, including information related to
            payments through Razorpay, please contact us through the provided
            contact details on our website.
          </p>
          <button className="close-button" onClick={handlePopupOpen}>
            Close
          </button>
        </div>
      </div>
    );
  };

  const CookiePopup2 = () => {
    return (
      <div className="cookie-popup">
        <div className="cookie-content">
          <h2>Shipping Policy</h2>
          <p>      
            Effective Date: 04-07-23
          </p>
          <p>
            As our chatbot service is a digital product, there is no physical shipping involved. Upon successful purchase, you will gain immediate access to your chatbot service via your provided login credentials.
          </p>
          <button className="close-button" onClick={handlePopupOpen3}>
            Close
          </button>
        </div>
      </div>
    );
  };

  const CookiePopup3 = () => {
    return (
      <div className="cookie-popup">
        <div className="cookie-content">
          <h2>Return and Refund Policy</h2>
      <p>
        Effective Date: 04-07-23
      </p>
      <p>
        Due to the digital nature of our chatbot service, we do not offer physical returns. However, we understand that there may be instances where you are dissatisfied with your purchase.
      </p>
      <h3>Refund Eligibility</h3>
      <ul>
        <li>
          <strong>Defective Product:</strong> If the chatbot service is defective or contains significant errors that prevent it from functioning as intended, we will offer a full refund upon verification.
        </li>
        <li>
          <strong>Unsatisfactory Performance:</strong> If the chatbot's performance does not meet your expectations or if it fails to address your specific needs, we may offer a partial refund or provide a solution to resolve the issue.
        </li>
      </ul>
      <h3>Refund Process</h3>
      <ol>
        <li>
          To request a refund, please contact our customer support team within 2 days of purchase.
        </li>
        <li>
          You will be required to provide details about the issue you encountered and any relevant evidence.
        </li>
        <li>
          Once your request is reviewed, we will determine if you are eligible for a refund.
        </li>
        <li>
          If approved, the refund will be processed to your original payment method within [Number] business days.
        </li>
      </ol>
      <h3>No Refunds for General Discontent</h3>
      <p>
        Please note that refunds will not be granted solely due to a change of mind or dissatisfaction with the chatbot's capabilities beyond what was described in the product information.
      </p>
      <h3>Contact Us</h3>
      <p>If you have any further questions or require assistance, please contact our customer support team at:</p>
      <ul>
        <li><strong>MULTANI VENTURES PVT LTD</strong></li>
        <li><strong>Email:</strong> gptsahib03@gmail.com </li>
        <li><strong>Phone:</strong> +91 86994 27726 </li>
      </ul>
          <button className="close-button" onClick={handlePopupOpen3}>
            Close
          </button>
        </div>
      </div>
    );
  };
    
  const TermsAndConditions = () => {
    return (
      <div className="cookie-popup">
        <div className="cookie-content">
          <h2>Terms and Conditions</h2>
          <p>
            Welcome to GPT Sahib! These terms and conditions outline the rules and regulations for the use of our website and services provided through Razorpay.
          </p>
          <p>
            By accessing this website and using our services, you accept these terms and conditions. Do not continue to use GPT Sahib if you do not agree to all the terms and conditions stated on this page.
          </p>
          <h3>Interpretation and Definitions</h3>
          <p>
            The following terminology applies to these Terms and Conditions, Privacy Statement, and Disclaimer Notice and any or all Agreements: "Client", "You" and "Your" refers to you, the person accessing this website and accepting the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves, or either the Client or ourselves.
          </p>
          <h3>Payments</h3>
          <p>
            All payments made through our website are processed by Razorpay. By using our services, you agree to comply with Razorpay's terms of service and privacy policy.
          </p>
          <h3>Refund Policy</h3>
          <p>
            All payments made through our website are non-refundable unless explicitly stated otherwise in writing by GPT Sahib. Refund requests, if any, must be submitted in accordance with the refund policy outlined by Razorpay.
          </p>
          <h3>Content</h3>
          <p>
            All content provided on this website, including but not limited to text, graphics, images, and audio files, is for informational purposes only. The content is subject to change without notice.
          </p>
          <h3>Intellectual Property Rights</h3>
          <p>
            Unless otherwise stated, GPT Sahib and/or its licensors own the intellectual property rights for all material on this website. You may not republish, reproduce, duplicate, copy, or otherwise exploit material on this website without our prior written consent.
          </p>
          <h3>Limitation of Liability</h3>
          <p>
            In no event shall GPT Sahib, nor any of its officers, directors, and employees, be liable to you for anything arising out of or in any way connected with your use of this website, whether such liability is under contract, tort, or otherwise.
          </p>
          <h3>Indemnification</h3>
          <p>
            You hereby indemnify to the fullest extent GPT Sahib from and against any and all liabilities, costs, demands, causes of action, damages, and expenses arising out of or in any way related to your breach of any of the provisions of these terms.
          </p>
          <h3>Severability</h3>
          <p>
            If any provision of these terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.
          </p>
          <h3>Variation of Terms</h3>
          <p>
            GPT Sahib is permitted to revise these terms at any time as it sees fit, and by using this website you are expected to review these terms regularly.
          </p>
          <h3>Governing Law & Jurisdiction</h3>
          <p>
            These terms will be governed by and construed in accordance with the laws of India, and you submit to the non-exclusive jurisdiction of the state and federal courts located in India for the resolution of any disputes.
          </p>
          <h3>Contact Us</h3>
          <p>
            If you have any questions or concerns about these terms and conditions, please contact us at:
          </p>
          <p>
            Email: gptsahib03@gmail.com<br />
            Phone: +91 86994 27726<br />
            Address : 296, Sector-71,Mohali
          </p>
          <button className="close-button" onClick={handlePopupOpen2}>
            Close
          </button>
        </div>
      </div>
    );
  };

  const socialLinks = [
    { img: "images/fb.png", link: "https://www.facebook.com/" },
    { img: "images/insta.png", link: "https://www.instagram.com/" },
    { img: "images/tw.png", link: "https://www.twitter.com/" },
  ];
  const cardsl = [
    {
      header: "Guru Granth Sahib Ji",
      para: "Learn and understand the teachings of all the Gurus by comprehending Guru Granth Sahib Ji.",
      image: "images/card1.png",
    },
    {
      header: "Sikh Culture & History",
      para: " Learn about various Historical events, location of Gurudwaras worldwide and biographies of all the Gurus.",
      image: "images/off2.webp",
    },
    {
      header: "Punjabi Language",
      para: "Learn the Sikh's language Punjabi at an amateur, advanced and professional level for students at school and university level.",
      image: "images/off3.webp",
    },
  ];

  const cards2 = [
    {
      head: "Amateur",
      points: [
        "Basic learning of language",
        "Phrases of Guru Granth Sahib Ji",
        "Explore Sikh history",
        "Lists of all Gurudwaras worldwide",
      ],
      color: "#BC5E0E",
      path: "images/t1.png",
      price: ["₹11", "Per week"],
    },
    {
      head: "Professional",
      points: [
        "Basic learning of language",
        "Phrases of Guru Granth Sahib Ji",
        "Explore Sikh history",
        "Lists of all Gurudwaras worldwide",
      ],
      color: "#BDBDBD",
      path: "images/t2.png",
      price: ["₹33", "Per 6 month"],
    },
    {
      head: "Business",
      points: [
        "Basic learning of language",
        "Phrases of Guru Granth Sahib Ji",
        "Explore Sikh history",
        "Lists of all Gurudwaras worldwide",
      ],
      color: "#CCA237",
      path: "images/t3.png",
      price: ["₹77", "Per year"],
    },
  ];

  const faqL = [
    {
      ques: "What is GPT Sahib ?",
      ans: "GPT Sahib offers comprehensive knowledge on Guru Granth Sahib and Sikh history. Explore teachings, historical events, biographies, articles, discussions, and resources, providing a deeper understanding of Sikhism's core principles and promoting interfaith dialogue.",
    },
    {
      ques: "Why is learning easy ?",
      ans: "GPT Sahib is really easy to use. You just have to type in your question in the Question box and a resolution or an answer to your question would be presented within a few minutes as per the authenticised data collected on the holy Guru Granth Sahib ji and the Sikh history. ",
    },
    {
      ques: "Why is it paid ?",
      ans: "Extensive research has been done to provide you with autheticiated data on Sikh history. It enlightens you with the teachings of the holy Guru Granth Sahib Ji and Sikh history. It is a model to ensure that every sikh child is self enabled to learn punjabi and about it's culture &amp; heritage. The paid model helps you get guidance to your problems as per the holy Guru Granth Sahib ji and also teaches you the basics of punjabi langauage and as well as write papers on Sikh history or culture for you.",
    },
  ];

  useEffect(() => {
    setLogin(localStorage.getItem("login"));
  }, [login]);
  //console.log(login);


  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const sendEmail = async () => {
    if (!localStorage.getItem('id')) {
      toast.error("Kindly Login First !")
    }
    else {
      try {
        await updateMessagesOfUser(localStorage.getItem('id'), fullName, email, message)
        toast.success("Your message has been saved !")
      }
      catch (error) {
        console.log(error)
        toast.error(error)
      }
    }
  }

  return (
    <div className={style.main}>
      <div className={style.nav}>
        <div className={style.nav1}>
          <img src="images/logo.png"></img>
          <a href="#pricing" className={style.ele}>
            Pricing
          </a>
          <a href="#contact" className={style.ele}>
            Contact{" "}
          </a>
          <a href="#faq" className={style.ele}>
            FAQ
          </a>
        </div>
        <div className={style.nav2}>
          {login == false || login == "false" || login == null ? (
            <>
              {" "}
              <Link to="/login" style={{ textDecoration: "none" }}>
                <div className={style.ele}>Login</div>
              </Link>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <div className={style.signup}>Signup </div>
              </Link>
            </>
          ) : (
            <>
              {" "}
              <div
                className={style.ele}
                onClick={() => {
                  localStorage.setItem("login", "false");
                  localStorage.removeItem("id");
                  setLogin(false);
                }}
              >
                Logout
              </div>
            </>
          )}
        </div>
      </div>
      <div className={style.sec1} id="home">
        <div className={style.bg1}>
          <img src="images/main2.png"></img>
        </div>
        <div className={style.content}>
          <div className={style.header}>GPT SAHIB</div>
          <div className={style.con}>
            {" "}
            AI chatbot for comprehending Guru Granth Sahib Ji and learning of
            Sikh culture and language
          </div>
          <div className={style.try}>
            <Link
              to={login == true || login == "true" ? "/chat" : "/login"}
              style={{ textDecoration: "none" }}
            >
              <div className={style.try1}>
                Try Free <img src="images/up.png"></img>
              </div>
            </Link>
            <a href="#about" style={{ textDecoration: "none" }}>
              <div className={style.try2}> Read about us</div>
            </a>{" "}
          </div>
        </div>
      </div>
      <div className={style.sec2}>
        {/* <div className={style.bg2}>
          <img src="images/bg2.png"></img>
        </div> */}
        <div
          className={style.header}
          style={{
            marginTop: "80px",
            color: "#7E440F",
            textShadow: "none",
            fontSize: "40px",
          }}
        >
          {" "}
          What we Offer
        </div>
        <div className={style.cardSec}>
          {cardsl.map((val) => {
            return (
              <Card1 header={val.header} para={val.para} images={val.image} />
            );
          })}
        </div>
      </div>
      <div className={style.about} id="about">
        <div className={style.im}>
          <img src="images/main3.png"></img>
        </div>
        <div className={style.content1}>
          <div className={style.header}>ABOUT US</div>
          <div className={style.con1}>
            {" "}
            GPT Sahib is an AI-powered chatbot designed to represent and
            comprehend the teachings of Guru Granth Sahib Ji, the sacred
            scripture of Sikhism. It aims to educate users about Sikhism and
            promote the Punjabi language. By utilizing artificial intelligence,
            GPT Sahib offers an interactive platform for individuals from
            diverse backgrounds to explore and understand Sikhism. It provides
            accurate and insightful responses to queries about the sacred texts,
            historical events, and principles of the faith. It can also be used
            as a tool for individuals seeking spiritual guidance to live a
            better life and cope with mental health issues. Additionally, GPT
            Sahib serves as an educational resource for learning Punjabi,
            enabling users to engage with Sikh teachings in their original
            language. The chatbot's ultimate goal is to promote inclusivity,
            cultural understanding, and global knowledge dissemination about
            Sikhism.
          </div>
        </div>
      </div>
      <div className={style.sec2} id="pricing">
        <div
          className={style.header}
          style={{
            marginTop: "80px",
            color: "#7E440F",
            textShadow: "none",
            fontSize: "40px",
          }}
        >
          {" "}
          Pricing
        </div>
        <div className={style.cardSec}>

          {cards2.map((val) => {
            return <PricingCard card={val} />;
          })}

        </div>
      </div>

      <div className={style.faq} id="faq">
        <div className={style.faqbg}>
          <img src="images/faq.png"></img>
        </div>
        <div
          className={style.header}
          style={{
            marginTop: "80px",
            color: "white",
            textShadow: "none",
            fontSize: "40px",
          }}
        >
          {" "}
          FAQ'S
        </div>

        <div className={style.faqSec}>
          {faqL.map((val) => {
            return <Faq Faq={val} />;
          })}
        </div>
      </div>
      <div id="contact" className={style.contact}>
        <div className={style.bgContact}>
          {" "}
          <img src="images/contact.png"></img>
          <div></div>
        </div>
        <div className={style.newCon}>
          {" "}
          <div className={style.conLog}>
            <div className={style.coninfo}>
              <div className={style.conele}>
                {" "}
                <img src="images/call.png"></img>+91 86994 27726
              </div>
              <div className={style.conele}>
                <img src="images/mail.png"></img>gptsahib03@gmail.com
              </div>
              <div className={style.conele}>
                Address : 296, Sector-71,Mohali
              </div>
            </div>
            <div className={style.hr}></div>
            <div className={style.social}>
              {socialLinks.map((val) => {
                return (
                  <a href={val.link}>
                    {" "}
                    <img src={val.img} className={style.links}></img>{" "}
                  </a>
                );
              })}
            </div>
          </div>
          <div className={style.conMain}>
            <div
              className={style.header}
              style={{
                color: "white",
                textShadow: "none",

                fontWeight: "800px",
                textAlign: "center",
              }}
            >
              {" "}
              CONTACT US
            </div>

            <div className={style.contact1}>
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={handleFullNameChange}
              />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={handleEmailChange}
              />
              <textarea
                placeholder="Message"
                value={message}
                onChange={handleMessageChange}
              />
              <div className={style.try1} onClick={sendEmail} style={{}}>
                Send <img src="images/up.png"></img>
              </div>
              {/* <div className={style.hr}></div> */}
              <div className={style.social}>
                {socialLinks.map((val) => {
                  return (
                    <a href={val.link}>
                      {" "}
                      <img src={val.img} className={style.links}></img>{" "}
                    </a>
                  );
                })}
              </div>
            </div>

            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            ></div>
          </div>
        </div>
      </div>
      {showCookiePopup && <CookiePopup />}
      {showCookiePopup2 && <TermsAndConditions />}
      {showCookiePopup3 && <CookiePopup2 />}
      {showCookiePopup4 && <CookiePopup3 />}

      <div className={style.bot}>
        <div className={style.nlogo}>
          <img src="images/logo1.png"></img>
        </div>
        <div className={style.nave}>
          <div className={style.navhead}>Explore</div>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#faq">FAQ</a>
          <a href="#contact"> Contact</a>
        </div>
        <div className={style.nave}>
          <div className={style.navhead}>Product</div>
          <a href="#pricing">Pricing</a>
          <a href={login == true || login == "true" ? "/chat" : "/login"}>
            Try Free
          </a>
          <div className={style.privacy} onClick={handlePopupOpen}>
            Privacy Policy
          </div>
          <div className={style.privacy2} onClick={handlePopupOpen2}>
            Terms & Conditions
          </div>
          <div className={style.privacy3} onClick={handlePopupOpen3}>
            Shipping Policy
          </div>
          <div className={style.privacy4} onClick={handlePopupOpen4}>
            Return and Refund Policy
          </div>
        </div>
        {/* <div className={style.mainFooter} >
          
        </div> */}
      </div>
    </div>
  );
}

export default Main;

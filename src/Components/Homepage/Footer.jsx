import { ClassNames } from '@emotion/react'
import { Button, Grid } from '@material-ui/core'
import { withStyles } from "@material-ui/core/styles";
import React from 'react'
import AuthenticationStyle from "../../Styles/AuthenticationStyle";
import { Carousel } from 'react-responsive-carousel';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { height } from '@mui/system';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px',
  height:'500px',
  overflowX:'scroll'
};
const Footer = (props) =>{
    const { classes } = props;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
  return (
    <Grid container className={classes.footer_back}>
      <Grid container className={classes.ht}>
        <Grid item xs={12} md={12} lg={12}>
          <div className={classes.footer_head}>
            {" "}
            <img src="./Images/jfoot.png"></img>
          </div>
        </Grid>
        <Grid itemxs={12} md={12} lg={12} className={classes.services_desc}>
          <Grid item xs={12} md={2} lg={2} className={classes.footer_desc1}>
            <b className={classes.footer_desc}>About us</b>
            <br />
            <span className={classes.descfot}>
              Jiffy is an online delivery platform that provides hassle free
              pick-up and delivery services to your business organization at all
              times. This service caters to all your day-to day needs, be it
              delivery of packages, getting your documents signed, attested, or
              even dropped off to your client locations, by applying the most
              secure and sophisticated practices to carry out this service.{" "}
            </span>
            <br />
            <Button className={classes.footer_descbtn} onClick={handleOpen}>
             <u>Privacy Policy</u>
            </Button>
            <p className={classes.iconed}>
              {" "}
              <img className={classes.footer_img} src="./Images/f1.svg"></img>
              &nbsp;&nbsp;&nbsp;
              <img className={classes.footer_img} src="./Images/f2.svg"></img>
              &nbsp;&nbsp;&nbsp;
              <img className={classes.footer_img} src="./Images/f3.svg"></img>
            </p>
          </Grid>
          <Grid
            item
            xs={12}
            md={1}
            lg={1}
            className={classes.footer_desc1}
          ></Grid>
          <Grid item xs={12} md={2} lg={2} className={classes.footer_desc}>
            <b>Our Network</b>
            <br />
            <b>Abu Dhabi</b>
            <br />
            <b>Dubai</b> <br />
            <b>Sharjah</b>
            <br />
            <b>Fujairah</b>
            <br />
            <b>Ajman</b>
            <br />
            <b>Ras Al-Khaimah</b> <br />
            <b>Umm Al Quwain</b>
          </Grid>

          <Grid item md={2} lg={2} className={classes.footer_desc}>
            <b>Our Services</b> <br />
            <b>Send Package</b> <br />
            <b>Collect Package</b> <br />
            <b>Accompaniment</b> <br />
            <b>Document Attestation</b>
          </Grid>

          <Grid item md={4} lg={4} className={classes.footer_desc}>
            <b>Reach Us At</b>
            <br />
            <div className={classes.small}>
            <a href="mailto:support@jiffy.ae">
              <img
                src="./Images/emailf.svg"
                className={classes.footer_img_small}
              ></img></a>
              <div className={classes.smallContent}>
                info@jiffy.ae and support@jiffy.ae
              </div>
            </div>
            <div className={classes.small}>
              <img
                src="./Images/phone.svg"
                className={classes.footer_img_small}
              ></img>
              <div className={classes.smallContent}>
                Sales:+ 971 52 578 8380 and Support: +971 54 772 2276
              </div>
            </div>
            <div className={classes.small}>
              <img
                src="./Images/loc.svg"
                className={classes.footer_img_small}
              ></img>
              <div className={classes.smallContent}>
                Office suite # 24, First Gulf Business Center LLC, Madina Mall,
                Muhaisnah 4, Dubai - UAE,<br/>PO box - 211152
              </div>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={2}
            lg={2}
            className={classes.footer_desc1}
          ></Grid>
        </Grid>
      </Grid>
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography
                id="transition-modal-title"
                variant="h4"
                component="h2"
                className='closed'
              >
                <b>Privacy Policy</b>
                <div id="mdiv" onClick={handleClose}>
                  <div class="mdiv">
                    <div class="md"></div>
                  </div>
                </div>
              </Typography>

              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Please read the privacy policy carefully before availing
                services on this platform. Availing services through this
                platform signifies your acceptance of the terms of use and our
                privacy policy and your consent and agreement to be legally
                bound by the same. If you do not agree with the privacy policy,
                please do not access this platform for any services.
              </Typography>
              <Typography
                id="transition-modal-title"
                variant="h5"
                component="h2"
              >
                <b>INTRODUCTION</b>
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <ol style={{ listStyleType: "disc", paddingLeft: "50px" }}>
                  <li className="listed">
                    www.jiffy.ae, Jiffy application (hereinafter referred to as
                    “Jiffy”, “Jiffy Application”, “Website” or the “Platform”,
                    which term includes the website, sub-domains of the website,
                    software, mobile application(s) or any other medium through
                    which Jiffy may provide its content and services, is owned
                    and operated by Jiffy Delivery Services, a Sole
                    Establishment incorporated under the law of Dubai, having
                    its registered office at Office suite # 24, First Gulf
                    Business Center LLC, Madina Mall, Muhaisnah 4, Dubai - UAE.
                  </li>
                  <li className="listed">
                    Jiffy is a service provider that provides Delivery Service
                    solutions to its Users / Subscribers.
                  </li>
                  <li className="listed">
                    For the purpose of this Privacy Policy, wherever the context
                    so requires, "you" or "User" shall mean any natural or legal
                    person who has agreed to use the Platform, whether
                    registered or not, including Users/subscribers to the
                    services and users whose accounts will expire and / or stand
                    expired. The terms "we", "us", "our" shall mean the Platform
                    and / or Jiffy as the context may so require;
                  </li>
                  <li className="listed">
                    This Privacy Policy, together with the Terms of Use and any
                    other terms specifically referred to in any of those
                    documents, constitute a legally binding agreement (the
                    "Agreement") between you and Jiffy in relation to your use
                    of the Platform.
                  </li>
                  <li className="listed">
                    Acceptance of these terms is a prerequisite for usage of
                    services, content, performances, on the platform. By virtue
                    of using these services, it is deemed that you accept all
                    and any of the terms and conditions specified in the
                    Agreement. The Agreement constitutes the entire agreement
                    between you and Jiffy and governs your use of the Platform's
                    service, superseding any prior agreements between you and
                    Jiffy.
                  </li>
                  <li className="listed">
                    This Privacy Policy covers Jiffy’s treatment of personally
                    identifiable information that Jiffy collects through the
                    Platform, and when you use Jiffy’s services. This policy
                    also covers Jiffy’s treatment of any personally identifiable
                    information that Jiffy’s business partners or users share
                    with Jiffy. This policy does not apply to the practices of
                    companies that Jiffy does not own or control, or to people
                    that Jiffy does not directly employ or manage.
                  </li>
                </ol>
              </Typography>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                <b>
                  Collection of Personally Identifiable Information and other
                  Information
                </b>
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <ol style={{ listStyleType: "disc", paddingLeft: "50px" }}>
                  <li className="listed">
                    When you use the Platform, we collect and store your
                    personal information which is provided by you from time to
                    time. Our primary goal in doing so is to provide you with a
                    safe, efficient, smooth and customized experience. This
                    allows us to provide services and features that most likely
                    meet your needs, and to customize the Platform to make your
                    experience safer and easier. More importantly, while doing
                    so we collect personal information from you that we consider
                    necessary for achieving this purpose.
                  </li>
                  <li className="listed">
                    In general, you can browse the Platform, through external
                    links, without telling us who you are or revealing any
                    personal information about yourself. Once you give us your
                    personal information, you are not anonymous to us. Where
                    possible, we indicate which fields are required and which
                    fields are optional. The data / content shared by
                    third-party users are their data and Jiffy does not claim
                    any ownership on the said data.
                  </li>
                  <li className="listed">
                    We use data collection devices such as "cookies" on certain
                    pages / in certain parts of the Platform to help analyse our
                    web page flow, measure promotional effectiveness, and
                    promote trust and safety. "Cookies" are small files placed
                    on your hard drive that assist us in providing our services.
                    We offer certain features that are only available through
                    the use of a "cookie". We also use cookies to recognize your
                    computer in the future and allow you to enter your password
                    less frequently during a session. Cookies can also help us
                    provide information that is targeted to your interests. Most
                    cookies are non-persistent cookies or "per-session cookies,"
                    meaning that they are automatically deleted from your hard
                    drive at the end of a session. You are always free to
                    decline our cookies if your browser permits, although in
                    that case you may not be able to use certain features of the
                    Platform and you may be required to re-enter your password
                    more frequently during a session.
                  </li>
                  <li className="listed">
                    Additionally, you may encounter "cookies" or other similar
                    devices on certain pages of the Platform that are placed by
                    third parties. We do not control the use of cookies by third
                    parties.
                  </li>
                  <li className="listed">
                    If you send us personal correspondence, such as emails or
                    letters, or if other users or third parties send us
                    correspondence about your activities or postings on the
                    Platform, we may collect such information into a file
                    specific to you.
                  </li>
                  <li className="listed">
                    We collect personally identifiable information (email
                    address, name, phone number, etc.) from you when you set up
                    an account with us. We may use your contact information to
                    send you notifications about your account, assist you in the
                    payments you make on the platform and for promotions.
                  </li>
                  <li className="listed">
                    We may collect non-personal identification information about
                    users whenever they interact with the Platform. Non-personal
                    identification information may include the browser name, the
                    type of computer and technical information about Users’,
                    means of connection to our Site, such as the operating
                    system and the Internet service provider utilized and other
                    similar information, including Media Access Control (MAC)
                    address, screen resolution, operating system version,
                    Internet browser type and version. We may collect similar
                    information, such as your device type and identifier, if you
                    access the Platform through a mobile device.
                  </li>
                  <li className="listed">
                    Your personal information may be stored and processed in any
                    country where we have facilities or service providers, and
                    by using the Platform, or by providing consent to us (where
                    required by law), you agree to the transfer of information
                    to countries outside of your country of residence, which may
                    provide for different data protection rules than in your
                    country.
                  </li>
                </ol>
              </Typography>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                <b>Use of Personal Information</b>
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <ol style={{ listStyleType: "disc", paddingLeft: "50px" }}>
                  <li className="listed">
                    We use personal information of the User to provide the below
                    services.
                    <ol style={{ listStyleType: "disc", paddingLeft: "50px" }}>
                      <li className="listed-inside">
                        personalise & customise content and services based on
                        interests
                      </li>
                      <li className="listed-inside">
                        make payments on the platform
                      </li>
                      <li className="listed-inside">
                        provide support while using the platform
                      </li>
                    </ol>
                  </li>
                  <li className="listed">
                    In our efforts to continually improve our product and
                    service offerings, we collect and analyse demographic and
                    profile data about our users' activity on our Website. Jiffy
                    reserves the right to provide aggregate demographic
                    information of its members / user base to advertisers,
                    organizations / associations, governmental authorities /
                    departments, third party service providers and others in
                    furtherance of the objects of Jiffy and in the interests of
                    promoting transparent and consumer / user – driven practices
                    and policies.
                  </li>

                  <li className="listed">
                    We identify and use your IP address to help diagnose
                    problems with our server and to administer our Website. Your
                    IP address is also used to help identify you and to gather
                    broad demographic information.
                  </li>
                </ol>
              </Typography>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                <b>Sharing of information with third parties</b>
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <ol style={{ listStyleType: "disc", paddingLeft: "50px" }}>
                  <li className="listed">
                    Your personal information may be shared with our business
                    partners/vendors/affiliates for the limited purposes of
                    providing the services to you, comply with our legal
                    obligations, to enforce our User Agreement, to facilitate
                    our marketing and advertising activities, or to prevent,
                    detect, mitigate, and investigate fraudulent or illegal
                    activities related to our services. We do not disclose your
                    personal information to third parties for their marketing
                    and advertising purposes without your explicit consent. Your
                    consent will be deemed to have been given upon your
                    acceptance of this privacy policy.
                  </li>
                  <li className="listed">
                    We may disclose personal information if required to do so by
                    law or in the good faith belief that such disclosure is
                    reasonably necessary to respond to court summons / notices,
                    court orders, or other legal process. We may disclose
                    personal information to law enforcement officers, third
                    party rights owners, or others in the good faith belief that
                    such disclosure is reasonably necessary to: enforce our
                    Terms or Privacy Policy; respond to claims that an
                    advertisement, posting or other content violates the rights
                    of a third party / User; or protect the rights, property or
                    personal safety of our Users or the general public.
                  </li>
                </ol>
              </Typography>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                <b>Safety guidelines</b>
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <ol style={{ listStyleType: "disc", paddingLeft: "50px" }}>
                  <li className="listed">
                    Users are solely liable for the security of their passwords.
                    No administrator at Jiffy will have knowledge of your
                    password. It is important for you to protect against
                    unauthorized access to your password, your computer and your
                    mobile phone. Be sure to log off from the Platform when
                    finished. Jiffy does not undertake any liability for any
                    unauthorised use of your account and password. If you
                    suspect any unauthorized use of your account, you must
                    immediately notify Jiffy by sending an email to
                    support@jiffy.ae.
                  </li>
                  <li className="listed">
                    All Users are responsible for the safety of their personal
                    information. We strongly recommend that users do not
                    disclose their physical addresses, email addresses,
                    telephone numbers or other personal information online for
                    public viewing.
                  </li>
                  <li className="listed">
                    All Users need to be aware that if they upload their photos
                    on the Platform, these photos can also be downloaded, since
                    any image that can be displayed on a computer screen can be
                    saved by the person viewing it. It is technically not
                    possible to prevent this and hence Jiffy cannot be held
                    liable in such cases. If you are worried about someone else
                    viewing or saving your images then please do not submit
                    them.
                  </li>
                  <li className="listed">
                    Do not post chain letters, promote pyramid schemes or
                    recruit other Users for any network marketing or multilevel
                    marketing businesses.
                  </li>
                  <li className="listed">
                    Do not recruit other Users to join another website forum or
                    chat group, whether personal or otherwise.
                  </li>
                  <li className="listed">
                    All Users are reminded that they may be held legally
                    accountable for what they say or do online.
                  </li>
                  <li className="listed">
                    If any User fails to observe the above rules of conduct at
                    any time, Jiffy reserves the right to terminate the User
                    from the Platform, depending on the nature and severity of
                    the breach and without prior warning or consent of the User.
                  </li>
                </ol>
              </Typography>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                <b>GDPR</b>
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                This part of the Policy applies to persons/entities accessing
                the website/ App/ Platform from the European union.
                <br />
                This part of the Privacy Policy is governed by General Data
                Protection Regulation (EU Regulation 2016/679) and Privacy and
                Electronic Communications (EC Directive) Regulations 2003.
              </Typography>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                <b>
                  Collection of Personally Identifiable Information/Personal
                  data and other Information
                </b>
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <ol style={{ listStyleType: "disc", paddingLeft: "50px" }}>
                  <li className="listed">
                    When you use the Platform, we collect and store your
                    personal information/personal data which is provided by you
                    from time to time. Our primary goal in doing so is to
                    provide you with a safe, efficient, smooth and customized
                    experience. This allows us to provide services and features
                    that most likely meet your needs, and to customize the
                    Platform to make your experience safer and easier. More
                    importantly, while doing so we collect personal information
                    from you that we consider necessary for achieving this
                    purpose.
                  </li>
                  <li className="listed">
                    Personal data is defined by the General Data Protection
                    Regulation (EU Regulation 2016/679) (the “GDPR”) as ‘any
                    information relating to an identifiable person who can be
                    directly or indirectly identified in particular by reference
                    to an identifier’
                  </li>
                  <li className="listed">
                    In general, you can browse the Platform without telling us
                    who you are or revealing any personal information about
                    yourself. Once you give us your personal information, you
                    are not anonymous to us. Where possible, we indicate which
                    fields are required and which fields are optional. The data/
                    content shared by third-party users are their data and Jiffy
                    does not claim any ownership on the said data.{" "}
                  </li>
                  <li className="listed">
                    We use data collection devices such as "cookies" on certain
                    pages / in certain parts of the Platform to help analyse our
                    web page flow, measure promotional effectiveness, and
                    promote trust and safety. "Cookies" are small files placed
                    on your hard drive that assist us in providing our services.
                    We offer certain features that are only available through
                    the use of a "cookie". We also use cookies to recognize your
                    computer in the future and allow you to enter your password
                    less frequently during a session. Cookies can also help us
                    provide information that is targeted to your interests. Most
                    cookies are non-persistent cookies or "per-session cookies,"
                    meaning that they are automatically deleted from your hard
                    drive at the end of a session. You are always free to
                    decline our cookies if your browser permits, although in
                    that case you may not be able to use certain features of the
                    Platform and you may be required to re-enter your password
                    more frequently during a session.{" "}
                  </li>
                  <li className="listed">
                    Additionally, you may encounter "cookies" or other similar
                    devices on certain pages of the Platform that are placed by
                    third parties. We do not control the use of cookies by third
                    parties.
                  </li>
                  <li className="listed">
                    If you send us personal correspondence, such as emails or
                    letters, or if other users or third parties send us
                    correspondence about your activities or postings on the
                    Platform, we may collect such information into a file
                    specific to you.
                  </li>
                  <li className="listed">
                    We collect personally identifiable information/ personal
                    data (email address, name, phone number, etc.) from you when
                    you set up an account with us. We may use your contact
                    information to send you promotions, advertisements.
                  </li>
                  <li className="listed">
                    We may collect non-personal identification information about
                    users whenever they interact with the Platform. Non-personal
                    identification information may include the browser name, the
                    type of computer and technical information about Users’
                    means of connection to our Site, such as the operating
                    system and the Internet service provider utilized and other
                    similar information, including Media Access Control (MAC)
                    address, screen resolution, operating system version,
                    Internet browser type and version. We may collect similar
                    information, such as your device type and identifier, if you
                    access the Platform through a mobile device.
                  </li>
                  <li className="listed">
                    Your personal information may be stored and processed in any
                    country where we have facilities or service providers, and
                    by using the Platform, or by providing consent to us (where
                    required by law), you agree to the transfer of information
                    to countries outside of your country of residence, which may
                    provide for different data protection rules than in your
                    country.{" "}
                  </li>
                </ol>
              </Typography>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                <b>Use of Personal Information</b>
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <ol style={{ listStyleType: "disc", paddingLeft: "50px" }}>
                  <li className="listed">
                    We use personal information of the User to provide the
                    services including the following:
                    <ol style={{ listStyleType: "disc", paddingLeft: "50px" }}>
                      <li className="listed-inside">
                        personalise & customise content and services based on
                        interests
                      </li>
                      <li className="listed-inside">
                        make payments on the platform
                      </li>
                      <li className="listed-inside">
                        notify third-party producers on one-time purchases on
                        the platform
                      </li>
                      <li className="listed-inside">
                        provide support while using the platform
                      </li>
                    </ol>
                  </li>
                  <li className="listed">
                    In our efforts to continually improve our product and
                    service offerings, we collect and analyse demographic and
                    profile data about our users' activity on our Website. Jiffy
                    reserves the right to provide aggregate demographic
                    information of its members / user base to advertisers,
                    organizations / associations, governmental authorities /
                    departments, third party service providers and others in
                    furtherance of the objects of Jiffy and in the interests of
                    promoting transparent and consumer / user – driven practices
                    and policies.
                  </li>
                  <li className="listed">
                    We identify and use your IP address to help diagnose
                    problems with our server and to administer our Website. your
                    IP address is also used to help identify you and to gather
                    broad demographic information.
                  </li>
                </ol>
              </Typography>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                <b>Sharing of information with third parties:</b>
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <ol style={{ listStyleType: "disc", paddingLeft: "50px" }}>
                  <li className="listed">
                    Your personal information may be shared with our business
                    partners/vendors/affiliates for the limited purposes of
                    providing the services to you, comply with our legal
                    obligations, to enforce our User Agreement, to facilitate
                    our marketing and advertising activities, or to prevent,
                    detect, mitigate, and investigate fraudulent or illegal
                    activities related to our services. We do not disclose your
                    personal information to third parties for their marketing
                    and advertising purposes without your explicit consent. Your
                    consent will be deemed to have been given upon your
                    acceptance of this privacy policy.
                  </li>
                  <li className="listed">
                    We may disclose personal information if required to do so by
                    law or in the good faith belief that such disclosure is
                    reasonably necessary to respond to court summons / notices,
                    court orders, or other legal process. We may disclose
                    personal information to law enforcement officers, third
                    party rights owners, or others in the good faith belief that
                    such disclosure is reasonably necessary to: enforce our
                    Terms or Privacy Policy; respond to claims that an
                    advertisement, posting or other content violates the rights
                    of a third party / User; or protect the rights, property or
                    personal safety of our Users or the general public.
                  </li>
                </ol>
              </Typography>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                <b>Rights Under the GDPR</b>
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Under the GDPR, you have the following rights, which we will
                always work to uphold:
                <ol style={{ listStyleType: "disc", paddingLeft: "50px" }}>
                  <li className="listed">
                    The right to be informed about our collection and use of
                    your personal data. This Privacy Policy should tell you
                    everything you need to know, but you can always contact us
                    to find out more or to ask any questions using the details
                    in Point (l) (Notices clause).
                  </li>
                  <li className="listed">
                    The right to access the personal data we hold about you.
                    Point III above will tell you how to do this.
                  </li>
                  <li className="listed">
                    The right to have your personal data rectified if any of
                    your personal data held by us is inaccurate or incomplete.
                    Please contact us using the details in Part (h) to find out
                    more.
                  </li>
                  <li className="listed">
                    The right to be forgotten, i.e. the right to ask us to
                    delete or otherwise dispose of any of your personal data
                    that we have. Please contact us using the details in Point
                    (l) (Notices clause) to find out more.
                  </li>
                  <li className="listed">
                    The right to restrict (i.e. prevent) the processing of your
                    personal data.
                  </li>
                  <li className="listed">
                    The right to object to us using your personal data for a
                    particular purpose or purposes.
                  </li>
                  <li className="listed">
                    The right to data portability. This means that, if you have
                    provided personal data to us directly, we are using it with
                    your consent or for the performance of a contract, and that
                    data is processed using automated means, you can ask us for
                    a copy of that personal data to re-use with another service
                    or business in many cases
                  </li>
                  <li className="listed">
                    Rights relating to automated decision-making and profiling.
                    We do not use your personal data in this way.
                  </li>
                </ol>
                For more information about our use of your personal data or
                exercising your rights as outlined above, please contact us
                using the details provided in Point (l) (Notices clause).
              </Typography>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                <b>Safety guidelines</b>
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Jiffy is always reaching out to a wider audience by organizing
                classes and concerts. However, in doing so, we will not allow
                uploaded, published or posted anything on the Platform that, in
                our discretion, we think could be potentially endangering or
                inflammatory or embarrassing to our Users. The following are
                pointers to be kept in mind by users in the interests of their
                safety online and on the Platform:
                <ol style={{ listStyleType: "disc", paddingLeft: "50px" }}>
                  <li className="listed">
                    Users are solely liable for the security of their passwords.
                    No administrator at Jiffy will have knowledge of your
                    password. It is important for you to protect against
                    unauthorized access to your password, your computer and your
                    mobile phone. Be sure to log off from the Platform when
                    finished. Jiffy does not undertake any liability for any
                    unauthorised use of your account and password. If you
                    suspect any unauthorized use of your account, you must
                    immediately notify Jiffy by sending an email to
                    support@jiffy.ae.
                  </li>
                  <li className="listed">
                    All Users are responsible for the safety of their personal
                    information. We strongly recommend that users do not
                    disclose their physical addresses, email addresses,
                    telephone numbers or other personal information online for
                    public viewing.
                  </li>
                  <li className="listed">
                    All Users need to be aware that if they upload their photos
                    on the Platform, these photos can also be downloaded, since
                    any image that can be displayed on a computer screen can be
                    saved by the person viewing it. It is technically not
                    possible to prevent this and hence Jiffy cannot be held
                    liable in such cases. If you are worried about someone else
                    viewing or saving your images then please do not submit
                    them.
                  </li>
                  <li className="listed">
                    Do not post chain letters, promote pyramid schemes or
                    recruit other Users for any network marketing or multilevel
                    marketing businesses.
                  </li>
                  <li className="listed">
                    Do not recruit other Users to join another website forum or
                    chat group, whether personal or otherwise.
                  </li>
                  <li className="listed">
                    All Users are reminded that they may be held legally
                    accountable for what they say or do online.
                  </li>
                  <li className="listed">
                    If any User fails to observe the above rules of conduct at
                    any time, Jiffy reserves the right to terminate the User
                    from the Platform, depending on the nature and severity of
                    the breach and without prior warning or consent of the User.
                  </li>
                </ol>
              </Typography>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                <b>Miscellaneous</b>
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <ol style={{ listStyleType: "disc", paddingLeft: "50px" }}>
                  <li className="listed">
                    <b>Links to Other Sites</b>
                  </li>
                </ol>
                Our Website may provide links to other websites that may collect
                personally identifiable information or sensitive personal
                information about you. Jiffy is not responsible for the privacy
                practices or the content of such third-party websites.
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <ol style={{ listStyleType: "disc", paddingLeft: "50px" }}>
                  <li className="listed">
                    <b>Security Precautions</b>
                  </li>
                </ol>
                Our Website has stringent security measures in place to protect
                the loss, misuse, and alteration of the information under our
                control. Whenever you change or access your account information,
                we offer the use of a secure server. Once your information is in
                our possession we adhere to strict security guidelines,
                protecting it against unauthorized access. We use reasonable
                organizational, technical, and administrative measures to
                protect personal information under our control. Unfortunately,
                no data transmission over the Internet or data storage system
                can be guaranteed to be 100% secure. If you have reason to
                believe that your interaction with us is no longer secure (for
                example, if you feel that the security of any account you have
                with us has been compromised), please immediately notify us of
                the problem by contacting us or e-mailing us at
                support@jiffy.ae.
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <ol style={{ listStyleType: "disc", paddingLeft: "50px" }}>
                  <li className="listed">
                    <b>Advertisements on Jiffy and its subdomains</b>
                  </li>
                </ol>
                We may use third-party advertising companies to serve ads when
                you visit our Website. These companies may use information (not
                including your name, address, email address, or telephone
                number) about your visits to this and other websites in order to
                provide advertisements.
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <ol style={{ listStyleType: "disc", paddingLeft: "50px" }}>
                  <li className="listed">
                    <b>Your Consent: </b>
                  </li>
                </ol>
                By using the Platform and/ or by providing your information, you
                consent to the collection and use of the information you
                disclose on the Website in accordance with this Privacy Policy,
                including but not limited to your consent for sharing
                information as per this Privacy Policy.
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <ol style={{ listStyleType: "disc", paddingLeft: "50px" }}>
                  <li className="listed">
                    <b>Withdrawal of Consent</b>
                  </li>
                </ol>
                If you wish to withdraw your consent for processing your
                personal information, cancel your account, or request that we no
                longer use your personal information to provide you the service
                or access to our Platform, please contact us at details
                indicated in the contact point (l) below. Please note, however,
                that your withdrawal of consent or cancellation of account may
                result in us not being able to provide you with our service or
                access to our Platform, or terminate any existing relationship
                that we may have with you.
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <ol style={{ listStyleType: "disc", paddingLeft: "50px" }}>
                  <li className="listed">
                    <b>Changes to this privacy policy</b>
                  </li>
                </ol>
                If we decide to change our privacy policy, we will post those
                changes on this page so that you are always aware of what
                information we collect, how we use it, and under what
                circumstances we disclose it.
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <ol style={{ listStyleType: "disc", paddingLeft: "50px" }}>
                  <li className="listed">
                    <b>Updating Your Information</b>
                  </li>
                </ol>
                If you wish to amend or update your personal information, you
                may do so by emailing support@jiffy.ae with your request. A
                member of Our customer support team will be in touch regarding
                your request.
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <ol style={{ listStyleType: "disc", paddingLeft: "50px" }}>
                  <li className="listed">
                    <b>Children’s Privacy</b>
                  </li>
                </ol>
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <ol style={{ listStyleType: "disc", paddingLeft: "50px" }}>
                  <li className="listed">
                    Protecting the privacy of young children is especially
                    important. Our service is not available to persons under the
                    age of 18 (eighteen) years and minors, and we do not
                    knowingly collect personal information from minors without
                    obtaining parental consent.
                  </li>
                </ol>
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <ol style={{ listStyleType: "disc", paddingLeft: "50px" }}>
                  <li className="listed">
                    If the user is under 18 (eighteen) years of age, then the
                    legal guardian of the user shall ensure that their consent
                    is provided for their ward to access the services. If we
                    learn that a person under 18 (eighteen) years of age has
                    used or accessed the service or any personally identifiable
                    information has been collected on the service from persons
                    under 18 (eighteen) years of age without consent from their
                    legal guardian, then we will take the appropriate steps to
                    delete this information. If you are a parent or guardian and
                    discover that your child under 18 (eighteen) years of age
                    has obtained an account on or otherwise accessed the
                    service, then you may alert us at support@jiffy.ae and
                    request that we delete that child’s personally identifiable
                    information from our systems.
                  </li>
                </ol>
              </Typography>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                <b>Indemnity</b>
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                You agree to indemnify and hold us harmless from:
                <ol style={{ listStyleType: "disc", paddingLeft: "50px" }}>
                  <li className="listed">
                    any actions, claims, demands, suits, damages, losses,
                    penalties, interest and other charges and expenses
                    (including legal fees and other dispute resolution costs)
                    made by any third party due to or arising out of any
                    violation of the terms of this Policy.
                  </li>
                  <li className="listed">
                    any acts or deeds, including for any non-compliance or
                    violation, of any applicable law, rules, regulations on your
                    part.
                  </li>
                  <li className="listed">for fraud committed by you.</li>
                </ol>
              </Typography>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                <b>Governing Law and Dispute Resolution</b>
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                In accordance with the relevant Law and the rules thereunder,
                the name and the details of the Grievance Officer at Our company
                is provided below. You may,
                <ol style={{ listStyleType: "disc", paddingLeft: "50px" }}>
                  <li className="listed">
                    request access to your Personal Information,
                  </li>
                  <li className="listed">
                    report any grievances in relation to your Personal
                    Information,
                  </li>
                  <li className="listed">
                    any security breach in relation to your Personal
                    Information; to the:
                  </li>
                </ol>
                Grievance Officer: Mr. Sachin Vijay, Mr. Palissery John Rajan
                <br />
                Email: support@jiffy.ae
                <br />
                This Privacy Policy shall be governed by and construed in
                accordance with the laws of India and subject to the provisions
                of arbitration set out herein, the courts at Bangalore, India
                shall have exclusive jurisdiction in relation to any Disputes
                (defined below) arising out of or in connection with this
                Privacy Policy.
                <br />
                Any adverse action, dispute or difference arising under or
                relating to this Policy (“Dispute”) shall at the first instance
                be resolved through good faith negotiations between the parties
                hereto, which negotiations shall begin promptly, within 15
                (fifteen) days after a party has delivered to the other party a
                written request for such negotiations. If the parties are unable
                to resolve the Dispute in question within 15 (fifteen) days of
                the commencement of such negotiations, the Dispute shall be
                referred to and finally resolved by arbitration in accordance
                with the Indian Arbitration and Conciliation Act, 1996, as
                amended from time to time and rules prescribed thereunder. When
                any Dispute is under arbitration, except for the matters under
                dispute, We and you shall continue to exercise the remaining
                respective rights and fulfil the remaining respective
                obligations under this Policy.
                <br />
                The arbitration shall be conducted by a sole arbitrator
                appointed by Jiffy and the seat of arbitration shall be
                Bangalore, India.
                <br />
                The language of the arbitration proceedings and of all written
                decisions and correspondence relating to the arbitration shall
                be English.
                <br />
                <b>Notices</b>
                <br />
                Notices or other communication required or permitted to be given
                to us shall be in writing and delivered personally, or by
                registered post acknowledgement due, or by internationally
                recognized courier service, or by legible fax addressed to Our
                address set out below, or to such other address or fax number as
                We may from time to time notify to you to us:
                <br />
                Address: Office suite # 24, First Gulf Business Center LLC,
                Madina Mall, Muhaisnah 4, Dubai - UAE
                <br />
                Attention of: Mr. Sachin Vijay/ Mr. Palissery John Rajan
                <br />
                Contact No: +971 56 8813286
                <br />
                Email: support@jiffy.ae
                <br />
                <b>Waiver</b>
                <br />
                No failure or delay in exercising any right, power or remedy, by
                us under this Policy shall operate as a waiver thereof. No
                single or partial exercise of any right, power or remedy under
                this Policy by us shall preclude any further exercise thereof or
                the exercise of any other right, power or remedy by us.
              </Typography>
            </Box>
          </Fade>
        </Modal>
      </div>
    </Grid>
  );
}
export default withStyles(AuthenticationStyle)(Footer)

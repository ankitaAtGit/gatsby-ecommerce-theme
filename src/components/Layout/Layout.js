import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';
import * as styles from './Layout.module.css';

// CSS not modular here to provide global styles
import './Globals.css';

const Layout = ({ props, children, disablePaddingBottom = false }) => {
  useEffect(() => {
    const scriptTag = document.createElement("script");
    scriptTag.innerHTML = `var userloveq = []; function userlove(method, args) { (!!userloveMethods && userloveMethods[method]) ? userloveMethods[method](args) : userloveq.push({ method: method, args: args }); } (function (l, o, v, e) { if (l["a_id"]) { return; } l["a_id"] = e; l["dm"] = l.location.hostname; l[v] = l[v] || []; l[o] = {}; var s = document.createElement("script"); s.async = true; s.src = "https://cdn.userlove.io/wrapper.dev.js?v=" + Date.now(); var t = document.getElementsByTagName("script")[0]; t.parentNode.insertBefore(s, t); })(window, "userloveMethods", "userloveDL", "4ZHFVL8VB6")`;
    document.head.appendChild(scriptTag);
  }, []);
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        
      </Helmet>

      <Header />
      <main
        className={`${styles.main} ${
          disablePaddingBottom === true ? styles.disablePaddingBottom : ''
        }`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

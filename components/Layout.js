import React from 'react';
import Head from 'next/head';
const Layout = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      {children}
    </div>
  );
};

Layout.defaultProps = {
  title: 'Events Listing App',
  description: 'Find events as your interst',
  keywords: 'Events, Music, Development, Facebook',
};

export default Layout;

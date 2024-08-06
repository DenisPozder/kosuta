import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const HelmetContent = ({ title, description, keywords, canonical }) => {
  return (
    <HelmetProvider>
        <Helmet>
            <title>{`${title}`}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
            <link rel='canonical' href={canonical} />
        </Helmet>
    </HelmetProvider>
  )
}

export default HelmetContent
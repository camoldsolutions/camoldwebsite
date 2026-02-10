import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, keywords, image, type = 'website', structuredData }) => {
    const location = useLocation();
    const siteUrl = 'https://camoldsolutions.com';
    const currentUrl = `${siteUrl}${location.pathname}`;
    const defaultImage = 'https://images.squarespace-cdn.com/content/v1/695e124922ee964abeffdd7f/3afe0f26-ea59-467c-8422-779a5c0b9cb0/MOD+4.PNG';

    const fullTitle = title ? `${title} | CA Mold Solutions` : 'CA Mold Solutions | Certified Mold Inspection & Remediation';

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <meta name="google-site-verification" content="NHv6uZ1sRce7WkvQFICNyA-OpJijREOHQTrc4jT1G2U" />
            <link rel="canonical" href={currentUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image || defaultImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={currentUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image || defaultImage} />

            {/* Structured Data */}
            {structuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;

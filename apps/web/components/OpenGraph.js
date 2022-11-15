import Head from "next/head";

export const OpenGraph = ({ metadata = {} }) => {
    const SEO = {
        title:
            metadata.title ||
            "POO Java",
        description:
            metadata.description ||
            "Tutorial sobre java en el paradigma orientado a objetos...",
        slug: metadata.slug || "",
        date: metadata.date || new Date().toISOString(),
    };

    return (
        <Head>
            <title>{SEO.title}</title>
            <meta name="robots" content="follow, index" />
            <meta content={SEO.description} name="description" />

            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="POO Java" />
            <meta property="og:description" content={SEO.description} />
            <meta property="og:title" content={SEO.title} />
            <meta property="og:image" content={SEO.image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@java" />
            <meta name="twitter:title" content={SEO.title} />
            <meta name="twitter:description" content={SEO.description} />
            <meta name="twitter:image" content={SEO.image} />
            <meta property="article:published_time" content={SEO.date} />
        </Head>
    );
};

import Head from 'next/head'

export default function MyHead({ title, description }) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="joyce jeoung" content="index, follow" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
        </Head>
    );
};
import Head from "next/head"

const Meta = ({title, keywords, description}) => {
    return (
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    )
}

Meta.defaultProps = {
    title : 'WedDev Newz',
    keywords : 'Web development, programming, react',
    description: 'Get the latest Web dev news'
}

export default Meta

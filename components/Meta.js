import Head from "next/head";
import Script from "next/script";
const Meta = (props) => (
  <Head>
    <title>{props.title}</title>
    <meta charset="utf-8"></meta>
    <meta name="description" content={props.desc} />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={props.title} />
    <meta name="keywords" content={props.keywords} />
    <meta
      name="og:description"
      property="og:description"
      content={props.desc}
    />
    <meta property="og:site_name" content="KK Legal Portal" />
    <meta property="og:url" content={`${props.canonical}`} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={props.title} />
    <meta name="twitter:description" content={props.desc} />
    <meta name="twitter:site" content="@Kerubi5s" />
    <meta name="twitter:creator" content="@Kerubi5s" />
    <link rel="icon" type="image/png" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/favicon.ico" />
    {props.css && <link rel="stylesheet" href={`${props.css}`} />}
    {props.image ? (
      <meta property="og:image" content={`${props.image}`} />
    ) : (
      <meta
        property="og:image"
        content="https://pbs.twimg.com/profile_images/961218223168397314/k7ehkZsK_400x400.jpg"
      />
    )}
    {props.image && <meta name="twitter:image" content={`${props.image}`} />}
    {props.canonical && <link rel="canonical" href={`${props.canonical}`} />}
    {props.js && <Script src={`${props.js}`}></Script>}
  </Head>
);
export default Meta;

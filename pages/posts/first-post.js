import Head from 'next/Head';
import Link from 'next/Link';
import Layout from '../../components/layout';
const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Go back</a>
        </Link>
      </h2>
    </Layout>
  );
};

export default FirstPost;

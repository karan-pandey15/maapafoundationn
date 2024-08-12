import Head from 'next/head';
import { Container } from 'react-bootstrap';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Maapa Foundation</title>
        <meta name="description" content="Learn more about Maapa Foundation, our mission, and our team." />
      </Head>
      <Container className="py-5">
        <h1>About Us</h1>
        <p>This is the About Us page. You can add your content here.</p>
      </Container>
    </>
  );
}

import Col from "../components/layouts/Col";
import Container from "../components/layouts/Container";
import Image from "next/image";

export default function Home() {
  return (
    <Container className='mb-12 py-2'>
      <Col className='bg-red-100' colEnd={[25, null, 18, null, 14]}>
        <p>Lorem, ipsum.</p>
      </Col>

      <Col className='bg-blue-100' colStart={[2, null, 18, null, 14]} colEnd={[26, null, 24, null, 26]}>
        <p>Lorem, ipsum.</p>
      </Col>

    </Container>
  );
}
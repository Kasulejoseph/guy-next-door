import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import Layouts from "../components/Layouts";
import { Container } from "react-bootstrap";
import styles from "../styles/Home.module.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layouts>
      <Container>
        <main className={styles.main}>
          <Component {...pageProps} />
        </main>
      </Container>
    </Layouts>
  );
}

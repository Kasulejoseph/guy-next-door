import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import Layouts from "../components/Layouts/Layouts";
import { Container } from "react-bootstrap";
import styles from "../styles/Home.module.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layouts>
        <main className={styles.main}>
        <Container>
          <Component {...pageProps} />
        </Container>
        </main>
    </Layouts>
  );
}

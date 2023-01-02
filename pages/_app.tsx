import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import Layouts from "../components/Layouts/Layouts";
import { Container } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import { wrapper } from "../store/store";
import { Provider } from "react-redux";

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <Provider store={store}>
      <Layouts>
        <main className={styles.main}>
          <Container>
            <Component {...pageProps} />
          </Container>
        </main>
      </Layouts>
    </Provider>
  );
}

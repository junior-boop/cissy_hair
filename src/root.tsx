// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Link,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";
import { Footer, NavBar, Vide } from "./components";



export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>AJEC - The official Web Site</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Link rel="shortcut icon" type="image/ico" href="/favicon.jpg" />
      </Head>
      <Body>
        <ErrorBoundary>
          <NavBar />
          <Vide />
          <Suspense>
            <main>
              <Routes>
                <FileRoutes />
              </Routes>
            </main>
          </Suspense>
          <Footer />
        </ErrorBoundary>
        <Scripts />
      </Body>
    </Html>
  );
}

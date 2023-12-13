import "@/styles/globals.css";
import { ReactNode } from "react";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

const AppWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <RecoilRoot>
      <MiddleApp>{children}</MiddleApp>
    </RecoilRoot>
  );
};

const MiddleApp = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}

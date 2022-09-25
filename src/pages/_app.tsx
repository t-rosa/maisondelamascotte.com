import "@fontsource/allura";
import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Modal from "../components/Modal";

const queryClient = new QueryClient();

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Modal />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default MyApp;

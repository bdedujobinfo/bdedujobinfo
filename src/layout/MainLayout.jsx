
import { useNavigation } from "react-router-dom";
import { Footer } from "../components/shared/Footer";
import { Outlet } from "react-router-dom";
import Loading from "../components/loading/Loading";

import { Header } from "../components/shared/Header";

export const MainLayout = () => {
  const navigation = useNavigation();

  return (
    <>
      <Header />

      <main className="max-w-screen-lg mx-auto">
        {navigation.state === "loading" ? <Loading /> : <Outlet />}
      </main>
      <Footer />
    </>
  );
};

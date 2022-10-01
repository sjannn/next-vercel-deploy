import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";

export default function About() {
  return (
    <>
      <h1>About Page</h1>

      <h1 className={"title"}>
        Ir a <Link href="/">Home!</Link>
      </h1>

      <p className={"description"}>
        Puedes seguir editando el <code className={"code"}>pages/index.js</code>
      </p>
    </>
  );
}

About.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>

      {page}

    </MainLayout>
  );
};

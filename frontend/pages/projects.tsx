import { AsideBlock } from "@/components/aside-block";
import { Header } from "@/components/header/header";
import { ProjectsMain } from "@/components/projects-main";
import Head from "next/head";

export default function Projects() {
  return (
    <>
        <Head>
            <title>Trood Comunity</title>
        </Head>
        <div>
            <Header />
            <main>
                <AsideBlock active="Projects" />
                <ProjectsMain />
            </main>
        </div>
    </>
  )
}
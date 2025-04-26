import { AsideBlock } from "@/components/aside-block";
import { Header } from "@/components/header/header";
import { VacanciesMain } from "@/components/vacancies-main";
import Head from "next/head";

export default function Vacancies() {
  return (
    <>
        <Head>
            <title>Trood Comunity</title>
        </Head>
        <div>
            <Header />
            <main>
                <AsideBlock active="Vacancies" />
                <VacanciesMain />
            </main>
        </div>
    </>
  )
}
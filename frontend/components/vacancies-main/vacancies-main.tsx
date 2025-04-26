import { CreateVacancy } from "./create-vacancy";
import { useRouter } from "next/router";
import { EditVacancy } from "./edit-vacancy/edit-vacancy";

export function VacanciesMain() {
    const router = useRouter();
    const { query } = router;

    return (
        <div className="bg-[#F3F4F6] h-[calc(100vh_-_120px)] overflow-auto w-[calc(100vw_-_316px)] float-right min-h-[calc(100vh_-_120px)] rounded-[16px] mt-[120px]">
            <div className="max-w-[1076px] mx-auto px-4">
                {/* {query.mode === "create" && <CreateProject />} */}
                {query.mode === "edit" && <EditVacancy />}
                {!query.mode && <CreateVacancy />}
            </div>
        </div>
    )
}
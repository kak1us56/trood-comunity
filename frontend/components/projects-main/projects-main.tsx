// import { useState } from "react";
import { CreateProject } from "./create-project";
import { Projects } from "./projects/projects";
// import { StateContext, StatesType } from "../constants/context";
import { EditProject } from "./edit-project";
import { useRouter } from "next/router";

export function ProjectsMain() {
    // const [projectsActive, setProjectsActive] = useState<boolean>(true);
    // const [createProjectActive, setCreateProjectActive] = useState<boolean>(false);
    // const [editProjectActive, setEditProjectActive] = useState<boolean>(false);
  
    const router = useRouter();
    const { query } = router;

    // const states: StatesType = {
    //     projectsActive,
    //     setProjectsActive,
    //     createProjectActive,
    //     setCreateProjectActive,
    //     editProjectActive,
    //     setEditProjectActive,
    // };

    return (
        <div className="bg-[#F3F4F6] h-[calc(100vh_-_120px)] overflow-auto w-[calc(100vw_-_316px)] float-right min-h-[calc(100vh_-_120px)] rounded-[16px] mt-[120px]">
            <div className="max-w-[1076px] mx-auto px-4">
                {query.mode === "create" && <CreateProject />}
                {query.mode === "edit" && <EditProject />}
                {!query.mode && <Projects />}
            </div>
        </div>
    )
}
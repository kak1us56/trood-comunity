import { StateContext, StatesType } from "@/components/constants/context"
import { PassedProject } from "./passed-project"
import { ProjectItem } from "./project-item"
import { useContext } from "react"

export function Projects() {
    const states: StatesType = useContext(StateContext);

    return (
        <div className={`${states.projectsActive ? 'block' : 'hidden'}`}>
            <div className="flex items-center justify-between pt-[56px]">
                <h2 className="aer-med text-[32px] lh-n text-black">
                    Active projects
                </h2>
                <button 
                    onClick={() => {
                        states.setCreateProjectActive(true);
                        states.setProjectsActive(false)
                    }}
                    className="w-[186px] h-[47px] bg-[#D1D2D6] rounded-[24px] flex items-center justify-center cursor-pointer text-black aer-med text-[20px] lh-n">
                    Create project
                </button>
            </div>
            <div className="py-[28px] flex flex-wrap justify-between gap-y-[24px]">
                <ProjectItem 
                    header="Creating visual materials for social media"
                    stages={['Finished creating visual for Facebook', 'Finished creating visual for Facebook', 'Finished creating visual for Facebook', 'Finished creating visual for Facebook']}
                    autor="Anna Lenram" />
                <ProjectItem 
                    header="Creating visual materials for social media"
                    stages={['Finished creating visual for Facebook', 'Finished creating visual for Facebook', 'Finished creating visual for Facebook', 'Finished creating visual for Facebook']}
                    autor="Anna Lenram"
                    notifications />
            </div>
            <h2 className="aer-med text-[32px] lh-n text-black pt-3 pb-8">
                Passed projects
            </h2>
            <div className="pb-[28px] flex flex-wrap justify-between gap-y-[24px]">
                <PassedProject header="Analyzing research and providing ideas for impoving product" autor="Anna Lenram" />
            </div>
        </div>
    )
}
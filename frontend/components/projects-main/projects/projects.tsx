import { useEffect, useState } from "react";
import { PassedProject } from "./passed-project"
import { ProjectItem } from "./project-item"
import { useRouter } from "next/router";
import { ProjectProps } from "@/components/constants/interfaces";

export function Projects() {
    const [projects, setProjects] = useState<ProjectProps[] | null>(null)
    const router = useRouter();

    useEffect(() => {
        fetch("/api/projects")
          .then((res) => res.json())
          .then((data) => setProjects(data))
          .catch((err) => console.error("Error projects", err));
    }, []);
    
    // Filter passed and active projects by deadline
    const today = new Date();
    
    const activeProjects = projects?.filter((project) => {
        const [day, month, year] = project.deadline?.split('.').map(Number) as [number, number, number];
        const deadlineDate = new Date(year, month - 1, day);
        return deadlineDate >= today;
    }) || [];

    const passedProjects = projects?.filter((project) => {
        const [day, month, year] = project.deadline?.split('.').map(Number) as [number, number, number];
        const deadlineDate = new Date(year, month - 1, day);
        return deadlineDate < today;
    }) || [];

    return (
        <div className={`block`}>
            <div className="flex items-center justify-between pt-[56px]">
                <h2 className="aer-med text-[32px] lh-n text-black">
                    Active projects
                </h2>
                <button 
                    onClick={() => {
                        router.push('/projects?mode=create');
                    }}
                    className="w-[186px] h-[47px] bg-[#D1D2D6] rounded-[24px] flex items-center justify-center cursor-pointer text-black aer-med text-[20px] lh-n">
                    Create project
                </button>
            </div>
            <div className="py-[28px] flex flex-wrap justify-between gap-y-[24px]">
                {activeProjects.length > 0 ? (
                    activeProjects.map((project) => (
                        <ProjectItem
                            key={project.id}
                            id={project.id}
                            name={project.name}
                            description={project.description}
                        />
                    ))
                ) : (
                    <p className="aer-reg text-[16px]/[110%] lh-n text-black">No active projects</p>
                )}
                
            </div>
            <h2 className="aer-med text-[32px] lh-n text-black pt-3 pb-8">
                Passed projects
            </h2>
            <div className="pb-[28px] flex flex-wrap justify-between gap-y-[24px]">
                {passedProjects.length > 0 ? (
                    passedProjects.map((project) => (
                        <PassedProject
                            key={project.id}
                            id={project.id}
                            name={project.name}
                        />
                    ))
                ) : (
                    <p className="aer-reg text-[16px]/[110%] lh-n text-black">No passed projects</p>
                )}
            </div>
        </div>
    )
}
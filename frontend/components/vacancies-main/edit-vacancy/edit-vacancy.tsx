import { VacancyProps } from "@/components/constants/interfaces";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export const EditVacancy = () => {
    const router = useRouter();
    const { project_id, id } = router.query;
    const [vacancyData, setVacancyData] = useState<VacancyProps | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        field: "",
        experience: "",
        deadline: "",
        description: "",
    });
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            if (!id || !project_id) return;
    
            try {
                const projectRes = await fetch(`/api/projects/${project_id}`); // loading a projects deadline
                if (!projectRes.ok) {
                    throw new Error("Failed to fetch project");
                }
                const project = await projectRes.json();
    
                const vacanciesRes = await fetch(`/api/projects/${project_id}/vacancies`); // loading vacancies
                if (!vacanciesRes.ok) {
                    throw new Error("Failed to fetch vacancies");
                }
                const vacancies = await vacanciesRes.json();
                const foundVacancy = vacancies.find((vacancy: VacancyProps) => vacancy.id.toString() === id); // find a vacancy by id
                setVacancyData(foundVacancy);
    
                if (project && foundVacancy) {
                    let formattedDeadline = "";

                    if (project?.deadline) {
                        const parts = project.deadline.split(".");
                        if (parts.length === 3) {
                            const [day, month, year] = parts;
                            formattedDeadline = `${year}-${month}-${day}`;
                        }
                    }
                    
                    setFormData({
                        name: project.name,
                        field: foundVacancy.field,
                        experience: foundVacancy.experience,
                        deadline: formattedDeadline,
                        description: foundVacancy.description,
                    });
                }
    
                setIsLoading(false);
    
            } catch (error) {
                console.error("Failed to load data", error);
            }
        };
    
        fetchData();
    }, [id, project_id]);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSave = async () => {
        if (!id || !project_id || !vacancyData) return;

        if (!formData.description.trim() || 
            !formData.experience.trim() || 
            !formData.deadline.trim() || 
            !formData.field.trim()) {
            alert("Please fill in all the fields before to edit the vacancy.");
            return;
        }

        try {
            const [year, month, day] = formData.deadline?.split("-");
            const formattedDeadline = `${day}.${month}.${year}`;

            const projectRes = await fetch(`/api/projects/${project_id}`);
            const existingProject = await projectRes.json();
            
            await fetch(`/api/projects/${project_id}`, { // changes the projects deadline
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...existingProject,
                    deadline: formattedDeadline,
                }),
            });

            await fetch(`/api//vacancies/${id}`, { // changes vacancy`s propertys
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    field: formData.field,
                    experience: formData.experience,
                    description: formData.description,
                }),
            });

            router.push('/projects')
        } catch (error) {
            console.error("Failed to save changes", error);
            alert("Failed to save changes");
        }
    };
    
    if (isLoading) {
        return <div>Loading...</div>;
    }

    const handleDelete = async () => {
        try {
            const response = await fetch(`/api/vacancies/${id}`, {
                method: "DELETE",
            });
    
            if (response.ok) {
                router.push('/projects');
            } else {
                alert("Failed to delete project");
            }
        } catch (error) {
            console.error("Error deleting project:", error);
            alert("An error occurred while deleting the project");
        }
    };

    return (
        <div className={`block`}>
            <div className="flex items-center justify-between pt-[56px] pb-[30px]">
                <h2 className="aer-med text-[32px] lh-n text-black">
                    {formData.name || "Loading..."}
                </h2>
                <button
                    onClick={handleDelete}
                    className="w-[186px] h-[47px] bg-[#D1D2D6] rounded-[24px] flex items-center justify-center cursor-pointer text-black aer-med text-[20px] lh-n">
                    Close vacancy
                </button>
            </div>
            <div className="w-full min-h-[700px] bg-white rounded-[24px] px-[66px] pt-[55px]">
                <form>
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-[10px]">
                            <label htmlFor="field" className="text-[18px]/[110%] text-black aer-reg">Field</label>
                            <select name="field" id="field"
                                value={formData.field}
                                onChange={handleChange}
                                className="aer-reg pl-3 text-[24px] text-black rounded-[8px] border-2 border-[#D3D4D8] w-[285px] h-[80px]">
                                <option value="">Select field</option>
                                <option value="Design">Design</option>
                                <option value="Development">Development</option>
                                <option value="Marketing">Marketing</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <label htmlFor="experience" className="text-[18px]/[110%] text-black aer-reg">Experience</label>
                            <input
                                value={formData.experience}
                                onChange={handleChange}
                                type="text" id="experience" className="aer-reg text-[24px] text-black pl-3 rounded-[8px] border-2 border-[#D3D4D8] w-[285px] h-[80px]" />
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <label htmlFor="deadline" className="text-[18px]/[110%] text-black aer-reg">Deadline</label>
                            <input 
                                value={formData.deadline}
                                onChange={handleChange}
                                type="date" id="deadline" className="aer-reg text-[24px] text-black pl-3 rounded-[8px] border-2 border-[#D3D4D8] w-[285px] h-[80px]" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-[10px] pt-[28px]">
                        <p className="text-[18px]/[110%] text-black aer-reg">
                            Descriprion
                        </p>
                        <textarea id="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full h-[162px] pt-3 aer-reg text-[24px] text-black pl-3 rounded-[8px] border-2 border-[#D3D4D8]" />
                    </div>
                    <button
                        type="button"
                        onClick={handleSave}
                        className="w-[170px] h-[47px] mt-[35px] bg-[#D1D2D6] rounded-[24px] flex items-center justify-center cursor-pointer text-black aer-med text-[20px] lh-n">
                        Save changes
                    </button>
                </form>
            </div>
        </div>
    )
}
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";

export const EditProject = () => {
    const router = useRouter();
    const { id } = router.query;
    const [formData, setFormData] = useState({
        name: "",
        field: "",
        experience: "",
        deadline: "",
        description: "",
    });
    const [isLoading, setIsLoading] = useState(true); 
    const isMounted = useRef(false);

    useEffect(() => {
        const fetchProject = async () => {
            if (!id) return;

            try {
                const response = await fetch(`/api/projects/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch project');
                }
    
                const data = await response.json();

                const [day, month, year] = data.deadline.split(".");
                const formattedDeadline = `${year}-${month}-${day}`;

                setFormData({
                    name: data.name,
                    field: data.field,
                    experience: data.experience,
                    deadline: formattedDeadline,
                    description: data.description,
                });

                setIsLoading(false);
            } catch (error) {
                console.error("Failed to load project", error);
            }
        };

        if (id) {
            fetchProject();
        }
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const saveChanges = async () => {
        try {
            const [year, month, day] = formData.deadline.split("-");
            const formattedDeadline = `${day}.${month}.${year}`;

            const updatedProject = {
                ...formData,
                deadline: formattedDeadline,
            };

            await fetch(`/api/projects/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedProject),
            });
        } catch (error) {
            console.error("Error auto-saving project:", error);
        }
    };

    useEffect(() => {
        if (isLoading) return;

        isMounted.current = true;

        const handleBeforeUnload = async (event: BeforeUnloadEvent) => {
            event.preventDefault();
            await saveChanges();
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            if (isMounted.current) {
                saveChanges();
            }
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [formData, isLoading]);

    const handleDelete = async () => {
        try {
            const response = await fetch(`/api/projects/${id}`, {
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
                    Delete project
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
                        className="w-[170px] h-[47px] mt-[35px] bg-[#D1D2D6] rounded-[24px] flex items-center justify-center cursor-pointer text-black aer-med text-[20px] lh-n">
                        Add vacancy
                    </button>
                </form>
            </div>
        </div>
    )
}
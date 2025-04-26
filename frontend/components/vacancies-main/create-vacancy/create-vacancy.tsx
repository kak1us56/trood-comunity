import { useRouter } from "next/router";
import { useState } from "react";

export function CreateVacancy() {
    const router = useRouter();
    const { project_id } = router.query;
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        description: "",
        experience: "",
        country: "",
        field: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const newVacancy = {
            name: formData.name,
            description: formData.description,
            country: formData.country,
            experience: formData.experience,
            field: formData.field,
        };

        try {
            const response = await fetch(`/api/projects/${project_id}/vacancies`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newVacancy),
            });

            if (response.ok) {
                router.push('/projects');

                setFormData({
                    id: "",
                    name: "",
                    description: "",
                    experience: "",
                    country: "",
                    field: "",
                });
            } else {
                alert("Failed to create project");
            }
        } catch (error) {
            console.error("Error creating project:", error);
            alert("Error creating project");
        }
    };

    return (
        <div className={`block`}>
            <h2 className="aer-med text-[32px] lh-n text-black pt-[60px] pb-8">
                Create vacancy
            </h2>
            <div className="w-full min-h-[700px] bg-white rounded-[24px] px-[66px] pt-[55px]">
                <form onSubmit={handleSubmit}>
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-[10px]">
                            <label htmlFor="name" className="text-[18px]/[110%] text-black aer-reg">Name</label>
                            <input
                                value={formData.name}
                                onChange={handleChange}
                                type="text" id="name" className="aer-reg text-[24px] text-black pl-3 rounded-[8px] border-2 border-[#D3D4D8] w-[424px] h-[80px]" />
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <label htmlFor="field" className="text-[18px]/[110%] text-black aer-reg">Field</label>
                            <select name="field" id="field"
                                value={formData.field}
                                onChange={handleChange}
                                className="aer-reg pl-3 text-[24px] text-black rounded-[8px] border-2 border-[#D3D4D8] w-[424px] h-[80px]">
                                <option value="" selected>Field</option>
                                <option value="Design">Design</option>
                                <option value="Development">Development</option>
                                <option value="Marketing">Marketing</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-between pt-5">
                        <div className="flex flex-col gap-[10px]">
                            <label htmlFor="experience" className="text-[18px]/[110%] text-black aer-reg">Experience</label>
                            <input 
                                value={formData.experience}
                                onChange={handleChange}
                                type="text" id="experience" className="aer-reg text-[24px] text-black pl-3 rounded-[8px] border-2 border-[#D3D4D8] w-[424px] h-[80px]" />
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <label htmlFor="country" className="text-[18px]/[110%] text-black aer-reg">Country</label>
                            <input
                                value={formData.country}
                                onChange={handleChange}
                                type="text" id="country" className="aer-reg text-[24px] text-black pl-3 rounded-[8px] border-2 border-[#D3D4D8] w-[424px] h-[80px]" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-[10px] pt-[28px]">
                        <p className="text-[18px]/[110%] text-black aer-reg">
                            Descriprion
                        </p>
                        <textarea id="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full h-[162px] aer-reg text-[24px] text-black pl-3 rounded-[8px] border-2 border-[#D3D4D8]" />
                    </div>
                    <button
                        type="submit"
                        className="w-[186px] h-[47px] mt-[35px] bg-[#D1D2D6] rounded-[24px] flex items-center justify-center cursor-pointer text-black aer-med text-[20px] lh-n">
                        Create vacancy
                    </button>
                </form>
            </div>
        </div>
    )
}
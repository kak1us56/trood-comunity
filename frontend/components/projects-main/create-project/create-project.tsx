import { StateContext, StatesType } from "@/components/constants/context"
import { useContext } from "react"

export function CreateProject() {
    const states: StatesType = useContext(StateContext);

    return (
        <div className={`${states.createProjectActive ? 'block' : 'hidden'}`}>
            <h2 className="aer-med text-[32px] lh-n text-black pt-[60px] pb-8">
                Creating project
            </h2>
            <div className="w-full min-h-[700px] bg-white rounded-[24px] px-[66px] pt-[55px]">
                <form>
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-[10px]">
                            <label htmlFor="name" className="text-[18px]/[110%] text-black aer-reg">Name</label>
                            <input type="text" id="name" className="aer-reg text-[24px] text-black pl-3 rounded-[8px] border-2 border-[#D3D4D8] w-[424px] h-[80px]" />
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <label htmlFor="field" className="text-[18px]/[110%] text-black aer-reg">Field</label>
                            <select name="field" id="field"
                                className="aer-reg text-[24px] text-black rounded-[8px] border-2 border-[#D3D4D8] w-[424px] h-[80px]">
                                
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-between pt-5">
                        <div className="flex flex-col gap-[10px]">
                            <label htmlFor="experience" className="text-[18px]/[110%] text-black aer-reg">Experience</label>
                            <input type="text" id="experience" className="aer-reg text-[24px] text-black pl-3 rounded-[8px] border-2 border-[#D3D4D8] w-[424px] h-[80px]" />
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <label htmlFor="field" className="text-[18px]/[110%] text-black aer-reg">Deadline</label>
                            <input type="text" id="experience" className="aer-reg text-[24px] text-black pl-3 rounded-[8px] border-2 border-[#D3D4D8] w-[424px] h-[80px]" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-[10px] pt-[28px]">
                        <p className="text-[18px]/[110%] text-black aer-reg">
                            Descriprion
                        </p>
                        <textarea name="descriprion" id="descriprion"
                            className="w-full h-[162px] aer-reg text-[24px] text-black pl-3 rounded-[8px] border-2 border-[#D3D4D8]">

                        </textarea>
                    </div>
                    <button
                        className="w-[186px] h-[47px] pt-3 mt-[35px] bg-[#D1D2D6] rounded-[24px] flex items-center justify-center cursor-pointer text-black aer-med text-[20px] lh-n">
                        Create project
                    </button>
                </form>
            </div>
        </div>
    )
}
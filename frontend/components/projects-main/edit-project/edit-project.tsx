import { StateContext, StatesType } from "@/components/constants/context"
import { useContext } from "react"

export const EditProject = () => {
    const states: StatesType = useContext(StateContext);

    return (
        <div className={`${states.editProjectActive ? 'block' : 'hidden'}`}>
            <div className="flex items-center justify-between pt-[56px] pb-[30px]">
                <h2 className="aer-med text-[32px] lh-n text-black">
                    Creating visual materials for social media
                </h2>
                <button
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
                                className="aer-reg text-[24px] text-black rounded-[8px] border-2 border-[#D3D4D8] w-[285px] h-[80px]">
                                
                            </select>
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <label htmlFor="experience" className="text-[18px]/[110%] text-black aer-reg">Experience</label>
                            <input type="text" id="experience" className="aer-reg text-[24px] text-black pl-3 rounded-[8px] border-2 border-[#D3D4D8] w-[285px] h-[80px]" />
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <label htmlFor="deadline" className="text-[18px]/[110%] text-black aer-reg">Deadline</label>
                            <input type="text" id="deadline" className="aer-reg text-[24px] text-black pl-3 rounded-[8px] border-2 border-[#D3D4D8] w-[285px] h-[80px]" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-[10px] pt-[28px]">
                        <p className="text-[18px]/[110%] text-black aer-reg">
                            Descriprion
                        </p>
                        <textarea name="descriprion" id="descriprion"
                            className="w-full h-[162px] pt-3 aer-reg text-[24px] text-black pl-3 rounded-[8px] border-2 border-[#D3D4D8]">

                        </textarea>
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
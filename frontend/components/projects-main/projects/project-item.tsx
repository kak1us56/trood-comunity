import Image from "next/image"
import { ProjectProps } from "../../constants/interfaces"
import autorIcon from './images/autor.png';
import message from './images/message.png';
import notification from './images/notification.png';
import { StateContext, StatesType } from "@/components/constants/context";
import { useContext } from "react";

export const ProjectItem: React.FC<ProjectProps> = ({ header, stages, notifications, autor }) => {
    const states: StatesType = useContext(StateContext);

    return (
        <div 
            onClick={() => {
                states.setEditProjectActive(true);
                states.setProjectsActive(false);
            }}
            className="w-[508px] h-[325px] bg-white rounded-[24px] px-7">
            <h2 className="aer-med text-[24px]/[110%] text-black pt-8">
                {header}
            </h2>
            <div className="flex flex-col h-[139px] gap-[13px] pt-[27px]">
                {stages && stages.map((stage, i) => (
                    <div key={i} className="flex gap-[15px] items-center">
                        <div className="bg-[#E8EBEA] h-[25px] w-1 rounded-[50px]"></div>
                        <p className="aer-reg text-[16px]/[110%] lh-n text-black">
                            {stage}
                        </p>
                    </div>
                ))}
            </div>
            <div className={`${autor ? 'justify-between' : 'justify-end'} flex pt-[45px] items-center`}>
                <div className={`${autor ? 'flex' : 'hidden'} items-center gap-[10px]`}>
                    <Image src={autorIcon} alt="autor" />
                    <p className="text-[#9D9D9D] text-[14px] lh-n aer-reg">
                        {autor}
                    </p>
                </div>
                <div className="flex gap-[17px]">
                    <div className="cursor-pointer">
                        <Image src={message} alt="message" />
                    </div>
                    <div className="relative cursor-pointer">
                        <Image src={notification} alt="notification" />
                        <div className={`${notifications ? 'block' : 'hidden'} absolute w-[9px] h-[9px] bg-black rounded-[50%] right-[-4px] bottom-[4px]`}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
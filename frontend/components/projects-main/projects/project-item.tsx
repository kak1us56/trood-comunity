import Image from "next/image"
import { ProjectProps } from "../../constants/interfaces"
import autorIcon from './images/autor.png';
import message from './images/message.png';
import notification from './images/notification.png';
import { useRouter } from "next/router";

export const ProjectItem: React.FC<ProjectProps> = ({ id, name, description, notifications, autor }) => {
    const router = useRouter();

    return (
        <div 
            onClick={() => {
                router.push(`/projects?mode=edit&id=${id}`);
            }}
            className="w-[508px] min-h-[325px] bg-white rounded-[24px] px-7 cursor-pointer relative">
            <h2 className="aer-med text-[24px]/[110%] text-black pt-8">
                {name}
            </h2>
            <div className="flex flex-col min-h-[149px] gap-[13px] pt-[27px] pb-[89px] aer-reg text-[16px]/[110%] lh-n text-black">
                {description}
            </div>
            <div className={`${autor ? 'justify-between' : 'justify-end'} flex pt-[45px] items-center absolute bottom-4 right-7`}>
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
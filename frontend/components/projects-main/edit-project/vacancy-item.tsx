import { VacancyProps } from "@/components/constants/interfaces"
import { useRouter } from "next/router";

export const Vacancy: React.FC<VacancyProps> = ({ id, name, description, field, project_id, country }) => {
    const router = useRouter();

    return (
        <div 
            onClick={() => {
                if (id) {
                    router.push(`/vacancies?mode=edit&project_id=${project_id}&id=${id}`);
                }
            }}
            className="w-full min-h-[112px] pt-[26px] pb-[30px] flex justify-between items-center cursor-pointer">
            <div className="flex gap-[98px]">
                <div className="flex flex-col gap-[10px]">
                    <p className="aer-med text-[24px]/[110%] text-black">
                        {field}
                    </p>
                    <p className="aer-reg text-[18px]/[110%] text-black">
                        {name}
                    </p>
                </div>
                <div className="aer-reg text-[18px]/[110%] text-black max-w-[320px]">
                    {description}
                </div>
                <div className="hidden">
                    {country}
                </div>
            </div>
            <div className="flex gap-[98px] items-center">
                <div className="bg-[#F3F4F6] w-[60px] h-[40px] flex justify-center items-center rounded-[16px]">
                    <p className="aer-med text-[18px]/[110%] text-black">
                        9/10
                    </p>
                </div>
                <p className="aer-reg text-[18px]/[110%] text-black">
                    More →
                </p>
            </div>
        </div>
    )
}
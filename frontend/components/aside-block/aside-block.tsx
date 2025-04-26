import { useRouter } from "next/router";

interface Props {
    active: 'Main' | 'Projects' | 'Vacancies' | 'People' | 'Tests' | 'Settings';
}

export const AsideBlock: React.FC<Props> = ({ active }) => {
    const router = useRouter();

    return (
        <aside className="bg-white max-w-[274px] h-[calc(100vh_-_120px)] mt-[120px] float-left fixed flex flex-col justify-between px-10 pb-10">
            <menu>
                <div className={`${active === 'Main' ? 'bg-[#C2C5CB]' : ''} w-[200px] h-[50px] pl-5 aer-reg text-[14px] text-black lh-n flex items-center rounded-[12px] cursor-pointer`}>
                    Main page
                </div>
                <div 
                    onClick={() => {
                        router.push('/projects');
                    }}
                    className={`${active === 'Projects' ? 'bg-[#C2C5CB]' : ''} w-[200px] h-[50px] pl-5 aer-reg text-[14px] text-black lh-n flex items-center rounded-[12px] cursor-pointer`}>
                    Projects
                </div>
                <div 
                    className={`${active === 'Vacancies' ? 'bg-[#C2C5CB]' : ''} w-[200px] h-[50px] pl-5 aer-reg text-[14px] text-black lh-n flex items-center rounded-[12px] cursor-pointer`}>
                    Vacancies
                </div>
                <div className={`${active === 'People' ? 'bg-[#C2C5CB]' : ''} w-[200px] h-[50px] pl-5 aer-reg text-[14px] text-black lh-n flex items-center rounded-[12px] cursor-pointer`}>
                    People
                </div>
                <div className={`${active === 'Tests' ? 'bg-[#C2C5CB]' : ''} w-[200px] h-[50px] pl-5 aer-reg text-[14px] text-black lh-n flex items-center rounded-[12px] cursor-pointer`}>
                    Tests
                </div>
                <div className={`${active === 'Settings' ? 'bg-[#C2C5CB]' : ''} w-[200px] h-[50px] pl-5 aer-reg text-[14px] text-black lh-n flex items-center rounded-[12px] cursor-pointer`}>
                    Settings
                </div>
            </menu>
            <p className="aer-reg text-[16px] lh-n text-[#AAB4B6] cursor-pointer">
                Log out
            </p>
        </aside>
    )
}
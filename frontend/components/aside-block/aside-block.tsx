export function AsideBlock() {
    return (
        <aside className="bg-white max-w-[274px] h-[calc(100vh_-_120px)] mt-[120px] float-left fixed flex flex-col justify-between px-10 pb-10">
            <menu>
                <div className="w-[200px] h-[50px] pl-5 aer-reg text-[14px] text-black lh-n flex items-center rounded-[12px] cursor-pointer">
                    Main page
                </div>
                <div className="w-[200px] h-[50px] bg-[#C2C5CB] pl-5 aer-reg text-[14px] text-white lh-n flex items-center cursor-pointer rounded-[12px]">
                    Projects
                </div>
                <div className="w-[200px] h-[50px] pl-5 aer-reg text-[14px] text-black lh-n flex items-center rounded-[12px] cursor-pointer">
                    Vacancies
                </div>
                <div className="w-[200px] h-[50px] pl-5 aer-reg text-[14px] text-black lh-n flex items-center rounded-[12px] cursor-pointer">
                    People
                </div>
                <div className="w-[200px] h-[50px] pl-5 aer-reg text-[14px] text-black lh-n flex items-center rounded-[12px] cursor-pointer">
                    Tests
                </div>
                <div className="w-[200px] h-[50px] pl-5 aer-reg text-[14px] text-black lh-n flex items-center rounded-[12px] cursor-pointer">
                    Settings
                </div>
            </menu>
            <p className="aer-reg text-[16px] lh-n text-[#AAB4B6] cursor-pointer">
                Log out
            </p>
        </aside>
    )
}
import Image from "next/image"
import Link from "next/link"
import avatar from './images/avatar.png';
import notification from './images/notification.png';
import message from './images/message.png';

export function Header() {
    return (
        <header>
            <div className="bg-white min-h-[120px] w-full fixed">
                <div className="max-w-[1396px] mx-auto px-4 pt-10 flex justify-between items-center">
                    <p className="aer-black text-[24px] lh-n text-black uppercase">
                        Trood Community
                    </p>
                    <div className="flex gap-[26px]">
                        <Link href={'/'} className="my-auto">
                            <Image src={message} alt="message" />
                        </Link>
                        <Link href={'/'} className="my-auto">
                            <Image src={notification} alt="notification" />
                        </Link>
                        <div className="flex items-center gap-4">
                            <div className="rounded-[50%]">
                                <Image src={avatar} alt="avatar" />
                            </div>
                            <p className="aer-reg text-[16px] text-[#9CA3AF] lh-n">
                                Alex Smith
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
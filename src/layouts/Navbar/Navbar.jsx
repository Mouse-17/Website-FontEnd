import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="absolute top-[0px] right-[0px] shadow-[0px_4px_40px_rgba(0,_0,_0,_0.5)] bg-black w-[1920px] h-[88px] opacity-[0.5]" />
            <div className="absolute top-[36px] left-[1771px] w-[53px] h-[25px] text-xl">
                <Link to={'/login'} className="absolute h-[96%] w-[181.13%] top-[0%] left-[0%] font-semibold inline-block text-white">
                    로그인
                </Link>
            </div>
            <div className="absolute top-[36px] left-[1606px] w-[93px] h-[25px] text-xl">
                <Link to={'/'} className="absolute h-[96%] w-[103.23%] top-[0%] left-[0%] font-semibold inline-block text-white">
                    기업 소개서
                </Link>
            </div>
            <div className="absolute top-[30px] left-[312px] w-[116px] h-7 text-xl">
                <Link to={'/gathertesters'} className="absolute h-[77.5%] w-[137.93%] top-[0%] left-[0%] inline-block text-white">
                    신청서 제출
                </Link>
            </div>
            <div className="absolute top-[30px] left-[508px] w-[116px] h-7 text-xl">
                <Link to={'/influencer'} className="absolute h-[80.71%] w-[80.17%] top-[0%] left-[0%] inline-block text-white">
                    실시간 견적
                </Link>
            </div>
            <div className="absolute top-[30px] left-[704px] w-[116px] h-7 text-xl">
                <Link to={'projectmanaging'} className="absolute h-[80.71%] w-[118.1%] top-[0%] left-[0%] inline-block text-white">
                    마이 페이지
                </Link>
            </div>
        </>
    )
}

export default Navbar
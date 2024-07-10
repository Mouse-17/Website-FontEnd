import React, { useState } from 'react';
import { loginAdmin } from '../services/Auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const loginData = { email, password };
            const response = await loginAdmin(loginData);
            // Handle the response, e.g., store the token, redirect the user, etc.
            toast.success('Login successful!');
            navigate('/');
            console.log('Login successful:', response);
        } catch (error) {
            console.error('Login failed:', error);
            toast.error('Login failed. Please try again.');
        }
    };

    return (
        <div className="w-full relative bg-black h-[1080px] overflow-x-auto text-right text-xl text-white font-suit-variable">
            {/* <ToastContainer /> */}
            <div className="absolute top-[0px] left-[calc(50%_-_960px)] bg-black w-[1920px] h-[7240px]" />
            <div className="absolute top-[809px] left-[0px] w-[1920px] h-[191px] text-center text-xs">
                <div className="absolute h-[1.05%] w-full top-[0%] right-[0%] bottom-[98.95%] left-[0%] bg-gray" />
                <div className="absolute h-[7.85%] w-[14.01%] top-[92.15%] right-[43.07%] bottom-[0%] left-[42.92%]">
                    <div className="absolute top-[0%] left-[0%]">이용약관</div>
                    <div className="absolute top-[0%] left-[20.07%]">개인정보 처리방침</div>
                    <div className="absolute top-[0%] left-[56.88%]">이메일주소무단수집거부</div>
                </div>
                <div className="absolute h-[13.09%] w-[6.51%] top-[21.99%] right-[46.82%] bottom-[64.92%] left-[46.67%] text-xl">
                    <b className="absolute top-[0%] left-[0%]">비엣티</b>
                    <b className="absolute top-[0%] left-[56.8%]">Viety</b>
                </div>
                <b className="absolute top-[43.46%] left-[44.06%] whitespace-pre-wrap">대표자 : 이재석 | 개인정보 관리책임자 : 이재석</b>
                <div className="absolute top-[55.5%] left-[35.26%]">
                    Tel. 064-725-5413 | 주소- 제주특별자치도 제주시 천수로6길 25, 2층 1011호 | e mail - rheejaeseok@gmail.com
                </div>
                <div className="absolute top-[67.54%] left-[39.95%]">사업자등록번호 : 458-34-00543 | 통신판매등록번호 : 0000-서울강남-0000</div>
            </div>
            <img className="absolute top-[232px] left-[calc(50%_-_248px)] w-[496px] h-48 overflow-hidden" alt="" src="/on-2.svg" />
            <div className="absolute top-[456px] left-[calc(50%_-_310px)] w-[620px] h-[138px] text-5xl">
                <div className="absolute h-[43.48%] w-[58.06%] top-[0%] right-[19.35%] bottom-[56.52%] left-[22.58%] rounded-11xl">
                    <input
                        type="text"
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-11xl box-border border-[2px] border-solid border-white bg-transparent text-white p-2"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="absolute h-[43.48%] w-[58.06%] top-[56.52%] right-[19.35%] bottom-[0%] left-[22.58%] rounded-11xl">
                    <input
                        type="password"
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-11xl box-border border-[2px] border-solid border-white bg-transparent text-white p-2"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="absolute h-full w-[16.77%] top-[0%] right-[0%] bottom-[0%] left-[83.23%] rounded-[52px] bg-deeppink cursor-pointer" onClick={handleLogin} />
                <b className="absolute h-[21.74%] w-[12.9%] top-[36.23%] left-[85.16%] flex text-center items-center justify-center">Login</b>
            </div>
            <div className="absolute top-[628px] left-[828px] w-[285px] h-[25px]">
                <b className="absolute top-[0%] left-[0%]">회원가입</b>
                <b className="absolute top-[0%] left-[36.49%] text-left">아이디 / 비밀번호 찾기</b>
                <div className="absolute h-4/5 w-[0.7%] top-[12%] right-[69.12%] bottom-[8%] left-[30.18%] bg-white" />
            </div>
            <img className="absolute top-[359px] left-[1462px] w-[550.2px] h-[550.2px] object-contain" alt="" src="/rectangle-19@2x.png" />
            <img className="absolute top-[738.51px] left-[1375.29px] w-[415.6px] h-[415.6px] object-contain" alt="" src="/rectangle-18@2x.png" />
            <img className="absolute top-[798px] left-[-63px] w-[662.9px] h-[292px] object-contain" alt="" src="/live-1@2x.png" />
            <div className="absolute top-[0px] left-[0px] w-[1920px] h-[88px] text-left">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_4px_40px_rgba(0,_0,_0,_0.5)] bg-black opacity-[0.5]" />
                <div className="absolute h-[28.41%] w-[2.76%] top-[40.91%] right-[5%] bottom-[30.68%] left-[92.24%]">
                    <div className="absolute h-[96%] w-[181.13%] top-[0%] left-[0%] font-semibold inline-block">로그인</div>
                </div>
                <div className="absolute h-[28.41%] w-[4.84%] top-[40.91%] right-[11.51%] bottom-[30.68%] left-[83.65%]">
                    <div className="absolute h-[96%] w-[103.23%] top-[0%] left-[0%] font-semibold inline-block">기업 소개서</div>
                </div>
                <div className="absolute h-[31.82%] w-[6.04%] top-[34.09%] right-[77.71%] bottom-[34.09%] left-[16.25%]">
                    <div className="absolute h-[77.5%] w-[137.93%] top-[0%] left-[0%] inline-block">신청서 제출</div>
                </div>
                <div className="absolute h-[31.82%] w-[6.04%] top-[34.09%] right-[67.5%] bottom-[34.09%] left-[26.46%]">
                    <div className="absolute h-[80.71%] w-[80.17%] top-[0%] left-[0%] inline-block">신청서 제출</div>
                </div>
            </div>
        </div>
    );
};

export default Login;

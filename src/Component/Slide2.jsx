import React from "react";
import "../App.css";
import lineImage from '../../public/image2.png'
import lineImage2 from '../../public/image3.png'

const Slide2 = () => {
  const car =
    "https://s3-alpha-sig.figma.com/img/e1a5/faca/56682dd6c8b72c126e9397956f9954c4?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iKGez3nfy7V7ZVAAb58uxfa1zDD6q57YL9dxmxg4cwTSGsBtH3AAjMFzqeyMwCndFB8ML1Hkt~QCunjf-MmBLJNG5rMJ5BZTFTtDGAWdC3KJZ3edF3D7nngnu7QgArNo22iO-T-HoJrrCqk5f2b39zvg7lVYxsp3FVtCGHzZFr6QXwiLx3nAN955LYF8fSTjdcTSPaeFwgyHL2ccp8pwtg-pPFSBbz191bEhB~9pg5vXOmMofFN5KV9fRSCWCckuDpA7xwy9ktu81UqCcga~Xr8ME-Bl6QaoSUajJndBpeDGF4d2i2XQDL1zOpkFU6jwYnELyUS82bVWjfCHZiexSQ__";
  const verify =
    "https://s3-alpha-sig.figma.com/img/aed3/8100/ec9b542b51128624bcecc8ae6854371f?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mq6F8f8FCQ51uHcEhB6n3ipyu0jhVSUwRKcVaUnTykQJ28t6r853uigAx0CSExCbXEMtu5myfLd4z5xvIOD5F6DEb~r0JlMXw6~fq7EIRa-8pz12cP1Kv4D0WGfOx8nTX1puEU2dkBDj3mNwzQKktUSHwHngkcD~6luoXtUp7dS~VsOTSbdXWPSr50WNWge5YgArh2pmWR8Mb-b7e-ZSc0o9dbSiKaWdviMnQPVj4Sno9Iwz19vnNjSK-cKXvErAnyOF2FGKjquwmvWS0fJ0FII5Zdo9CoqBao4ilewu~thKx17VyKVrysfIN7ty5mMLBp96FxewcTYrmyzvK5DMtw__";
  const user =
    "https://s3-alpha-sig.figma.com/img/a866/a122/ef85a47a90d9f47051092030e0c7d91e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j-gJNs-CKJyfVlf~7jcYHMi7HhEJaojCkXAlUZ0F7QKLCPjkMgUIrZquQ4IUSZoiI~8Ngo3NbjfQbHEYsrrDJb3fYEgSvxtMGcqd~rE0DYYvadGqAXBAzpC0roiBI8aXZEIrQvXxkEm1PaVCegcmVbeUkmj-ioJJK0rG0cxmDsCCx7fG7xOuDnHz8okfhy7jcV9BstefMT2iZaQhl9GgitNY4vIrRF6h6s-oO-oatiZ1PAMX67bZ4Ihivjy9tejp9~J~IuqQNlYNCOsEyPXncz1Q0iKVps0BWk8hMFdB4HeieowgSDFuDjzk3v5-hJzv8nLwNzoX3j13zLxIC2z0WQ__";

  return (
    <>
      <div className="flex flex-row gap-8 px-20 py-20 h-[650px]">
        <div>
          <div>
            <div className="px-1 w-[140px] py-0.5 text-center text-sm bg-[#F8F8F8] font-bold border-l-2 border-l-green-500">
              How It Is Works
            </div>
            <div className="my-5 w-[500px] text-3xl font-bold half-border">
              Simple Steps To Get Started
            </div>
          </div>

          <div className="flex flex-col gap-14 mt-14 justify-center  ml-3">
            <div className="flex flex-row justify-center items-center gap-10">
              <div className="border-2 w-14 flex items-center justify-center h-14 border-dotted rounded-full ">
                <img
                  src={user}
                  width={"40px"}
                  height={"40px"}
                  className="bg-slate-100 rounded-full p-[5px]"
                  alt=""
                />
              </div>
              <div className="bg-[#F8F8F8] w-[430px] h-auto px-6 py-3 rounded-lg text-sm font-semibold">
                <div className="text-green-600 mb-2"> Register Online</div>
                <div>
                  Fill out our easy online application form and pay the
                  registration fee of Rs. 999
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-center items-center gap-10">
              <div className="border-2 w-14 flex items-center justify-center h-14 border-dotted rounded-full ">
                <img
                  src={verify}
                  width={"40px"}
                  height={"40px"}
                  alt=""
                  className="bg-slate-100 p-[5px] rounded-full"
                />
              </div>
              <div className="bg-[#F8F8F8] w-[430px] h-auto px-6 py-3 rounded-lg text-sm font-semibold">
                <div className="text-green-600 mb-2">Get Verified</div>
                <div>
                  Complete the verification process to ensure you meet our
                  standards.
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-center items-center gap-10">
              <div className="border-2 w-14 flex items-center justify-center h-14 border-dotted rounded-full ">
                <img
                  src={car}
                  width={"40px"}
                  height={"40px"}
                  alt=""
                  className="bg-slate-100 p-[5px]  rounded-full"
                />
              </div>
              <div className="bg-[#F8F8F8] w-[430px] h-auto px-6 py-3 rounded-lg text-sm font-semibold">
                <div className="text-green-600 mb-2">Start Driving</div>
                <div>
                  Once approved, start accepting delivery requests and earn
                  money
                </div>
              </div>
            </div>
          </div>

          <div className="relative -top-[440px] left-10 -z-30" >
            <img src={lineImage} width={'2px'} alt="" />
          </div>
          <div className="relative -top-[750px] left-14 -z-30" >
            <img src={lineImage2} width={'50px'} alt="" />
          </div>
          <div className="relative -top-[605px] left-14 -z-30" >
            <img src={lineImage2} width={'50px'} alt="" />
          </div>
          <div className="relative -top-[455px] left-14 -z-30" >
            <img src={lineImage2} width={'50px'} alt="" />
          </div>
        </div>

        <div className="flex justify-center mt-20">
          <iframe
            width={"571px"}
            height={"457px"}
            src="https://lottie.host/embed/f95ea9d2-cdd3-4e55-92da-88ce2cfb56df/y3DGAMozio.json"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Slide2;

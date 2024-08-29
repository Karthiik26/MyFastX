import React from "react";
import linesimage from "../../public/image.png";

const Slide1 = () => {
  const TruckImageAddress =
    "https://s3-alpha-sig.figma.com/img/7d99/d3df/d194737bca0081949e5068df96540571?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QF3~qdw-8YSkqwnhOi10QkWpxE-bs8Tc9AQe4apwBmjxmUhB3-RIja9POK33QCFpvbvepAg-Hjwk4krzhBZWkHbZ6t1X6ZC5vGFHieeEZuUaZ~cFaLEM96XcrR82AmEsXaP0-VJw~IadjXf9YKoeXCdfSR5IN3U~R3Ty-NKNlUgcSX4eiCdgZUr~Uj4X24-KKhyiu8GNnnuB10Q3uARTq1y-Gu76BTcHXErVDiliCAcO7oPCEqUbWzh3aZvZnTcwMQ5VBr5Aw5IfrSylF3tbZpSHgT-ozwG3RBSQn-QuH7XL7MGjHpcYbjBy9RTcprkSYjvL~JspR5T5Ip78pMovnQ__";

  const FourDivLoop = [
    {
      Name: "IncreaseImage",
      ImageUrl:
        "https://s3-alpha-sig.figma.com/img/aaf9/244f/1576421e5f09c19dc57fab4a07a4f758?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SP7ipbp2qbZrgIIviEwwMgsTH8eKEzoGq2pUVqL521W3LypQ~2Nxz5vdz2Ai0HBNacNAATF~R8l19KjYXgLO9vPXAcYO7XKTvlJtMsWjjswCUKne1bQuWdfs7Ud0lxtSCPW2ovxkixC~N56kT9AV~VcUMmP8YykX88XTroc6z6YXhGLByRzFjNtm9EXM-C-Wv3E5WcFlebm1xK3akPAptq6b-1zevRyufAlud7P0XZD2e8qNuhloqc3UFVaodvtag0ltmevbpF7LDVy6uyZsPmisb8Y2AET6DUrdey1l1DtcoEtag~vILLPCwUd4ibLlOHAjmzdlPOAM3jtMf1kLcQ__",
      Title: "Reliable Income ",
      Details: "Earn a steady income with consistent delivery requests.",
    },
    {
      Name: "ScheduleImage",
      ImageUrl:
        "https://s3-alpha-sig.figma.com/img/422e/b56f/ad51c832f1122090e237d09e5734a8f8?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NLKmUjbm~CJSmrfAjIOBWjTNix73WEK3jdcSoutwDHERB3wqTIa4AtMs0Q60oOAjKa4I3vBLmT64BiC-wTO7l9N~WADSpbjMtnRsQwVOLQL6j7U~1am~1rXV2~LZnNXj2wpmg9jH7uTVEHFgqyGMKT59TwH5-FiYnP6t1vq6h5UKTBCQ7GKtmhCM8heWZXMYyYvtlNmDGyMn5baC32txJwisd~tze5kM9BW5f2RVx0~HFHBqhuje~bEKAEWXYeKyEy~17l545B3FqRJXnj-2gzRlg-q3SFMOGv~P7wckhEUkKgeEAERSK-yengMPGGt56NpjnWzmcbnkLNEYeeoWYQ__",
      Title: "Support",
      Details: "Choose your working hours and balance your personal life.",
    },
    {
      Name: "SupportImage",
      ImageUrl:
        "https://s3-alpha-sig.figma.com/img/dd4b/fdc8/a661eba10cf0df5944b73f2ae1e64817?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jEJMlVwaMtIatlLseWY7~COLmS85PB~UmL8J5H-QqMSXlXqMhZx3UdHJ1-mFW1FUQhSsyFBIHN~qN0C5h75~lpdz1CG6NtH9kGFaV0H6XyATkC9pr05C0FTtWR4gAQVHMkq88N0VVz-6mci4lhwDqY0YYqjweJUVdtnQOmE8bT8YsWNqnhmGTl2K1FDhdIxt~O0t4qgjH8C2c4LYv9CORxGVbF4646j~uhI0V43qdt9MQAD9HEuQrgO87GLrvmQLyDCCAHCvlqB3S-aegOQSRwcFzYyhNm1Fyn-sC7uo9oJningpjURjfwVQwRkR2Y0DBADavGs1Ya0PK2C1shGybA__",
      Title: "Flexible Schedule",
      Details:
        "Access our dedicated support team whenever you need assistance.",
    },

    {
      Name: "TransactionImage",
      ImageUrl:
        "https://s3-alpha-sig.figma.com/img/1dfb/ad64/fd1651d8209a8d40bf097456bacf9711?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHeUWfavM5kDhNZ6-LBW1NyhTWWpjgcUhB0Wx1E8ZbOVjeZyRw1tiG-~36hpKesAB8403M~yTLq4ZINH7Cn8gZw8rgtuRvDxfKyVJTXGCbbvBhE64eS3HjA3o9iCh49c7ZmBP5rquhpS3wvwvKI7oYso-QsBrwu8u-BgL6jpEX5Rf4U3SZsxe2HFr8M~WsJhRfacDVQ9Xra1vy7zwCMgumUniktyKQ0wNzvd7z2gtwYLlp8su0winI-PN3WAySMz5YrynL140nE-6Hjzv-5Qi4eUa062aCvcFrC~jZjyJa6gX1-wPtY5VdtRM~DFvIgdvw490~Lb~Ny7yJQfXWZQZQ__",
      Title: "Growth opportuninies",
      Details:
        "Advance your career with regular training and development programs.",
    },
  ];

  return (
    <>
      <div className="flex md:flex-row flex-col gap-4 md:px-20 pt-0 ">
        <div className="md:w-[396px] h-[570px] bg-[#F8F8F8] md:rounded-xl p-10 text-center">
          <img
            src={TruckImageAddress}
            alt="Image Not Found"
            width={"292px"}
            height={"219px"}
          />
          <div className="flex flex-col mt-14 gap-5 text-[13px] ">
            <div className="font-bold md:text-lg">
              Welcome to MyFast<span className="text-green-500">X</span>{" "}
              <span className="text-green-500">Partner</span>
            </div>
            <div className="text-green-500 text-[12px] font-bold md:text-[16px]">
              Quick & Reliable Delivery and Logistics Solution
            </div>
            <div className="text-slate-800 font-sans  md:text-[14px] md:w-[300px]">
              At MyFastX, we are revolutionizing the delivery and logistics
              industry by providing swift, dependable services to our clients.
              Our mission is to ensure every package reaches its destination on
              time, every time.
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex-1 h-[376px] bg-[#F8F8F8] md:rounded-xl">
            <img
              src={linesimage}
              className="max-[320px]:w-auto max-[320px]:h-36"
              alt="Image Not Found"
            />
            <div className="px-7 md:px-10 pt-4 flex gap-3 flex-col md:text-[13px]">
              <div className="text-green-500 text-[11px] md:text-[13px] font-semibold tracking-wide">
                Drive Your Succes with MyFastx
              </div>
              <div className="md:text-[22px] text-sm font-bold font-[Poppins]">
                Join Us as a Partner Driver
              </div>
              <div className="text-[10.1px] md:text-[16px] md:mr-32  ">
                Are you a vehicle owner looking for new opportunities? Join
                MyFastX today and become part of a dynamic network of drivers.
                With us, you’ll enjoy flexible work hours, competitive earnings,
                and the satisfaction of delivering smiles across the city
              </div>
              <div className="md:mt-3 mt-2.5 -ml-0.5 pb-8 md:pb-2">
                <button className="md:px-6 px-3 py-1.5 md:py-2 md:text-[12px] text-[10px] bg-black text-white rounded-lg">
                  Register now for just Rs. 999!
                </button>
              </div>
            </div>
          </div>

          <div className="md:flex md:flex-row gap-4 grid grid-cols-2 p-3">
            {FourDivLoop.map((data, index) => (
              <div
                key={index}
                className="bg-[#F2FAF5] text-black rounded-xl p-3 flex flex-col md:items-start items-center text-center md:text-left "
              >
                <div className="text-left">
                <img
                  src={data?.ImageUrl}
                  width="44"
                  height="44"
                  alt={data?.Title}
                  className=""
                />
                  <div className="md:text-xs text-[10px] font-semibold mt-2.5 text-green-500">
                    {data?.Title}
                  </div>
                  <div className="md:text-xs text-[10px] mt-1 font-semibold">
                    {data?.Details}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Slide1;

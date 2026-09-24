import Image from "next/image";
import { climateCrisis, darumadropOne } from "../font";
import ImageCard from "../components/ImageCard";
import { JobButton } from "../components/job-button";
import DriveVideoCard from "../components/DriveVideoThumb";

export default function DesktopEight() {
  return (
    <main className="mx-auto min-h-svh w-full max-w-[1920px] bg-[var(--main6)] px-6 pt-16 sm:px-10 lg:px-16">
      <div className="w-full min-h-screen  p-4 flex justify-center items-center">
        {/* Khung Hóa Đơn Chính */}
        <div className="w-full max-w-2xl bg-white rounded-3xl p-6 md:p-10 shadow-[8px_8px_0px_0px_rgba(218,206,191,1)] border border-stone-200">
          {/* 1. Tiêu đề chính */}
          <h1
            className={`${climateCrisis.className} text-center font-black text-xl md:text-2xl text-[var(--main1)] uppercase tracking-wide mb-6`}
          >
            Com Tam Portfolio Receipt
          </h1>

          {/* Đường gạch đứt đoạn 1 */}
          <div className="border-t-2 border-dashed border-[var(--main5)] my-4"></div>

          {/* 2. Thông tin Order & Table (Responsive: Mobile 1 cột, Desktop 2 cột) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[var(--main2)] font-bold text-base md:text-lg uppercase">
            <div className="space-y-1">
              <div>
                <span className="">Order #:</span> 2027-FUTURE
              </div>
              <div>
                <span className="">Table:</span> Academics & Beyond
              </div>
            </div>
            <div className="space-y-1 sm:text-right">
              <div>
                <span className="">Date:</span> Today
              </div>
              <div>
                <span className="">Server:</span> Me
              </div>
            </div>
          </div>

          {/* Đường gạch đứt đoạn 2 */}
          <div className="border-t-2 border-dashed border-[var(--main5)] my-4"></div>

          {/* 3. Danh sách Items món ăn */}
          <div className="space-y-4 my-6 text-[var(--main1)]">
            <div className="  font-black text-base md:text-lg uppercase tracking-wider">
              [Qty] Item
            </div>

            {/* List items */}
            <div className="space-y-3 font-bold text-base md:text-lg">
              <div className="flex items-start gap-2">
                <span className=" shrink-0">[01]</span>
                <p className="">
                  <span className=" uppercase">Hat Tam</span>{" "}
                  <span className=" font-medium">(Resourceful Leadership)</span>
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className=" shrink-0">[01]</span>
                <p className="">
                  <span className=" uppercase">Suon Nuong</span>{" "}
                  <span className=" font-medium">(Resilience Under Heat)</span>
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className=" shrink-0">[01]</span>
                <p className="">
                  <span className=" uppercase">Op Let</span>{" "}
                  <span className=" font-medium">
                    (Creative Fashion & Styling)
                  </span>
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className=" shrink-0">[01]</span>
                <p className="">
                  <span className=" uppercase">Cha Lua</span>{" "}
                  <span className=" font-medium">
                    (Writing & Unveiled Herstory)
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Đường gạch đứt đoạn 3 */}
          <div className="border-t-2 border-dashed border-[var(--main5)] my-4"></div>

          {/* 4. Phần Tổng kết (Subtotal / Talents) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base md:text-lg font-black uppercase my-6 text-[var(--main2)]">
            <div className="space-y-2 ">
              <div>Subtotal:</div>
              <div>Tax / Value-Added:</div>
              <div className="">Total:</div>
            </div>
            <div className="space-y-2  sm:text-right">
              <div>Diverse Talents</div>
              <div>Purpose & Drive</div>
              <div className="">Ready to Impact</div>
            </div>
          </div>

          <div className="border-t-2 border-dashed border-[var(--main5)] my-4"></div>

          {/* 5. Khối Highlight Quote màu vàng */}
          <div className="bg-[var(--main5)]  rounded-xl p-4 my-6 text-center">
            <p className="text-[var(--main1)] font-bold text-base md:text-lg uppercase tracking-wide leading-relaxed">
              &quot;Mission Complete! Hats off to the chef for assembling a
              plate with so much flavor and vision.&quot;
            </p>
          </div>

          {/* Đường gạch đứt đoạn 4 */}
          <div className="border-t-2 border-dashed border-[var(--main5)] my-4"></div>

          {/* 6. Lời cảm ơn chân trang */}
          <div className="text-center font-bold text-base md:text-lg text-[var(--main1)] space-y-1 mt-6">
            <div>Thank you for visiting my creative kitchen!</div>
            <div className="   ">Stay hungry for what comes next...</div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-16">
        <JobButton
          href="/"
          color="var(--main3)"
          hoverColor="var(--main4)"
          textColor="var(--main5)"
          hoverTextColor="var(--main5)"
          className=" "
          isBack={true}
        >
          Back to Home
        </JobButton>
      </div>
    </main>
  );
}

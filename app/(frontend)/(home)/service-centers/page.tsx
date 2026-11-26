import { getServiceCenter } from "@/actions/serviceCenter";
import React from "react";
import BannerImage from "../about-us/BannerImage";
import About from "./About";
import WhyChoose from "./WhyChoose";

export const metadata = {
  title: "Service Center | Peach Cars",
};
const page = async () => {
  const res: any = await getServiceCenter();

  const { about, coverImage, whyChooseUs = [], footer } = res;
  console.log("service center", res);
  return (
    <div className="min-h-screen">
      <BannerImage path={coverImage?.asset?.url} />

      <div className="max-w-6xl px-4 lg:px-0 mx-auto">
        <About about={about} />

        {/* Services section */}

        <WhyChoose values={whyChooseUs} footer={footer} />
      </div>
    </div>
  );
};

export default page;

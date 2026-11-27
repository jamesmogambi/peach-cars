import { getCarByID } from "@/actions/car";
import LayoutHeader from "@/components/LayoutHeader";
import React from "react";
import Link from "next/link";
import CarDetails from "../../detail/[carID]/CarDetails";
import ButtonLink from "@/components/ButtonLink";
import { notFound } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params, searchParams }: Props) {
  const { slug } = await params;
  const car = await getCarByID(slug);
  if (!car) {
    return { title: "Car not found" };
  }
  return {
    title: `Reserve | ${car.carName} | ${car.productid} `,
    description: car.carName,
  };
}

const ReserveButton = async ({ carSlug }: { carSlug: string }) => {
  const { userId } = await auth();
  
  if (!userId) {
    return (
      <ButtonLink
        href={`/login?redirect=/reserve/${carSlug}`}
        className="bg-primary hover:bg-primary/90 py-7 w-full lg:w-2/3 mx-auto my-10 text-lg"
        text="Sign in to Reserve"
      />
    );
  }
  
  return (
    <ButtonLink
      href={`/checkout?car=${carSlug}`}
      className="bg-black hover:bg-black hover:opacity-80 py-7 w-full lg:w-2/3 mx-auto my-10 text-lg"
      text="reserve this car"
    />
  );
};

const page = async ({ params }: any) => {
  const { slug } = await params;
  const car = await getCarByID(slug);
  if (!car) notFound();
  return (
    <div className="min-h-screen py-12">
      <div>
        <div className="flex justify-center items-center flex-col  gap-3">
          <div className="flex items-center gap-3">
            <Link className="text-primary text-lg" href={"/"}>
              Home
            </Link>
            <span className="text-[#6c757d]">/</span>
            <Link href="#" className="text-primary text-lg">
              All Stock
            </Link>
            <span className="text-[#6c757d]">/</span>
            <Link href="#" className="text-[#6c757d] text-lg">
              Reserve {car?.carName}
            </Link>
          </div>
          <h2 className="uppercase mt-3 font-semibold text-[35.2px]">
            {`Reserve ${car?.carName}`}
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <ReserveButton carSlug={slug} />
        </div>

        <CarDetails car={car} />
      </div>
    </div>
  );
};

export default page;

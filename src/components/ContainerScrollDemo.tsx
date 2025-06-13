
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { VerifiedIcon } from "lucide-react";

export function ContainerScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden bg-gradient-to-b from-background to-blue-50/20 ">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-5xl font-semibold text-foreground dark:text-white font-poppins leading-tight m-1">
              Unleash the power of <br />
              <span className="text-5xl md:text-[6rem] font-bold mt-4 leading-none gradient-text font-poppins">
                Local Business Growth
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mt-8 max-w-3xl mx-auto font-inter leading-relaxed">
              Transform your local presence with AI-powered optimization and data-driven strategies that deliver real results.
            </p>
          </>
        }
      >
       <video
  src="public\Tutorial 1 - Adding Images.mp4"
  height={500}
  width={1400}
  className="mx-auto rounded-2xl object-cover h-full object-left-top"
  controls
  controlsList="nodownload"
  draggable={false}
>
  Your browser does not support the video tag.
</video>
{/* <iframe
  
  height="720"
  width="1400"
  src="https://youtu.be/Yy4Io1Om5U4?si=7HJ_6mlKd307tYaK"
  title="YouTube video player"
  className="mx-auto rounded-2xl object-cover h-full object-left-top"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
></iframe> */}


        
      </ContainerScroll>
    </div>
  );
}
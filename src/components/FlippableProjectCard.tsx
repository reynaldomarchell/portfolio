"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Eye } from "lucide-react";
import { ProjectType } from "@/data/ProjectData";

const FlippableProjectCard = ({
  title,
  description,
  image,
  link,
  github,
  tools,
}: ProjectType) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-[400px] md:h-[500px]"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
          <div className="border py-4 px-3 rounded-md flex flex-col gap-2 justify-start h-full bg-slate-950 cursor-pointer hover:border-slate-700 transition-colors duration-300">
            {image && (
              <div className="h-48 md:h-60 w-full overflow-hidden rounded-md">
                <Image
                  src={image}
                  alt={title}
                  width={1040}
                  height={880}
                  unoptimized
                  className="object-cover h-full w-full"
                  priority
                />
              </div>
            )}
            <div className="flex flex-col justify-between h-full gap-2">
              <div className="flex gap-2 items-center border-b-2 py-2">
                <h3 className="text-lg font-semibold text-slate-50">{title}</h3>
              </div>
              <p className="text-sm md:text-base">{description}</p>
              <p className="flex gap-2 text-xl md:text-2xl">{tools}</p>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)] bg-slate-950 border rounded-md">
          <div className="h-full w-full flex flex-col items-center justify-center gap-8 p-6">
            <h3 className="text-xl md:text-2xl font-semibold text-slate-50 text-center">
              {title}
            </h3>

            <div className="flex gap-8">
              {link && (
                <Link
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-2 group"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-4 rounded-full bg-slate-900 group-hover:bg-slate-800 transition-colors">
                    <Eye className="w-8 h-8" />
                  </div>
                  <span className="text-sm">Visit Site</span>
                </Link>
              )}

              <Link
                href={github}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-2 group"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-4 rounded-full bg-slate-900 group-hover:bg-slate-800 transition-colors">
                  <Github className="w-8 h-8" />
                </div>
                <span className="text-sm">View Code</span>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FlippableProjectCard;

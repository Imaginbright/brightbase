import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  imgUrl: string;
  alt: string;
  value: number | string;
  href?: string;
  isAuthor?: boolean;
  textStyles: string;
  title: string;
  titleStyles?: string;
}

const Metric = ({
  imgUrl,
  alt,
  value,
  href,
  isAuthor,
  textStyles,
  title,
  titleStyles,
}: Props) => {
  const metricContent = (
    <>
      {imgUrl ? (
        <Image
          src={imgUrl}
          width={16}
          height={16}
          alt={alt}
          className="rounded-full object-contain border"
        />
      ) : (
        <div
          className="rounded-full border overflow-hidden"
          style={{
            width: 16,
            height: 16,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 10, // adjust for letter size
            backgroundColor: "#e5e7eb", // light gray fallback
            color: "#6b7280", // gray text
          }}
        >
          {alt ? alt[0].toUpperCase() : "?"}
        </div>
      )}

      <p className={`${textStyles} flex items-center gap-1`}>
        {value}
        {title ? (
          <span className={cn(`small-regular line-clamp-1`, titleStyles)}>
            {title}
          </span>
        ) : null}
      </p>
    </>
  );

  return href ? (
    <Link href={href} className="flex-center gap-1">
      {metricContent}
    </Link>
  ) : (
    <div className="flex-center gap-1">{metricContent}</div>
  );
};

export default Metric;

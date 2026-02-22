import * as React from "react";
import Image from "next/image";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  src: string;
  className?: string;
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function Avatar({ name, src, className, ...otherProps }: AvatarProps) {
  const showImage = !!src;
  return (
    <div
      role="img"
      aria-label={`Avatar of ${name}`}
      className={`inline-flex items-center bg-bg-default border-2 border-border-medium justify-center rounded-full w-11 h-11 overflow-hidden select-none ${className}`}
      {...otherProps}
    >
      {!showImage ? (
        <span
          aria-hidden="true"
          className="text-subtitle-2 font-semibold text-brand-bold"
        >
          {getInitials(name)}
        </span>
      ) : (
        <Image
          width={40}
          height={40}
          src={src}
          alt={`Avatar of ${name}`}
          className="h-10 w-10 rounded-full object-cover"
        />
      )}
    </div>
  );
}

export default Avatar;

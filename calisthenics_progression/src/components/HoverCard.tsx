import Image from "next/image";
import Link from "next/link";

type Props = {
  src: string;
  alt: string;
  label: string;
  href?: string;
  className?: string; // optional extra classes (e.g., different sizes)
};

export default function HoverCard({ src, alt, label, href, className }: Props) {
  const card = (

    <div className={`relative w-64 h-40 bg-white p-2 rounded shadow hover:shadow-xl hover:scale-105 transition-transform overflow-hidden group ${className ?? ""}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain transition-opacity duration-500 group-hover:opacity-20"
        priority
      />
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <p className="text-black text-3xl font-semibold opacity-0 transition-opacity duration-500 group-hover:opacity-100 text-center">
          {label}
        </p>
      </div>
    </div>
  );

  // Only make it a link if href was provided
  return href ? <Link href={href}>{card}</Link> : card;
}
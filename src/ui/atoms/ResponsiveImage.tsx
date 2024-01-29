import Image from "next/image";

export const ResponsiveImage = ({ src, alt }: { src: string; alt: string }) => {
	return <Image fill className="object-contain" src={src} alt={alt} />;
};

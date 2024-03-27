import Image from "next/image";

function PlatformLink({ href, alt, src }) {
  return (
    <li className="md:pr-5 pr-2 text-sm md:text-lg justify-center items-center whitespace-nowrap hidden sm:flex">
      PLATAFORMAS ONLINE:
      <a href={href} target="_blank" rel="noreferrer" className="ml-2">
        <Image
          className="grayscale hover:grayscale-0 duration-300"
          src={src}
          alt={alt}
          width={52}
          height={52}
          loading="lazy"
        />
      </a>
    </li>
  );
}

export default PlatformLink;

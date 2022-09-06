import Image from "next/image";
import Link from "next/link";

const Card = ({ id, title, img_uri }) => {
  return (
    <Link href={`/anime-details/${id}`}>
      <div className="rounded overflow-hidden shadow-lg">
        <Image
          src={img_uri}
          layout="responsive"
          width={30}
          height={50}
          alt="Anime conver"
          className="w-full"
        />
        <div className="px-6 py-4 flex flex-col justify-center items-center">
          <div className="font-bold text-xl text-center">{title}</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;

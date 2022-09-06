import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "../../components/loading";
import getAnimeDetails from "../api/getDetails";

const Details = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  const [animeDetails, setAnimeDetails] = useState({
    url: "",
    title: "",
    synopsis: "",
    images: { jpg: { image_url: "" } },
  });

  useEffect(() => {
    getAnimeDetails(id).then(setAnimeDetails, setIsLoading(false));
  }, [id]);

  if (isLoading) return <Loading title={animeDetails.title} />;
  else
    return (
      <div className="container mx-auto flex flex-row justify-center m-10">
        <Head>
          <title>{animeDetails.title} - AnySync</title>
        </Head>
        <picture>
          <img
            src={animeDetails.images.jpg.image_url}
            alt={`${animeDetails.title} image cover`}
          />
        </picture>

        <div className="pl-5">
          <h1 className="text-2xl font-bold tracking-tighter underline underline-offset-2 pb-5">
            {animeDetails.title}
          </h1>

          <p className="text-base tracking-tight max-w-lg">
            {animeDetails.synopsis}
          </p>
          <div className="flex flex-row items-center justify-center pt-5">
            <Link href={animeDetails.url}>
              <a className="rounded-md p-2 bg-[#1d75b7] text-[#faefe1] hover:underline underline-offset-2 transition duration-300 hover:scale-105 hover:drop-shadow-md delay-75">
                Check it!
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Details;

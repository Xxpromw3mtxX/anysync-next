import { useCallback, useEffect, useState } from "react";
import Card from "../components/card";
import Loading from "../components/loading";
import useInfiniteScroll from "../lib/useInfiniteScroll";
import getAnimes from "./api/getAnimes";

const Anime = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [animeList, setAnimeList] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState();
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreAnimes);

  useEffect(() => {
    getAnimes(page).then((result) => {
      setAnimeList(result.animes);
      setPage(page + 1);
      setLastPage(result.lastPage);
      setIsLoading(false);
    });
  }, []);

  function fetchMoreAnimes() {
    setPage(page + 1);
    getAnimes(page).then(
      (result) => setAnimeList((animes) => [...animes, ...result.animes]),
      setIsFetching(false)
    );
  }

  if (isLoading) return <Loading />;
  else
    return (
      <div
        className={`flex flex-col justify-center items-center container mx-auto`}
      >
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20">
          {animeList.map((element, index) => (
            <Card
              key={index}
              id={element.mal_id}
              title={element.title}
              img_uri={element.images.jpg.image_url}
              url={element.url}
            />
          ))}
        </div>

        {isFetching && page < lastPage}
      </div>
    );
};

export default Anime;

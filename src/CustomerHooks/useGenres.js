const useGenres = (genres) => {
  if (genres.length < 1) return "";

  const genreIds = genres.map((genre) => genre.id);
  return genreIds.reduce((acc, curr) => acc + "," + curr);
};

export default useGenres;

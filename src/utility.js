export const secondsToFormat = (seconds = 0, unitFormat = false) => {
  let hh = parseInt(seconds / 3600);
  seconds = seconds % 3600;
  let mm = parseInt(seconds / 60);
  seconds = parseInt(seconds % 60);
  return unitFormat ? `${hh}hr ${mm}${mm > 1 ? "mins" : "min"}` : `${hh.toString().padStart(2, "0")} : ${mm.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;
};

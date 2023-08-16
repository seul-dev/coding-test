function solution(files) {
  const regex = /(^\D+)(\d+)/;

  return files
    .map((file) => file.match(regex))
    .sort((a, b) => {
      if (a[1].toLowerCase() < b[1].toLowerCase()) {
        return -1;
      } else if (a[1].toLowerCase() > b[1].toLowerCase()) {
        return 1;
      }
      return Number(a[2]) - Number(b[2]);
    })
    .map((file) => file.input);
}

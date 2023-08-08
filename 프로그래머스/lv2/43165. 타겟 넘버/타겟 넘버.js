function solution(numbers, target) {
  function dfs(index, total) {
    if (index === numbers.length) {
      if (total === target) {
        return 1;
      }
      return 0;
    }

    return dfs(index + 1, total + numbers[index]) + dfs(index + 1, total - numbers[index]);
  }

  return dfs(0, 0)
}
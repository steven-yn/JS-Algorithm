function solution(genres, plays) {
  let answer = [];
  let musicRecord = {};

  genres.forEach((genre, idx) => {
    if (!musicRecord[genre]) {
      musicRecord[genre] = {
        totalPlayCount: plays[idx],
        musics: {},
      };
    } else {
      musicRecord[genre].totalPlayCount =
        musicRecord[genre].totalPlayCount + plays[idx];
    }

    musicRecord[genre].musics[idx] = {
      play: plays[idx],
      id: idx,
    };
  });

  const sortedRecordAtGenre = Object.values(musicRecord).sort((a, b) => {
    if (a.totalPlayCount > b.totalPlayCount) {
      return -1;
    }
    if (a.totalPlayCount < b.totalPlayCount) {
      return 1;
    }

    return 0;
  });

  sortedRecordAtGenre.forEach((genre, idx) => {
    const sortedMusics = Object.values(genre.musics).sort((a, b) => {
      if (a.play > b.play) {
        return -1;
      }
      if (a.play < b.play) {
        return 1;
      }

      return 0;
    });

    answer.push(sortedMusics[0].id);
    if (sortedMusics.length > 1) {
      answer.push(sortedMusics[1].id); // .key 대신 .id를 사용해야 합니다.
    }
  });

  return answer;
}

function solution(action) {
  const commandParser = {
    upvote: () => this.upvotes++,
    downvote: () => this.downvotes++,
    score: () => {
      const result = []
      const upVotes = this.upvotes;
      const downVotes = this.downvotes;
      const totalVotes = upVotes + downVotes;
      const totalScore = upVotes - downVotes;
      const reportedUpVotes = upVotes + Math.ceil(Math.max(upVotes, downVotes) * 0.25);
      const reportedDownVotes = downVotes + Math.ceil(Math.max(upVotes, downVotes) * 0.25);
      let rating = 'new';

      if ((upVotes / totalVotes) > 0.66 && totalVotes >= 10) {
        rating = 'hot';
      } else if (totalScore >= 0 && totalVotes > 100) {
        rating = 'controversial';
      } else if (totalScore < 0 && totalVotes >= 10) {
        rating = 'unpopular';
      }


      if (totalVotes > 50) {
        result.push(reportedUpVotes, reportedDownVotes, totalScore, rating)
      } else {
        result.push(upVotes, downVotes, totalScore, rating)
      }
    
      return result;

    }
  };

  return commandParser[action]();
}

let post = {
  id: '3',
  author: 'emil',
  content: 'wazaaaaa',
  upvotes: 100,
  downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
console.log(solution.call(post, 'score')); // [127, 127, 0, 'controversial']


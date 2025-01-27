export enum StatisticText {
  Excellent = 'Amazing job! You mastered the test like a pro! 🎉',
  VeryGood = 'Great work! You\'re doing very well. Keep it up! 💪',
  Good = 'Good effort! You have solid knowledge. Keep learning! 📚',
  Average = 'You\'re halfway there! A bit more effort and you\'ll shine. ✨',
  Poor = 'It\'s a start! Review the material and try again. 🌱',
}

export function getStatisticText(score: number): StatisticText {
  if (score === 10) {
    return StatisticText.Excellent;
  } 

  if (score >= 8) {
    return StatisticText.VeryGood;
  } 

  if (score >= 6) {
    return StatisticText.Good;
  }

  if (score >= 4) {
    return StatisticText.Average;
  }
   
  return StatisticText.Poor;
}

// 4.Write a function SortCandidatesByScoreAndExperience(candidates) that processes a deeply nested list of candidate profiles.
// The function should filter invalid entries, normalize data types, calculate derived values, and finally return a sorted list of simplified candidate summaries.
// Filter:
// Include only candidates where:
// profile.personal.active === true
// profile.professional.performance.score exists and is valid
// profile.professional.experience.totalYears >= 2

// Sorting Rules:
// performance.score descending
// experience.totalYears descending
// application.submission.date ascending
// profile.personal.name alphabetically ascending

// Compute submittedDaysAgo = number of days between now and submission.date.

// Return:
// An array of simplified summaries in this format:

// {
//   name: string,
//   age: number,
//   experience: number,
//   score: number,
//   submittedDaysAgo: number
// }

function SortCandidatesByScoreAndExperience(candidates: [{}]) {

}

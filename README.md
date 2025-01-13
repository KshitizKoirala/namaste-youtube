# The App has the following features and tools integrated

- Based On Live Youtube data
- Live Search Suggestions
- N-Level Recursive Comments Sections
- Uses Redux and caches the search results

## Debouncing

Difference in keyStroke

- typing slow = 200ms
- typing fast = 30ms

  ### Perfomance:

  > - iphone pro max = 14 letter \* 1000 (people) = 14000
  > - with debouncing = 3 API calls \* 1000 = 3000

  Debouncing is applied with 200ms

  - if difference between 2 key strokes is < 200ms - Decline the API call
  - if > 200ms -> Make the API call

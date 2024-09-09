# OMDB frontend test

This project is a movie and series search application that uses the [OMDB API](https://www.omdbapi.com/) to
retrieve and display movie and series data.

## Features

- Users can search for a title
- Filter by content type
- date rage is not supoted by the API
- view movie details
- toggle titles to a watchlist (This is by utilizing localstorage)
- have done some responsive styling
- have added some unit, end to end and acsasability tests and visual testing.
- added basic accessibility standards.

## Live Demo

[LIVE demo](https://omdb-frontend-virid.vercel.app/)
[LIVE demo with results](https://omdb-frontend-virid.vercel.app/?q=Batman&oid=tt0372784)

## Project Setup

### Prerequisites

- Node Js 20.9.0 LTS
- NPM with NPX for end-to-end test needs Cypress with Chrome preferred
- OMDB API Key is included in .env

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Ranushka/omdb_frontend.git
   cd omdb_frontend
   ```

2. Install dependencies (if applicable):

   ```bash
   npm install
   ```

3. Run the application:

   ```bash
   npm run build && npm run start
   ```

4. Just list the components:

   ```bash
   node buildDocs.js
   npm run dev
   ```

   This runs only on local [http://localhost:3000/docs](http://localhost:3000/docs) just
   included it because i had it wrtten the doc genarator before. it will pick all components
   and list them on a page for easy use

### Using the App

- Type a movie name in the search bar hit enter or click search
- Optionally select content type filter search.
- Click on a movie from the results to view detailed information.
- Toggle watchlist for each movie by clicking on the "Watchlist" button.

## Technologies Used

- Next.js
- SWR - will use with fetch
- Tailwind CSS - with Heroicons
- Cypress - unit and end to end test
- ESLint
- Prettier
- TypeScript - not fully strongly typed

## Future Improvements

- Need to write test cases that cover more senarios
- Only happy path test cases written
- Move components, app, context, utils, and types to the src folder for better organization
- Add bit more comments on the code
- Watchlist need to have bit more sustainale.
- need to move proper globel state manager
- There are a few more things that need to be done...

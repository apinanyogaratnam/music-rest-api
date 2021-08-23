# Music API

# Description
An API to save your music titles in a database and retrieve them on demand.

# Getting Started
1. Install dependencies: `npm install`
2. Create env file: `touch .env`
3. Add your MongoDB url to the env file: `echo <URL_GOES_HERE> >> .env` 
4. Run the server: `npm start`  

# Usage
Base URL: `/api/v1/posts`

### Get All Music
`GET/`

### Add a song
`POST/`

### Get a specific song
`GET/:id`

### Delete a song
`DELETE/:id`

### Update a song
`PUT/:id`

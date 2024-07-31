require('dotenv').config();
const express = require('express');

const app = express();

const port = 3000;

const gihtubApi = {
    "login": "anasraza07",
    "id": 81478107,
    "node_id": "MDQ6VXNlcjgxNDc4MTA3",
    "avatar_url": "https://avatars.githubusercontent.com/u/81478107?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/anasraza07",
    "html_url": "https://github.com/anasraza07",
    "followers_url": "https://api.github.com/users/anasraza07/followers",
    "following_url": "https://api.github.com/users/anasraza07/following{/other_user}",
    "gists_url": "https://api.github.com/users/anasraza07/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/anasraza07/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/anasraza07/subscriptions",
    "organizations_url": "https://api.github.com/users/anasraza07/orgs",
    "repos_url": "https://api.github.com/users/anasraza07/repos",
    "events_url": "https://api.github.com/users/anasraza07/events{/privacy}",
    "received_events_url": "https://api.github.com/users/anasraza07/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Muhammad Anas",
    "company": null,
    "blog": "https://anasraza07.github.io/My-portfolio/",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "MERN Stack Developer\r\n",
    "twitter_username": null,
    "public_repos": 36,
    "public_gists": 0,
    "followers": 0,
    "following": 1,
    "created_at": "2021-03-27T15:10:08Z",
    "updated_at": "2024-05-31T16:55:18Z"
}

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/twitter', (req, res) => {
    res.send('Hello twitter')
})

app.get('/youtube', (req, res) => {
    res.send('Hello Anas raza')
})

app.get('/login', (req, res) => {
    res.send('<h1>Hello user login<h2>')
})

app.get('/github', (req, res) => {
    res.json(gihtubApi)
})

app.listen(process.env.port, () => {
    console.log(`Example app listening on port ${process.env.port}`);
})

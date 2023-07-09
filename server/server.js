const express = require('express');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(cors({ origin: process.env.SPOTIFY_URI }));
app.use(bodyParser.json());

const spotifyConfig = {
  redirectUri: `${process.env.SPOTIFY_URI}/verify`,
  clientId: process.env.SPOTIFY_CLIENT,
  clientSecret: process.env.SPOTIFY_SECRET,
};

app.post('/verify', (req, res) => {
  const code = req.body.code;

  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: {
      grant_type: 'authorization_code',
      code,
      redirect_uri: spotifyConfig.redirectUri,
      client_id: spotifyConfig.clientId,
      client_secret: spotifyConfig.clientSecret,
    },
  };

  axios(authOptions)
    .then((response) => {
      res.json({
        accessToken: response.data.access_token,
        refreshToken: response.data.refresh_token,
        expiresIn: response.data.expires_in,
      });
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(400);
    });
});

app.post('/refresh', (req, res) => {
  const refreshToken = req.body.refreshToken;

  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: {
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      client_id: spotifyConfig.clientId,
      client_secret: spotifyConfig.clientSecret,
    },
  };

  axios(authOptions)
    .then((response) => {
      res.json({
        accessToken: response.data.access_token,
        expiresIn: response.data.expires_in,
      });
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(400);
    });
});

app.listen(3001);
# Simple Media

Simplified upload video content and stream on browser.

To initiate the project, run `./bin/init.sh`.

To run the project, run `./bin/start.sh`.

## Project Details

Backend API in `/api` project directory. Use default port `3080`.

Frontend Web in `/app` project directory. Use default port `3000`.

---

## List of Available APIs

### GET /api/v1/media

get list of uploaded media

### GET /api/v1/media/:uid

get specific uploaded media with uid

### POST /api/v1/media

upload media file

```bash
curl POST '{endpoint}/api/v1/media' --form 'media={file}'
```

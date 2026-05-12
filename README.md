# Assignment-5-DevOps

## Services

- Frontend (React): http://localhost:3000
- Backend (Node/Express): http://localhost:5000
	- Health check: http://localhost:5000/health
- MongoDB: internal container used by the backend (data stored in a Docker volume)

## Run with Docker Compose

From the repository root:

```bash
docker compose up --build
```

Then open http://localhost:3000.

To stop:

```bash
docker compose down
```

To wipe the database volume as well:

```bash
docker compose down -v
```

## Environment

- Backend: `MONGO_URI`, `PORT`
- Frontend: `REACT_APP_API_URL` (defaults to `http://localhost:5000`)
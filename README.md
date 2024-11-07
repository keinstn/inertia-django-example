# Inertia Django example

## Installation

```bash
uv sync
```

```bash
cd web && npm install
```

## Development

```bash
source .venv/bin/activate
```

```bash
cp .env.example .env
```

```bash
python tools/generate_secret_key.py
```

```bash
docker compose up
```

```bash
python manage.py migrate
```

```bash
python manage.py createsuperuser
```

```bash
python manage.py runserver
```

```bash
cd web && npm run dev
```

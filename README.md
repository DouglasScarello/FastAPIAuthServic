# FastAPI Auth Service

A robust authentication service infrastructure built with FastAPI, SQLAlchemy, and SQLite. This project demonstrates a production-grade backend architecture, focusing on security, scalability, and modern software engineering practices.

---

## 🏛️ Architectural Pillars

### 1. ⚡ Core API Engine: FastAPI
- **High Performance**: Asynchronous request handling with `async/await`.
- **Type Safety**: Data validation and serialization via Pydantic V2.
- **Interactive Documentation**: Automated Swagger UI (`/docs`) and ReDoc.

### 2. 🔑 Identity & Access Management: JWT
- **Secure Hashing**: Password protection using `bcrypt` (v4.0.1).
- **Token-Based Auth**: OAuth2 implementation with JSON Web Tokens (JWT).
- **Protected Routes**: Middleware-level dependency injection for secure endpoint access.

### 3. 🗄️ Relational Persistence & Migrations
- **ORM**: Modular database interaction via SQLAlchemy.
- **Migrations**: Database schema versioning managed by **Alembic**.
- **Data Integrity**: Centralized model definitions and type-safe schemas.

### 4. ⚙️ Configuration & Quality
- **Env Management**: 12-Factor App compliance using `pydantic-settings` and `.env`.
- **Automated Testing**: Comprehensive test suite using **Pytest** and **Httpx**.
- **Containerization**: Optimized `Dockerfile` for environment parity and deployment.

---

## 📊 Technical Showcase Dashboard

The project features an integrated administration dashboard:
- **API Traffic Logs**: Real-time monitoring of backend interactions.
- **Authentication Viewer**: Dynamic visualization of JWT status.
- **Database Explorer**: Live view of persisted records.
- **Infrastructure Overview**: Container-ready status and configuration access.

---

## 🚀 Getting Started

### Prerequisites
- Python 3.11+
- Docker (optional)

### Local Environment Setup
1. **Clone the repository**:
   ```bash
   git clone https://github.com/DouglasScarello/FastAPIAuthServic.git
   cd FastAPIAuthServic
   ```

2. **Configure Virtual Environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # Linux/macOS
   ```

3. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Setup Database (Migrations)**:
   ```bash
   alembic upgrade head
   ```

5. **Launch the Service**:
   ```bash
   uvicorn main:app --reload
   ```

### Running Tests
```bash
pytest
```

### Deployment via Docker
```bash
docker build -t fastapi-auth-service .
docker run -p 8000:8000 fastapi-auth-service
```

---

## 📂 Project Structure

```text
├── alembic/         # Database migration history
├── tests/           # Automated test suite (Pytest)
├── auth.py          # JWT & Security logic
├── config.py        # Centralized settings (Pydantic Settings)
├── database.py      # SQLAlchemy engine configuration
├── models.py        # SQLAlchemy database models
├── schemas.py       # Pydantic validation schemas
├── main.py          # API Gateway and routes
├── .env             # Environment variables (template)
└── index.html       # Client interface
```

**Designed for high-performance authentication and scalable backend engineering.** 🚀

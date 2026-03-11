# FastAPI Auth Service

A robust authentication service infrastructure built with FastAPI, SQLAlchemy, and SQLite. This project demonstrates a production-ready backend architecture, focusing on security, scalability, and modern deployment practices.

---

## 🏛️ Architectural Pillars

### 1. ⚡ Core API Engine: FastAPI
- **High Performance**: Built on top of Starlette and Pydantic for asynchronous request handling.
- **Type Safety**: Leveraging Python type hints for automatic validation and documentation.
- **Interactive API Docs**: Integrated Swagger UI and ReDoc for comprehensive endpoint testing.

### 2. 🔑 Identity & Access Management: JWT
- **Secure Hashing**: Password protection using the `bcrypt` algorithm.
- **Token-Based Auth**: Standard implementation of OAuth2 with JSON Web Tokens (JWT).
- **Stateless Authentication**: Efficient access management without server-side session overhead.

### 3. 🗄️ Relational Persistence: SQLAlchemy & SQLite
- **Permanent Storage**: Reliable data management using SQLite as a relational database.
- **Object-Relational Mapping (ORM)**: Clean, modular database interaction via SQLAlchemy.
- **Scalable Design**: Data models designed for easy migration to PostgreSQL or MySQL.

### 4. 📦 Deployment & Scalability: Docker
- **Containerization**: Standard `Dockerfile` for environment parity and simplified scaling.
- **Production Ready**: Optimized configuration for cloud-native deployments and CI/CD pipelines.

---

## 📊 Technical Showcase Dashboard

The project includes a comprehensive administration dashboard to demonstrate the integration of all services:
- **API Traffic Logs**: Real-time monitoring of service interactions and system events.
- **Authentication Viewer**: Dynamic visualization of JWT generation and validation status.
- **Database Explorer**: Live view of persisted records within the SQLite architecture.
- **Infrastructure Overview**: Direct access to deployment configurations and container status.

---

## 🚀 Getting Started

### Prerequisites
- Python 3.11+
- Container runtime (optional, e.g., Docker)

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
   # venv\Scripts\activate   # Windows
   ```

3. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Launch the Service**:
   ```bash
   uvicorn main:app --reload
   ```

5. **Access the Service**:
   - Application URL: [http://127.0.0.1:8000](http://127.0.0.1:8000)
   - API Documentation: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

### Deployment via Docker
```bash
docker build -t fastapi-auth-service .
docker run -p 8000:8000 fastapi-auth-service
```

---

## 📂 Project Structure

```text
├── auth.py          # Identity Management & JWT Logic
├── database.py      # SQLAlchemy Configuration & Engine
├── models.py        # Database Schema Definitions
├── schemas.py       # Pydantic Data Validation Models
├── main.py          # API Gateway & Route Definitions
├── index.html       # Client Interface
├── style.css        # Professional UI Theming
└── script.js        # Frontend Orchestration
```

**Developed by Douglas with a focus on high-quality backend engineering and security.**

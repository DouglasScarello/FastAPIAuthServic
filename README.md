# FastAPI Auth Service 🏰✨

O **FastAPI Auth Service** é uma infraestrutura completa de backend e frontend (Showcase) projetada como uma "Torre Arcana". Este projeto demonstra a implementação profissional de uma API segura utilizando os 4 pilares modernos da engenharia de software com Python.

![Background da Torre](./arcana_tower_background.png)

## 🏛️ Os 4 Pilares do Projeto

### 1. ⚡ FastAPI (O Motor)
- **Alta Performance**: Processamento assíncrono nativo (`async/await`).
- **Pydantic**: Validação rigorosa de dados e geração automática de schemas.
- **Auto-Docs**: Documentação interativa via Swagger UI em `/docs`.

### 2. 🔑 Autenticação JWT (O Selo)
- **Segurança**: Hashing de senhas com `bcrypt` (v4.0.1).
- **Tokens**: Implementação completa de `OAuth2` com JSON Web Tokens (JWT).
- **Persistência de Sessão**: Gestão de estado no frontend via `localStorage`.

### 3. 🗄️ SQLAlchemy & SQLite (O Cofre)
- **Persistência Real**: Banco de dados relacional SQLite (`database.db`).
- **ORM Profissional**: Modelagem de dados modular e escalável.
- **Relacionamentos**: Estrutura pronta para expansão de entidades.

### 4. 📦 Docker (A Portabilidade)
- **Containerização**: Ambiente isolado e reprodutível via `Dockerfile`.
- **Estratégia de Deploy**: Configuração otimizada para servidores de produção.

---

## 🎨 Portal de Cristal (Frontend)

O frontend foi desenvolvido com uma estética de **Glassmorphism**, combinando arte e engenharia.
- **Dashboard Técnico**: Visualização em tempo real de logs da API, tokens JWT e registros do banco.
- **Responsividade**: Design fluido que se adapta a qualquer tela.
- **Interatividade**: Transições suaves e feedback dinâmico para o usuário.

---

## 🚀 Como Executar

### Pré-requisitos
- Python 3.11+
- Pip (ou ambiente virtual `venv`)

### Instalação Local
1. Clone o repositório.
2. Crie e ative seu ambiente virtual:
   ```bash
   python -m venv venv
   source venv/bin/activate  # Linux/macOS
   ```
3. Instale as dependências mágicas:
   ```bash
   pip install -r requirements.txt
   ```
4. Inicie a torre:
   ```bash
   uvicorn main:app --reload
   ```
5. Acesse no navegador:
   👉 **[http://127.0.0.1:8000](http://127.0.0.1:8000)**

### Execução via Docker
```bash
docker build -t fastapi-auth-service .
docker run -p 8000:8000 fastapi-auth-service
```

---

## 🧱 Estrutura do Projeto

```text
├── auth.py          # Rituais de segurança (JWT/Bcrypt)
├── database.py      # Conexão com o Alquimista (SQLAlchemy)
├── models.py        # Definição das Entidades (Tabelas)
├── schemas.py       # Pergaminhos de Validação (Pydantic)
├── main.py          # Portal Central (FastAPI)
├── index.html       # Fachada da Torre (HTML)
├── style.css        # Estética Arcana (CSS)
└── script.js        # Lógica do Portal (JS)
```

**Construído por Douglas em uma jornada de aprendizado e magia.** 🧙‍♂️🚀

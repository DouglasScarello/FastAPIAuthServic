import pytest
from httpx import ASGITransport, AsyncClient
from main import app

@pytest.mark.asyncio
async def test_read_main():
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as ac:
        response = await ac.get("/")
    assert response.status_code == 200

@pytest.mark.asyncio
async def test_register_user():
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as ac:
        response = await ac.post(
            "/register", 
            json={"username": "testuser_pytest", "password": "testpassword"}
        )
    # 201 Created or 400 if already exists (depends on db state)
    assert response.status_code in [201, 400]

@pytest.mark.asyncio
async def test_login_user():
    # Primeiro garantimos que o usuário existe (pode falhar se já existir, mas ignoramos)
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as ac:
        await ac.post(
            "/register", 
            json={"username": "login_test", "password": "password123"}
        )
        
        # Agora tentamos o login
        response = await ac.post(
            "/login",
            data={"username": "login_test", "password": "password123"}
        )
    assert response.status_code == 200
    assert "access_token" in response.json()

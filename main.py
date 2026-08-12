"""
Root Execution Entrypoint for 👁️ Blind People's Accessibility Vision AI Companion
Runs FastAPI Uvicorn Server
"""
import uvicorn

if __name__ == "__main__":
    uvicorn.run("backend.app.main:app", host="0.0.0.0", port=8002, reload=True)

"""
Vision AI API Endpoints for Scene Analysis, Currency Detection, and OCR
"""
from fastapi import APIRouter, UploadFile, File
from app.services.vision_engine import vision_engine

router = APIRouter()


@router.post("/describe")
async def describe_scene_endpoint(image: UploadFile = File(None)):
    contents = await image.read() if image else b"sample_bytes"
    return vision_engine.describe_scene(contents)


@router.post("/currency")
async def detect_currency_endpoint(image: UploadFile = File(None)):
    contents = await image.read() if image else b"sample_bytes"
    return vision_engine.detect_currency(contents)


@router.post("/ocr")
async def extract_text_endpoint(image: UploadFile = File(None)):
    contents = await image.read() if image else b"sample_bytes"
    return vision_engine.extract_text_ocr(contents)

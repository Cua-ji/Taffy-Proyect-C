from kokoro_onnx import Kokoro
import sounddevice as sd

kokoro = Kokoro("kokoro-v1.0.int8.onnx", "voices-v1.0.bin")

samples, sample_rate = kokoro.create(
    "Hola, soy Taffy, bienvenido a Cafetería El Sol",
    voice="am_michael",  # voz masculina
    speed=1.0,
    lang="es"
)

sd.play(samples, sample_rate)
sd.wait()

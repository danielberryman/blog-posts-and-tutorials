# VR Local Development

1. Run your local webserver using `localhost` as the host
2. Plug your VR headset into your computer
3. Check that abd is reading your device: `adb devices`
4. Run reverse proxy specifying the port: `adb reverse tcp:port tcp:port`
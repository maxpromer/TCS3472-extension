({
    name: "TCS3472", // Category Name
    description: "Color Sensor for PuppyBot",
    author: "PrinceBot",
    category: "Sensors",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#3498DB", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        "tcs3472_read_rgb",
        "tcs3472_read_light"
    ],
    chip: [
        "esp32"
    ]
});

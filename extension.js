({
    name: "TCS34725", // Category Name
    description: "Color Sensor for PuppyBot",
    author: "PrinceBot",
    category: "Sensors",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#3498DB", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        "tcs34725_read_rgb",
        "tcs34725_read_light"
    ],
    chip: [
        "RP2"
    ]
});

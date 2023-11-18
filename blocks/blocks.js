Blockly.defineBlocksWithJsonArray([
  {
    "type": "tcs34725_update",
    "message0": "TCS34725 update",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#3498DB",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "tcs34725_read_rgb",
    "message0": "TCS34725 read %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "color",
        "options": [
          [
            "Red",
            "0"
          ],
          [
            "Green",
            "1"
          ],
          [
            "Blue",
            "2"
          ]
        ]
      }
    ],
    "output": "Number",
    "colour": "#3498DB",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "tcs34725_read_light",
    "message0": "TCS34725 read light",
    "output": "Number",
    "colour": "#3498DB",
    "tooltip": "",
    "helpUrl": ""
  }
]);

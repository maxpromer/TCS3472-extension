Blockly.defineBlocksWithJsonArray([
{
  "type": "tcs3472_read_rgb",
  "message0": "TCS3472 read %1",
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
  "type": "tcs3472_read_light",
  "message0": "TCS3472 read light",
  "output": "Number",
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
}
]);

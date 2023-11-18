Blockly.Python['tcs34725_update'] = function (block) {
  Blockly.Python.definitions_['import_TCS34725'] = 'import TCS34725';

  var code = `TCS34725.update()\n`;
  return code;
};

Blockly.Python['tcs34725_read_rgb'] = function (block) {
  Blockly.Python.definitions_['import_TCS34725'] = 'import TCS34725';

  var dropdown_color = block.getFieldValue('color');

  var code = `TCS34725.rgb()[${dropdown_color}]`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['tcs34725_read_light'] = function (block) {
  Blockly.Python.definitions_['import_TCS34725'] = 'import TCS34725';

  var code = `TCS34725.light()`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['tcs3472_read_rgb'] = function (block) {
  Blockly.Python.definitions_['import_TCS3472'] = 'import TCS3472';

  var dropdown_color = block.getFieldValue('color');

  var code = `TCS3472.rgb()[${dropdown_color}]`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['tcs3472_read_light'] = function (block) {
  Blockly.Python.definitions_['import_TCS3472'] = 'import TCS3472';

  var code = `TCS3472.light()`;
  return [code, Blockly.Python.ORDER_NONE];
};

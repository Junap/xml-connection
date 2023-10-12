const xmlbuilder = require('xmlbuilder');

function buildXML(data) {
  const root = xmlbuilder.create('root');

  // Recorre los datos y agrega elementos XML según tu estructura
  data.forEach((item) => {
    const node = root.ele('item');
    node.ele('id', item.id);
    node.ele('name', item.name);
    node.ele('year', item.year);
    node.ele('genre', item.genre);
    // Agrega más campos según tus necesidades
  });

  return root.end({ pretty: true });
}

module.exports = buildXML;
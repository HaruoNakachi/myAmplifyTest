const builder = {
  build: function(){
    console.log('TEST')
    const docDefinition = {
      content: [
        '日本語のテスト',
        'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
      ],
      defaultStyle: {
        font: 'GenShin',
      },
    };
    return docDefinition
  }
}

export default builder;
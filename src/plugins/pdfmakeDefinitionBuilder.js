const builder = {
  build: function(){
    console.log('TEST')
    const docDefinition = {
      content: [
        'First paragraph',
        'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
      ]
    };
    return docDefinition
  }
}

export default builder;
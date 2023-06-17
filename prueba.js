const schema = {
    name: value => /^([A-Z][a-z\-]* )+[A-Z][a-z\-]*( \w+\.?)?$/.test(value),
    age: value => parseInt(value) === Number(value) && value >= 18,
    phone: value => /^(\+?\d{1,2}-)?\d{3}-\d{3}-\d{4}$/.test(value)
  };
  
  let info = {
    name: 'John Doe',
    age: '25'
  };
  
  const validate = (object, schema) => Object
    .keys(schema)
    .filter(key => !schema[key](object[key]))
    .map(key => new Error(`${key} is invalid.`));

  console.log(info["hola"] >= 18);

  const errors = validate(info, schema);
  
  if (errors.length > 0) {
    for (const { message } of errors) {
      console.log(message);
    }
  } else {
    console.log('info is valid');
  }
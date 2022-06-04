const proto = {
    hello () {
      return `Hello, my name is ${ this.name }`;
    }
  };
  
  const greeter = (name) => Object.assign(Object.create(proto), {
    name
  });
  
  const george = greeter('george');
  
  const msg = george.hello();
  
  console.log(george);
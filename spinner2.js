const spinner = () => {
  const chars = ["|", "/", "-", "\\", "|"];
  let timeout = 100;

  for (let char of chars) {
    setTimeout(() => {
      process.stdout.write(`\r${char}     `);
    }, timeout);
    timeout += 200;
  }
};

spinner();

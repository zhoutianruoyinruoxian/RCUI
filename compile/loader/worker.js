process.on('message', task => {
  const result = task;

  process.send(result);
});

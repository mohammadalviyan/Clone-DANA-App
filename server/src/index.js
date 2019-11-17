import app from './app';

async function main() {
  await app.listen(3000);
  console.log("server running on port 3000");
};

main();
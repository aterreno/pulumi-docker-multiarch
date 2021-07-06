const { spawn } = require("child_process");

const command = {
    cmd: 'docker',
    args: [
      'buildx',
      'build',
      '--platform',
      'linux/amd64,linux/arm64,linux/arm/v7',
      '.',
    ]
  }

const p = spawn(command.cmd, command.args, process.env);

p.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});

p.stderr.on("data", (data) => {
  console.error(`stderr: ${data}`);
});

p.on("close", (code) => {
  console.log(`child process exited with code ${code}`);
});

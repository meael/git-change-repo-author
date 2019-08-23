const { exec } = require("child_process");

const execPromise = (commandString, path = "./") =>
  new Promise((resolve, reject) => {
    exec(commandString, { cwd: path }, (err, stdout, stderr) => {
      if (err) {
        console.log(err);
        reject(err);
      }

      resolve(stdout.replace(/\s/g, ""));
    });
  });

const getParameter = (list, name) => {
  const find = list.find(el => el.includes(`--${name}`));
  return find ? (find.includes("=") ? find.split("=")[1] : true) : null;
};

module.exports = {
  execPromise,
  getParameter
};

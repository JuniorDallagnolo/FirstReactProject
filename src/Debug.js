//Global Debug flag to disable CONSOLE OBJECT - TRUE or FALSE
const DEBUG = true;
//Custom debugger code from Ernilo Dallagnolo Junior
if (!DEBUG) {
  if (!window.console) window.console = {};
  let methods = ["log", "debug", "warn", "info"];
  for (let i = 0; i < methods.length; i++) {
    console[methods[i]] = function() {};
  }
}

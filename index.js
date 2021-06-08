const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function askQuestion(){
  rl.question(">", function(input){
    inpget=input;
    if (inpget.startsWith("help")) {
      if (inpget.endsWith("about")) {
        console.log("Shows the developer list.")
      } else if (inpget.endsWith("exit")) {
        console.log("Exits the terminal.")
      } else if (inpget.endsWith("echo")) {
        console.log("Echoes back the text you entered in.")
      } else if (inpget.endsWith("cd")) {
        console.log("Shows the current directory the terminal is running in.")
			} else if (inpget.endsWith("cls")){
				console.log("Clears the console.")
      } else {
      console.log("help  - Shows this.");
      console.log("about - About this terminal.");
      console.log("exit  - Exits the terminal.");
      console.log("echo  - Echoes back the text you entered in.");
      console.log("cd    - shows the current directory");
			console.log("cls   - clears the console.")
      console.log("For detailed information, use help [command]")
      }
    } else if (inpget.startsWith("about")) {
      console.log(".---- Developers ----.");
      console.log("|      Pen#4089      |");
      console.log("|    Ponali#3906     |");
      console.log("|    Zynx92#6585     |");
			console.log("'--------------------'")
    } else if (inpget.startsWith("exit")) {
      process.exit();
		} else if (inpget.startsWith("echo")){
        if (inpget=="echo"){
        console.log("Usage: echo [text]")
        } else {
				console.log(inpget.replace(new RegExp("echo "),""))
			}
    } else if (inpget.startsWith("cd")) {
      console.log(process.cwd())
		} else if(inpget.startsWith("cls")){
			console.clear()
			console.log("Console has been cleared.")
    } else {
      console.log("Unknown command. Use 'help' for a list of commands.");
    }
		askQuestion()
  });
};
console.log("terminodejs v1.1.0 beta")
askQuestion();
// hello, if you're reading this, thanks for checking our code out!
// also, if you're seeing this, this is in beta, it can have unstabilities and bugs.

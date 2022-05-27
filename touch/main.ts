import { Command } from "https://deno.land/x/cliffy@v0.24.2/command/mod.ts";

const { args, options, cmd, literal } = await new Command()
  .name("touch")
  .version("0.1.0")
  .arguments("<file>")
  .option("-p --path <path:string>", "path option")
  .description("touch command")
  .parse(Deno.args);

const file = args[0];
Deno.createSync(`${file}`);

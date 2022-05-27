import { Command } from "https://deno.land/x/cliffy@v0.24.2/command/mod.ts";

await new Command()
  .name("touch")
  .version("0.1.0")
  .usage("file")
  .description("touch command")
  .parse(Deno.args);

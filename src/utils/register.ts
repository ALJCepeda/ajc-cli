import { Command } from "commander";
import * as path from "path";

export type RegisterCallback = (program: Command) => Command;
export interface CommandInitiator {
  nameAndArgs: string,
  cb: RegisterCallback
}

const initators: CommandInitiator[] = [];

export function register(nameAndArgs: string, cb: RegisterCallback) {
  initators.push({ nameAndArgs, cb });
}

export function buildProgram(rootDir: string, order: string[]): Command {
  let program = new Command();

  order.forEach((commandName) => {
    require(path.resolve(`${rootDir}/${commandName}`));
  });

  order.map((commandName) =>
    initators.find((command) => command.nameAndArgs.includes(commandName))!
  ).forEach((initiator: CommandInitiator) => {
    initiator.cb(program.command(initiator.nameAndArgs))
  })

  return program;
}
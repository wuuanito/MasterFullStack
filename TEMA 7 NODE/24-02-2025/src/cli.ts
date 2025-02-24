import { greet } from "./greet";



const args:string[] = process.argv.slice(2)

greet(args.join(", "))
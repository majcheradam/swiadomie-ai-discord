import { DiscordHono, type CommandContext } from 'discord-hono'

const app = new DiscordHono()
  .command('hello', (c: CommandContext) => c.res('world!'))
  .command('hello_name', (c: CommandContext) => {
    const userName = c.var.user.username || 'stranger';
    return c.res(`Hello, ${userName}!`);
  });

export default app
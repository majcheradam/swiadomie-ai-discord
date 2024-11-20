import { DiscordHono } from 'discord-hono'

const app = new DiscordHono()
  .command('hello', c => c.res('world!'))
  .command('hello2', c => c.res('world2!'))

export default app
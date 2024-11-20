import { Command, register } from 'discord-hono'

const commands = [
  new Command('hello', 'response world'),
  new Command('name', 'response name'),
]

register(
  commands,
  process.env.DISCORD_APPLICATION_ID,
  process.env.DISCORD_TOKEN,
  //process.env.DISCORD_TEST_GUILD_ID,
)
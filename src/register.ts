import { Command, Option, register } from 'discord-hono'

const commands = [
  new Command('page', 'pagination').options(
    new Option('content', 'page content').required(),
  ),
]

register(
  commands,
  process.env.DISCORD_APPLICATION_ID,
  process.env.DISCORD_TOKEN,
  //process.env.DISCORD_TEST_GUILD_ID,
)
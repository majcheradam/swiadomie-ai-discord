import { Button, Components, DiscordHono, Embed } from 'discord-hono'

type Env = {
  Variables: {
    content?: string
  }
}

const pageContent = (content: string, page: number) => {
  const maxPage = 3
  const embed = new Embed()
    .title('Title')
    .description(`${content}\nPage: ${page}`)
  const components = new Components().row(
    new Button('page', 'Previous')
      .custom_id(JSON.stringify([content, page - 1]))
      .emoji({ name: '⬅️' })
      .disabled(page <= 1),
    new Button('page', 'Next')
      .custom_id(JSON.stringify([content, page + 1]))
      .emoji({ name: '➡️' })
      .disabled(maxPage <= page),
  )
  return { embeds: [embed], components }
}

const app = new DiscordHono<Env>()
  .command('page', c => {
    return c.res(pageContent(c.var.content || '', 1))
  })
  .component('page', c => {
    const [content, page]: [string, number] = JSON.parse(c.var.custom_id || '')
    return c.resUpdate(pageContent(content, page))
  })

export default app
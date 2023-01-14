if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.warn(`\u001b[33mError： pnpm monorepo 项目 - 必须使用 pnpm 管理依赖 🫵\u001b[39m\n`)
  process.exit(1)
}

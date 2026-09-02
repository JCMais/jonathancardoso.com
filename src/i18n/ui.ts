export const LOCALES = ['en', 'pt-br'] as const
export type Locale = (typeof LOCALES)[number]
export const DEFAULT_LOCALE: Locale = 'en'

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  'pt-br': 'Português do Brasil',
}

export const LOCALE_SHORT: Record<Locale, string> = {
  en: 'EN',
  'pt-br': 'PT-BR',
}

export const HREFLANG: Record<Locale, string> = {
  en: 'en',
  'pt-br': 'pt-BR',
}

const en = {
  'site.title': 'Jonathan Cardoso Machado',
  'site.description':
    'Staff software engineer at Lindy, building AI agents and the framework they run on, plus the product and platform around them. Maintainer of node-libcurl. Writing about agents, GraphQL, CI/CD, and infrastructure.',
  'nav.writing': 'Writing',
  'nav.categories': 'Categories',
  'nav.tags': 'Tags',
  'nav.home': 'Home',
  'nav.search': 'Search',
  'nav.searchHint': 'Search posts, jump to pages',
  'nav.theme': 'Toggle theme',
  'nav.language': 'Language',
  'nav.switchLang': 'Switch to Português',
  'nav.skip': 'Skip to content',
  'home.status': 'Software engineer, since 2011',
  'home.hello': 'Hey, I am Jonathan.',
  'home.intro':
    'Staff software engineer at Lindy, an AI agent platform. I wrote its first line of code in 2023 and have been building agents, and the framework they run on, ever since: the layer that talks to every LLM vendor, tool calling, memory and context, sandboxes where an agent gets a shell and a filesystem, and the coding agents we now point at our own backlog.',
  'home.introTeam':
    'A good part of my week goes into making the team faster than me: reviewing pull requests, running lunch and learns, automating whatever gets done twice, and turning what worked into guides and agent skills so the next person starts from the answer. I do most of it in the open on Slack, so when I unblock one person the context becomes team context: the next person can find it, and so can our Lindy teammate.',
  'home.introRecent':
    'Lately most of that effort has gone into AI coding for the whole company, so that everyone, not just engineers, can make real changes to the product themselves, and into a Reviewer Agent for what became the next bottleneck once everyone could ship: reviews and the validation loop.',
  'home.intro2':
    'The rest of the job is everything around that: the product people actually click on and the platform it ships through, so a normal week goes from a Relay component to a Temporal workflow to a Kubernetes node pool, and I kinda like it that way. Before Lindy: real-time collaboration at Teamflow, backend and DevOps at HelloMD, the Gol Linhas Aéreas app at Entria, and five years of freelancing.',
  'home.intro3':
    'Self-taught in Software Engineering, but with a degree in Accounting. Based in Foz do Iguaçu, Brazil. I also love open-source and try to contribute anytime I can. I maintain node‑libcurl since 2016.',
  'home.previously': 'Previously',
  'home.sayHello': 'Say hello',
  'home.readWriting': 'Read the writing',
  'home.latest': 'Writing',
  'home.latestSub': 'Planning to get back to writing again, some time, soon. For now these are some posts I wrote back when LLMs were not really a thing, heh.',
  'home.elsewhere': 'Elsewhere',
  'home.allPosts': 'All posts',
  'blog.title': 'Writing',
  'blog.description': 'Long-form, step-by-step engineering articles.',
  'blog.empty': 'Nothing here yet.',
  'blog.newer': 'Newer',
  'blog.older': 'Older',
  'blog.page': 'Page {n} of {total}',
  'blog.readingTime': '{n} min read',
  'blog.draft': 'Draft',
  'blog.draftNotice': 'This is an unpublished draft. Things may change or be plain wrong.',
  'blog.notTranslated': 'This post is only available in English for now.',
  'blog.readInEnglish': 'Read in English',
  'blog.published': 'Published',
  'blog.updated': 'Updated',
  'blog.reviewers': 'Reviewed by',
  'blog.editOnGitHub': 'Edit on GitHub',
  'blog.discussDevto': 'Discuss on Dev.to',
  'blog.originallyMedium': 'Originally on Medium',
  'blog.toc': 'On this page',
  'blog.tags': 'Tags',
  'blog.category': 'Category',
  'blog.inCategory': 'Posts in {name}',
  'blog.withTag': 'Posts tagged {name}',
  'blog.postCount': '{n} posts',
  'blog.postCountOne': '1 post',
  'categories.title': 'Categories',
  'tags.title': 'Tags',
  'newsletter.title': 'Get new posts by email',
  'newsletter.body': 'No noise. A note when something new is published, a few times a year at most.',
  'newsletter.placeholder': 'you@example.com',
  'newsletter.name': 'Name',
  'newsletter.email': 'Email',
  'newsletter.submit': 'Subscribe',
  'newsletter.privacy': 'Handled by Mailchimp. Unsubscribe any time.',
  'footer.madeWith': 'Built with Astro. Source on GitHub.',
  'footer.rights': 'Jonathan Cardoso Machado',
  'footer.privacy': 'Privacy',
  'footer.rss': 'RSS',
  'privacy.title': 'Privacy',
  'notFound.title': 'Page not found',
  'notFound.body': 'Nothing lives at this address. It may have moved, or the link was never right.',
  'notFound.home': 'Back home',
  'cmdk.placeholder': 'Type to search posts or jump somewhere',
  'cmdk.posts': 'Posts',
  'cmdk.pages': 'Pages',
  'cmdk.actions': 'Actions',
  'cmdk.noResults': 'No matches',
  'cmdk.toggleTheme': 'Toggle theme',
  'cmdk.switchLang': 'Switch to Português',
  'cmdk.close': 'Close',
  'cmdk.navigate': 'to navigate',
  'cmdk.select': 'to open',
} as const

export type UIKey = keyof typeof en

const ptBr: Record<UIKey, string> = {
  'site.title': 'Jonathan Cardoso Machado',
  'site.description':
    'Staff software engineer na Lindy, construindo agentes de IA e o framework em que eles rodam, mais o produto e a plataforma em volta. Mantenedor do node-libcurl. Escrevo sobre agentes, GraphQL, CI/CD e infraestrutura.',
  'nav.writing': 'Textos',
  'nav.categories': 'Categorias',
  'nav.tags': 'Tags',
  'nav.home': 'Início',
  'nav.search': 'Buscar',
  'nav.searchHint': 'Buscar posts, ir para páginas',
  'nav.theme': 'Alternar tema',
  'nav.language': 'Idioma',
  'nav.switchLang': 'Switch to English',
  'nav.skip': 'Pular para o conteúdo',
  'home.status': 'Engenheiro de software, desde 2011',
  'home.hello': 'Oi, eu sou o Jonathan.',
  'home.intro':
    'Staff software engineer na Lindy, uma plataforma de agentes de IA. Escrevi a primeira linha de código dela em 2023 e desde então construo agentes, e o framework em que eles rodam: a camada que conversa com cada fornecedor de LLM, tool calling, memória e contexto, sandboxes onde um agente ganha um shell e um sistema de arquivos, e os agentes de código que hoje apontamos para o nosso próprio backlog.',
  'home.introTeam':
    'Boa parte da minha semana vai para deixar o time mais rápido do que eu: revisar pull requests, fazer lunch and learns, automatizar o que é feito duas vezes e transformar o que funcionou em guias e agent skills, para a próxima pessoa começar já com a resposta. Faço quase tudo isso às claras no Slack, então quando desbloqueio uma pessoa o contexto vira contexto do time: a próxima pessoa encontra, e o nosso Lindy teammate também.',
  'home.introRecent':
    'Ultimamente a maior parte desse esforço foi para AI coding para a empresa inteira, para que todo mundo, não só engenheiros, consiga fazer mudanças reais no produto por conta própria, e para um Reviewer Agent para o que virou o próximo gargalo quando todo mundo passou a conseguir entregar: as revisões e o ciclo de validação.',
  'home.intro2':
    'O resto do trabalho é tudo que fica em volta disso: o produto em que as pessoas de fato clicam e a plataforma pela qual ele vai para produção, então uma semana normal vai de um componente Relay a um workflow Temporal a um node pool no Kubernetes, e eu meio que gosto disso. Antes da Lindy: colaboração em tempo real na Teamflow, backend e DevOps na HelloMD, o app da Gol Linhas Aéreas na Entria e cinco anos de freelance.',
  'home.intro3':
    'Autodidata em Engenharia de Software, mas formado em Ciências Contábeis. Moro em Foz do Iguaçu, Brasil. Também amo open-source e tento contribuir sempre que dá. Mantenho o node‑libcurl desde 2016.',
  'home.previously': 'Antes',
  'home.sayHello': 'Diga oi',
  'home.readWriting': 'Ler os textos',
  'home.latest': 'Textos',
  'home.latestSub': 'Pretendo voltar a escrever, uma hora dessas, em breve. Por enquanto, estes são alguns posts que escrevi quando LLM ainda não era uma coisa, heh.',
  'home.elsewhere': 'Por aí',
  'home.allPosts': 'Todos os posts',
  'blog.title': 'Textos',
  'blog.description': 'Artigos de engenharia longos, passo a passo.',
  'blog.empty': 'Nada por aqui ainda.',
  'blog.newer': 'Mais recentes',
  'blog.older': 'Mais antigos',
  'blog.page': 'Página {n} de {total}',
  'blog.readingTime': '{n} min de leitura',
  'blog.draft': 'Rascunho',
  'blog.draftNotice': 'Este é um rascunho não publicado. Coisas podem mudar ou estar simplesmente erradas.',
  'blog.notTranslated': 'Este post está disponível apenas em inglês por enquanto.',
  'blog.readInEnglish': 'Ler em inglês',
  'blog.published': 'Publicado',
  'blog.updated': 'Atualizado',
  'blog.reviewers': 'Revisado por',
  'blog.editOnGitHub': 'Editar no GitHub',
  'blog.discussDevto': 'Discutir no Dev.to',
  'blog.originallyMedium': 'Originalmente no Medium',
  'blog.toc': 'Nesta página',
  'blog.tags': 'Tags',
  'blog.category': 'Categoria',
  'blog.inCategory': 'Posts em {name}',
  'blog.withTag': 'Posts com a tag {name}',
  'blog.postCount': '{n} textos',
  'blog.postCountOne': '1 texto',
  'categories.title': 'Categorias',
  'tags.title': 'Tags',
  'newsletter.title': 'Receba novos posts por email',
  'newsletter.body': 'Sem barulho. Um aviso quando algo novo for publicado, poucas vezes por ano.',
  'newsletter.placeholder': 'voce@exemplo.com',
  'newsletter.name': 'Nome',
  'newsletter.email': 'Email',
  'newsletter.submit': 'Assinar',
  'newsletter.privacy': 'Gerenciado pelo Mailchimp. Cancele quando quiser.',
  'footer.madeWith': 'Feito com Astro. Código no GitHub.',
  'footer.rights': 'Jonathan Cardoso Machado',
  'footer.privacy': 'Privacidade',
  'footer.rss': 'RSS',
  'privacy.title': 'Privacidade',
  'notFound.title': 'Página não encontrada',
  'notFound.body': 'Nada mora neste endereço. Pode ter mudado, ou o link nunca esteve certo.',
  'notFound.home': 'Voltar ao início',
  'cmdk.placeholder': 'Digite para buscar posts ou ir para algum lugar',
  'cmdk.posts': 'Posts',
  'cmdk.pages': 'Páginas',
  'cmdk.actions': 'Ações',
  'cmdk.noResults': 'Nenhum resultado',
  'cmdk.toggleTheme': 'Alternar tema',
  'cmdk.switchLang': 'Switch to English',
  'cmdk.close': 'Fechar',
  'cmdk.navigate': 'para navegar',
  'cmdk.select': 'para abrir',
}

export const ui: Record<Locale, Record<UIKey, string>> = { en, 'pt-br': ptBr }

export function useTranslations(locale: Locale) {
  return function t(key: UIKey, vars: Record<string, string | number> = {}): string {
    let s: string = ui[locale][key] ?? ui[DEFAULT_LOCALE][key] ?? key
    for (const [k, v] of Object.entries(vars)) s = s.replaceAll(`{${k}}`, String(v))
    return s
  }
}

export function isLocale(value: string | undefined): value is Locale {
  return LOCALES.includes(value as Locale)
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'en' ? 'pt-br' : 'en'
}

export const DATE_LOCALE: Record<Locale, string> = { en: 'en-US', 'pt-br': 'pt-BR' }

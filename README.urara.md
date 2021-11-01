# Urara

Sweet & Powerful SvelteKit blog template.

[Live Demo](https://urara-demo.netlify.app) | [Documentation](https://importantimport.github.io/urara-docs) | [Discussions](https://github.com/importantimport/urara/discussions)

built with:

- [SvelteKit](https://github.com/sveltejs/kit)
- [MDSveX](https://github.com/pngwn/mdsvex)
- [WindiCSS](https://github.com/windicss/windicss)
- [DaisyUI](https://github.com/saadeghi/daisyui)

special thanks:

- [@michaeloliverx](https://github.com/pngwn/MDsveX/issues/294#issuecomment-907029639)
- [@jthegedus](https://github.com/sveltejs/kit/issues/1258#issuecomment-874482104)

credits:

- Icons made by [Freepik](https://www.flaticon.com/authors/freepik) from [www.flaticon.com](https://www.flaticon.com)

## Quick Start

### GitHub

[Create a repo from this template on GitHub](https://github.com/importantimport/urara/generate)

### Local

This template recommends using [pnpm](https://pnpm.io) and [@antfu/ni](https://github.com/antfu/ni).

```bash
$ nx degit importantimport/urara blog
$ cd blog
$ rm -f COPYING .github/ # remove useless file
```

## Developing

Once you've created a project and installed dependencies with
`ni`, start a development
server:

```bash
nr dev

# http://0.0.0.0:3000
nr dev --host 0.0.0.0

# http://0.0.0.0:8080
nr dev --host 0.0.0.0 --port 8080
```

## Building

This template uses `@sveltejs/adapter-static@next` by default, but u can use any adapter supported by SvelteKit. more on [SvelteKit Docs](https://kit.svelte.dev/docs#adapters)

```bash
MODE=production nr build

# build for 'workers' mode
MODE=workers nr build

# build for 'netlify' mode
MODE=netlify nr build

# build for 'vercel' mode
MODE=vercel nr build
```

> You can preview the built app with `npm run preview`, regardless of
> whether you installed an adapter. This should _not_ be used to serve
> your app in production.

## License

This work is free, it comes without any warranty. You can redistribute it and/or modify it under the
terms of the Do What The Fuck You Want To Public License, Version 2,
as published by Sam Hocevar. See the COPYING file for more details.

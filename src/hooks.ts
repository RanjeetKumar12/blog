import type { Handle } from '@sveltejs/kit'
import { prerendering } from '$app/env'
import { minify } from 'html-minifier'
import { site } from '$lib/config/site'

const minificationOptions = {
  collapseBooleanAttributes: true,
  collapseWhitespace: true,
  conservativeCollapse: true,
  decodeEntities: true,
  html5: true,
  ignoreCustomComments: [/^#/],
  minifyCSS: true,
  minifyJS: true,
  removeAttributeQuotes: true,
  removeComments: true,
  removeOptionalTags: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  sortAttributes: true,
  sortClassName: true
}

export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event, {
    transformPage: ({ html }) => (site.lang ? html.replace('<html lang="en">', `<html lang="${site.lang}">`) : html)
  })
  if (prerendering && response.headers.get('content-type') === 'text/html') {
    const body = await response.text()
    return new Response(minify(body, minificationOptions), {
      status: response.status,
      headers: response.headers
    })
  }
  return response
}
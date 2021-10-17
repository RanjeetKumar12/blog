import site from '$lib/config/site'
import icons from '$lib/config/icons'
// import { config as headerConfig } from '$lib/config/header'

const manifest = {
	name: site.title,
	shortName: site.title,
	lang: site.lang,
	description: site.descr,
	startUrl: site.url,
	scope: '/',
	display: 'standalone',
	orientation: 'portrait',
	backgroundColor: site.themeColor,
	themeColor: site.themeColor,
	icons: [...Object.values(icons).slice(2)],
	// shortcuts: Object.entries(headerConfig.nav).map(([key, value]) => ({ name: key, url: value }))
}

export { manifest as default }
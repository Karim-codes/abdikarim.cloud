import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

const routes = ['/', '/about', '/experience', '/projects', '/certifications', '/contact', '/projects/azure-infrastructure-lab', '/projects/qasd', '/projects/shaanis', '/projects/polyglotpdf', '/projects/itinyri']
const slug = (route: string) => route === '/' ? 'home' : route.replaceAll('/', '-').slice(1)

for (const scheme of ['dark', 'light'] as const) {
  for (const width of [375, 768, 1024, 1440]) {
    test(`homepage ${width}px ${scheme}: responsive, accessible and screenshot`, async ({ page }) => {
      await page.emulateMedia({ colorScheme: scheme, reducedMotion: 'reduce' })
      await page.setViewportSize({ width, height: 1000 })
      const errors: string[] = []
      page.on('pageerror', error => errors.push(error.message))
      page.on('console', message => { if (message.type() === 'error') errors.push(message.text()) })
      await page.goto('/')
      await page.evaluate(() => document.fonts.ready)
      await expect(page.getByRole('heading', { level: 1 })).toContainText('Building technology.')
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
      await page.screenshot({ path: `docs/review/home-${width}-${scheme}.png`, fullPage: true, animations: 'disabled' })
      const axe = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze()
      expect(axe.violations.map(v => ({ id: v.id, nodes: v.nodes.map(n => n.target) }))).toEqual([])
      expect(errors).toEqual([])
    })
  }
  test(`all routes: direct navigation, refresh and accessibility in ${scheme}`, async ({ page }) => {
    await page.emulateMedia({ colorScheme: scheme, reducedMotion: 'reduce' })
    const errors: string[] = []
    page.on('pageerror', error => errors.push(error.message))
    page.on('console', message => { if (message.type() === 'error') errors.push(message.text()) })
    for (const route of routes) {
      const response = await page.goto(route)
      expect(response?.status()).toBe(200)
      await page.evaluate(() => document.fonts.ready)
      await expect(page.locator('h1')).toHaveCount(1)
      await expect(page).toHaveTitle(/Abdikarim/)
      await expect(page.locator('link[rel=canonical]')).toHaveAttribute('href', `https://abdikarim.cloud${route}`)
      for (const width of [375, 768, 1024, 1440]) {
        await page.setViewportSize({ width, height: 1000 })
        await page.reload()
        await page.evaluate(() => document.fonts.ready)
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), route+' at '+width).toBe(true)
        if (route !== '/' && (width === 375 || width === 1440)) await page.screenshot({ path: `docs/review/${slug(route)}-${width}-${scheme}.png`, fullPage: true, animations: 'disabled' })
      }
      const axe = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze()
      expect(axe.violations.map(v => ({ id: v.id, nodes: v.nodes.map(n => n.target) })), route).toEqual([])
      await page.reload()
      await expect(page.locator('h1')).toBeVisible()
    }
    expect(errors).toEqual([])
  })
}

test('theme follows system, persists explicit choice and can return to system', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'dark' })
  await page.goto('/')
  await expect(page.locator('html')).toHaveAttribute('data-theme','dark')
  await page.getByLabel('Choose colour theme').click()
  await page.getByRole('radio',{name:'Light',exact:true}).check()
  await expect(page.locator('html')).toHaveAttribute('data-theme','light')
  await page.getByRole('link',{name:'About',exact:true}).click()
  await page.reload()
  await expect(page.locator('html')).toHaveAttribute('data-theme','light')
  await page.getByLabel('Choose colour theme').click()
  await page.getByRole('radio',{name:'System',exact:true}).check()
  await expect(page.locator('html')).toHaveAttribute('data-theme','dark')
  await page.emulateMedia({ colorScheme:'light' })
  await expect(page.locator('html')).toHaveAttribute('data-theme','light')
})

test('mobile navigation traps focus, closes with Escape and navigates', async ({ page }) => {
  await page.setViewportSize({width:375,height:900})
  await page.goto('/')
  await page.getByRole('button',{name:'Open navigation'}).click()
  const dialog = page.getByRole('dialog')
  await expect(dialog).toBeVisible()
  await page.keyboard.press('Shift+Tab')
  expect(await dialog.evaluate(node=>node.contains(document.activeElement))).toBe(true)
  await page.keyboard.press('Escape')
  await expect(dialog).toBeHidden()
  await expect(page.getByRole('button',{name:'Open navigation'})).toBeFocused()
  await page.getByRole('button',{name:'Open navigation'}).click()
  await page.getByRole('navigation',{name:'Mobile navigation'}).getByRole('link',{name:'Projects',exact:true}).click()
  await expect(page).toHaveURL(/\/projects$/)
  await expect(dialog).toBeHidden()
})

test('project filters, back navigation, case studies and diagram viewer work', async ({ page }) => {
  await page.goto('/projects')
  await page.getByRole('button',{name:'Applications',exact:true}).click()
  await expect(page.locator('.project-feature')).toHaveCount(2)
  await expect(page.locator('.project-feature')).toContainText(['Qasd', 'iTinyri'])
  await page.reload()
  await expect(page.locator('.project-feature')).toHaveCount(2)
  await page.getByRole('link',{name:'Read case study',exact:true}).first().click()
  await expect(page.locator('h1')).toHaveText('Qasd')
  await page.getByRole('button',{name:/Expand screenshot:/}).first().click()
  await expect(page.getByRole('dialog')).toBeVisible()
  await page.keyboard.press('Escape')
  await page.goBack()
  await expect(page.locator('.project-feature')).toHaveCount(2)
  await page.goto('/projects/azure-infrastructure-lab')
  await page.getByRole('button',{name:'Expand diagram'}).click()
  await expect(page.getByRole('dialog')).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(page.getByRole('button',{name:'Expand diagram'})).toBeFocused()
  await expect(page.getByRole('heading',{name:'Planned · not implemented'})).toBeVisible()
})

test('missing screenshot has an accessible fallback', async ({ page }) => {
  await page.route('**/projects/qasd-*.webp',route=>route.abort())
  await page.goto('/projects/qasd')
  await expect(page.locator('.missing-image')).toHaveCount(2)
  await expect(page.locator('.missing-image').first()).toHaveAttribute('role','img')
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true)
})

test('contact copy, privacy defaults, working links and custom 404', async ({ page, context }) => {
  await context.grantPermissions(['clipboard-read','clipboard-write'])
  await page.goto('/contact')
  await page.getByRole('button',{name:'Copy email address'}).click()
  await expect(page.getByRole('status')).toHaveText('Email address copied.')
  expect(await page.evaluate(()=>navigator.clipboard.readText())).toBe('hello@abdikarim.cloud')
  await expect(page.locator('a[download]')).toHaveCount(0)
  await expect(page.getByText('Open to opportunities')).toHaveCount(0)
  for (const a of await page.locator('a[target=_blank]').all()) expect(await a.getAttribute('rel')).toContain('noopener')
  await page.goto('/this-page-does-not-exist')
  await expect(page.locator('h1')).toContainText('A path that doesn’t lead anywhere.')
  await expect(page.locator('meta[name=robots]')).toHaveAttribute('content','noindex, follow')
})

test('prerendered pages are readable with JavaScript disabled', async ({ browser }) => {
  const context = await browser.newContext({javaScriptEnabled:false,viewport:{width:375,height:900}})
  const page = await context.newPage()
  for (const route of routes) {
    await page.goto('http://127.0.0.1:4187'+route)
    await expect(page.locator('h1')).toBeVisible()
    await expect(page.locator('main')).not.toContainText('Loading case study')
  }
  await context.close()
})

test('keyboard skip link, new-route scrolling and history restoration work', async ({ page }) => {
  await page.emulateMedia({reducedMotion:'reduce'})
  await page.setViewportSize({width:1440,height:700})
  await page.goto('/')
  await page.keyboard.press('Tab')
  await expect(page.getByRole('link',{name:'Skip to content'})).toBeFocused()
  await page.keyboard.press('Enter')
  await expect(page.locator('main')).toBeFocused()
  await page.goto('/projects')
  const link=page.getByRole('link',{name:'Read case study',exact:true}).nth(1)
  await link.scrollIntoViewIfNeeded()
  const previous=await page.evaluate(()=>scrollY)
  await link.click()
  await expect(page.locator('h1')).toHaveText('Qasd')
  await expect.poll(()=>page.evaluate(()=>scrollY)).toBe(0)
  await page.goBack()
  await expect(page).toHaveURL(/\/projects$/)
  await expect.poll(()=>page.evaluate(()=>scrollY)).toBe(previous)
})

test('theme switching survives blocked browser storage', async ({ browser }) => {
  const context=await browser.newContext({colorScheme:'dark'})
  await context.addInitScript(()=>{
    Object.defineProperty(window,'localStorage',{get(){throw new Error('Storage unavailable')}})
  })
  const page=await context.newPage()
  await page.goto('http://127.0.0.1:4187/')
  await page.getByLabel('Choose colour theme').click()
  await page.getByRole('radio',{name:'Light',exact:true}).check()
  await expect(page.locator('html')).toHaveAttribute('data-theme','light')
  await context.close()
})

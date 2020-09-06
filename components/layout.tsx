import Head from 'next/head'
import { Grommet, Header, Footer, Anchor, Box, ResponsiveContext, Menu, Text } from 'grommet'
import { Grommet as GrommetIcon, Menu as MenuIcon } from 'grommet-icons'
import { grommet } from 'grommet/themes'



export default function Layout({ children, title = "The Shoppy Awards" }) {
  return (
    <Grommet theme={grommet}>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header direction="row" background="light-4" pad="medium" height="xsmall">
        <Anchor href="/"
          icon={<GrommetIcon color="brand" />}
          label="Shoppys"
        />
        <ResponsiveContext.Consumer>
          {size =>
            size === 'small' ? (
              <Box justify="end">
                <Menu
                  a11yTitle="Navigation Menu"
                  dropProps={{ align: { top: 'bottom', right: 'right' } }}
                  icon={<MenuIcon color="brand" />}
                  items={[
                    {
                      label: <Box pad="small">Nominations</Box>,
                      href: '/nominations',
                    }
                  ]}
                />
              </Box>
            ) : (
                <Box justify="end" direction="row" gap="medium">
                  <Anchor href="/nominations" label="Nominations" />
                </Box>
              )
          }
        </ResponsiveContext.Consumer>
      </Header>
      {children}
      <Footer background="light-4" justify="center" pad="medium">
        <Text textAlign="center" size="small">&copy;{' '}theabsurdistdev{' '}{new Date().getFullYear()}</Text>
      </Footer>
    </Grommet>
  )
}
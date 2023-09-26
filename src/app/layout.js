import mainTheme from '@/theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Head from 'next/head'
import Body from '@/components/Body'
import Provider from '@/components/Provider'

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <CssBaseline />
      <ThemeProvider theme={mainTheme}>
        <Provider>
          <Body>
            {children}
          </Body>
        </Provider>
      </ThemeProvider>
    </html >
  );
}

export const metadata = {
  title: 'Ejemplo',
  description: 'Descripcion ejemplo',
  keywords: [],
  authors: [],
}
export default RootLayout;
import { ClerkProvider } from '@clerk/nextjs'

import type { Metadata } from 'next'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-quartz.css'
import '@/app/styles/custom-grid-styles.css'
import '@/app/styles/aggrid.css'
import '@/app/styles/kendo.css'
import { LicenseManager } from 'ag-grid-enterprise'
import localFont from 'next/font/local'
import { Toaster } from '@/components/ui/sonner'
import { QueryProvider } from '@/providers/query-provider'
import { SheetProvider } from '@/providers/sheet-provider'
import { SidebarProvider } from '@/lib/hooks/use-sidebar'
import './globals.css'
import { Providers } from '@/components/providers'
import { cn } from '@/lib/utils'

LicenseManager.setLicenseKey(
  '[TRIAL]_this_{AG_Charts_and_AG_Grid}_Enterprise_key_{AG-057528}_is_granted_for_evaluation_only___Use_in_production_is_not_permitted___Please_report_misuse_to_legal@ag-grid.com___For_help_with_purchasing_a_production_key_please_contact_info@ag-grid.com___You_are_granted_a_{Single_Application}_Developer_License_for_one_application_only___All_Front-End_JavaScript_developers_working_on_the_application_would_need_to_be_licensed___This_key_will_deactivate_on_{14 May 2024}____[v3]_[0102]_MTcxNTY0MTIwMDAwMA==6ff4143f8d6a412a9d66750abe4d9ae3'
)

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
});
export const metadata = {
  metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
  title: {
    default: 'BlueNorth AI EnterpriseGPT',
    template: `%s - BlueNorth AI EnterpriseGPT`
  },
  description:
    'An AI-powered EnterpriseGPT that acts as your Supply Chain Twin',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
        >
           <QueryProvider>
            <SheetProvider />
            <SidebarProvider>
          <Toaster position="top-center" />
          <Providers
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-col min-h-screen">
              {/* <Header /> */}
              <main className="">{children}</main>
            </div>
            {/* <TailwindIndicator /> */}
          </Providers>
          </SidebarProvider>
          </QueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

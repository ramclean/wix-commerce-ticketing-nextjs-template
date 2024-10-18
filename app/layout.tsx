import './globals.css';
import Footer from '@app/components/Layout/Footer';
import Header from '@app/components/Layout/Header';
import { ClientProvider } from '@app/components/Provider/ClientProvider';
import { SidebarUI } from '@app/components/Sidebar/SidebarUI';
import { NotPremium } from '@app/components/NotPremium/NotPremium';
import { LoginModal } from '@app/components/LoginModal/LoginModal';

/**
 * Using force dynamic so changes in business assets (e.g. services) are immediately reflected.
 * If you prefer having it reflected only after redeploy (not recommended) please remove it
 * **/
export const revalidate = 0;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>The Lughole | Sheffield</title>
        <meta
          name="description"
          content="DIY OR DIE since 2013. Sheffield, UK."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://www.wix.com/favicon.ico" />
      </head>
      <body className="text-black bg-site">
        {process.env.NEXT_PUBLIC_WIX_CLIENT_ID ? (
          <>
            <ClientProvider>
              <Header />
              <main className="bg-site min-h-[600px]">{children}</main>
              <SidebarUI />
              <NotPremium />
              <LoginModal />
            </ClientProvider>
            <div className="mt-10 sm:mt-20">
              <Footer />
            </div>
          </>
        ) : (
          <div className="bg-site min-h-[600px] max-w-5xl mx-auto p-5">
            Page not available.
          </div>
        )}
      </body>
    </html>
  );
}

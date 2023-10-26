// import './data-tables-css.css';

import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './components/AuthProvider';
import './globals.css';
import './satoshi.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <head>
          <link
            href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
            rel="stylesheet"
          />
        </head>
        <body suppressHydrationWarning={true}>
          <>{children}</>
        </body>
      </html>
    </AuthProvider>
  );
}

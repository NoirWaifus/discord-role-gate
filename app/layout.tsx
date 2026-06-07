export const metadata = {
  title: 'Discord Role Gate',
  description: 'Acceso con Discord y asignación de rol',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

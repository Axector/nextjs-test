import "@/common/globals.scss";
import Header from "@/components/Header";
import { CardsProvider } from "@/store/CardsContext";

export const metadata = {
  title: "Anastasi Tattoo",
  description: "Anastasi Tattoo Cards Hosting",
};

export const RootLayout = async ({ children }) => {
  return (
    <html lang="en">
      <body>
        <CardsProvider>
          <div className="page">
            <Header />
            <main>
              {children}
            </main>
          </div>
        </CardsProvider>
      </body>
    </html>
  );
}

export default RootLayout;

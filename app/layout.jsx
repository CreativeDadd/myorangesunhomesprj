// import '@styles/globals.css';
// import Nav from '@components/Nav';
// import Footer from '@components/Footer';

// export const metadata ={
//     title: "Home",
//     description: "Orange-Sun Homes Limited offers the general real estate services that includes property rentals, development, building , Land purchase ,relocations accomodations, vacations /get away accommodation"
// }
// const RootLayout = ({ children }) => {
//   return (
//     <html lang="en">
//         <body>
//             <main>
//              <Nav/>
//              {children}
//              <Footer />
//             </main>
//         </body>

//     </html>
    
//   )
// }

// export default RootLayout


import '../app/globals.css';
import Header from '@/components/Header';

export const metadata = {
  title: 'Orange Sun Homes',
  description: 'Find Your Dream Home with Orange Sun Homes',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

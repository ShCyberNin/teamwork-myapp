import { FC, ReactNode } from "react";
import { Navbar } from "../(marketing)/_components/navbar";
import { Footer } from "../(marketing)/_components/footer";

interface AuthLayoutProps {
    children: ReactNode;
}

const AuthLayout:FC<AuthLayoutProps> = ({children}) => {
  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <Navbar />
    <div className="bg-slate-200 p-10 rounded">
        {children}
    </div>
    <Footer />
    </main>
  )
}

export default AuthLayout
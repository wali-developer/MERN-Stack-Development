export default function DashboardLayout({ children }) {
  return (
    //     <section className="flex">
    //       <aside className="w-[200px] border-2 h-screen">Aside</aside>
    //       <section className="flex-1">
    //         <header className="border-2 h-24">Header</header>
    //         <main className="border-2 h-[calc(100vh-96px)]">{children}</main>
    //       </section>
    //     </section>
    <main className="w-full min-h-screen bg-lightBg p-8 lg:py-10 lg:px-20">
      {children}
    </main>
  );
}

import { HeaderContainer, Portfolio } from "@/app/componets";








export default function Page({ params }) {
  return (
    <section className="bg-slate-800/90 py-10 ">
      <div className="z-10 ">
        <div className="container">
          <div className="pb-10">
            <HeaderContainer TITLE={params.slug}/>
          </div>
          <div className="pt-10">
            <Portfolio slug={params.slug}/>
          </div>
        </div>
      </div>
    </section>
  )
}
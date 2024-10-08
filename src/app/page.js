
import { HeaderContainer, PorftolioCard } from "./componets";


export default function Home() {
  return (
    <section className="bg-slate-800/90 py-10">
      <div className=" z-10 ">
        <div className="container">
          <div className="pb-10">
            <HeaderContainer />
          </div>
          <div className="pt-10">
              <PorftolioCard  />
          </div>
        </div>
      </div>
    </section>
  );
}

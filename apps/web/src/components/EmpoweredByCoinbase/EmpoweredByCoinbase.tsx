async function Header() {
  return (
    <div className=" font-display text-3xl text-white md:text-5xl lg:text-6xl">
      <h2>
        Empowered by
        <br />
        Coinbase
      </h2>
    </div>
  );
}

async function Content() {
  return (
    <p className="font-display text-sm text-white lg:text-xl">
      Base is built to be the onchain home for Coinbase products, users, and assets, as well as an
      open ecosystem where anyone can build for them. Leverage Coinbase’s developer tools to make
      building easy and reach Coinbase users.
    </p>
  );
}

async function UsersAssetsGraphic() {
  return (
    <div className="flex flex-col gap-4 lg:basis-1/2">
      <div className="flex w-full max-w-[534px] flex-col justify-between bg-empowered_by_coinbase bg-cover bg-center bg-no-repeat lg:h-[434px] lg:w-[534px] lg:py-4">
        <div className="flex h-full flex-col px-7 py-3.5 lg:px-12 lg:py-7">
          <h3 className="font-display text-5xl text-white lg:text-8xl">$130B</h3>
        </div>
        <div className="flex h-full flex-col justify-center px-7 lg:space-y-4 lg:px-12">
          <h4 className="font-mono text-xl uppercase text-white sm:text-2xl lg:text-[48px]">
            Assets on
          </h4>
          <h4 className="font-mono text-xl uppercase text-white sm:text-2xl lg:text-[48px]">
            Platform
          </h4>
        </div>
      </div>
      <p className="font-display text-xs text-white">As of 3/31/2023</p>
    </div>
  );
}

export async function EmpoweredByCoinbase() {
  // Layout is a little weird, just have separate mobile and desktop divs
  return (
    <>
      {/* Mobile */}
      <div className="flex w-full flex-col space-y-8 bg-black px-8 py-12 lg:hidden">
        <Header />
        <UsersAssetsGraphic />
        <Content />
      </div>

      {/* Desktop */}
      <div className="hidden w-full max-w-[1440px] flex-row flex-wrap justify-between bg-black px-8 py-12 lg:flex">
        <UsersAssetsGraphic />
        <div className="flex flex-shrink-0 basis-[678px] flex-col space-y-8 lg:basis-1/2">
          <Header />
          <Content />
        </div>
      </div>
    </>
  );
}

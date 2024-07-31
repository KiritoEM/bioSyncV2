/**
 *Barre de navigation du landing
 * @return JSX.element
 */

const LandingNav = (): JSX.Element => {
  return (
    <nav className="landing__nav">
      <div className="container mx-auto py-5 px-[80px]">
        {/* Logo */}
        <div className="logo">
          <img src="/logo.svg" alt="" />
        </div>
      </div>
    </nav>
  );
};

export default LandingNav;

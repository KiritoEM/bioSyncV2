import { FC, ReactNode } from "react";

const SignupLayout: FC<{ children: ReactNode }> = ({
  children,
}): JSX.Element => {
  return (
    <section className="signup w-full overflow-hidden min-h-screen flex items-center justify-center">
      <div className="top-shape fixed top-0 left-0 z-2">
        <img src="/illustrations/frame-top.svg" />
      </div>
      <div
        className="signup__content max-w-[420px] flex flex-col gap-8 items-center relative z-4"
        style={{ marginBottom: "3rem", marginTop: "3rem" }}
      >
        {children}
      </div>
      <div className="bottom-shape fixed bottom-0 z-2" style={{ right: 0 }}>
        <img src="/illustrations/frame-bottom.svg" alt="" />
      </div>
    </section>
  );
};

export default SignupLayout;

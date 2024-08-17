import { Spinner } from "@nextui-org/react";

const Loading = (): JSX.Element => {
  return (
    <div className="loading w-full h-screen z-50 fixed top-0 left-0 bg-white flex items-center justify-center">
      <div className="loading__container flex flex-col items-center gap-5">
        <Spinner size="lg" />
        <p className="text-[19px] font-calSans">Chargement en cours...</p>
      </div>
    </div>
  );
};

export default Loading;

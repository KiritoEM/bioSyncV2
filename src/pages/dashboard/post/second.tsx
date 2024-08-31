import { FC, Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Button } from "@/components/UI/button";
import postActions from "@/actions/postActions";
import { Toast } from "@/components/UI/toast";
import Title from "@/components/meta/Title";
import { Stepper } from "@/components/UI/stepper";
import { protectedHOC } from "@/core/HOC/authHOC";
import { Map } from "@/components/common/map";
import { useLocation } from "@/core/hooks/useLocation";

const Second: FC = (): JSX.Element => {
  const router = useRouter();
  const { id } = router.query;
  const { selectedCoords } = useLocation();
  const [validCoords, setCoords] = useState<boolean>(false);
  const [changeIndex, setIndex] = useState<boolean>(false);
  const { addLocation } = postActions();
  const { addToast } = Toast();

  useEffect(() => {
    console.log("selectedCoords in useEffect:", selectedCoords);
    if (selectedCoords[0] !== 0 && selectedCoords[1] !== 0) {
      setCoords(true);
    }
  }, [selectedCoords]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (await addLocation(e, selectedCoords, id as string)) {
      setIndex(true);
      router.push("/dashboard/");
    } else {
      addToast({
        title: "Erreur",
        description: "Une erreur s'est produite",
        status: "error",
      });
    }
  };

  return (
    <Fragment>
      <Title title="Biosync | Créer un post" />
      <section className="dashboard-post bg-input h-screen overflow-x-hidden overflow-y-auto">
        <DashboardLayout>
          <div className="dashboard-post__container container w-full mx-auto mt-8 mb-12 flex flex-col items-center px-7">
            <div className="stepper w-[700px] hidden md:block">
              <Stepper index={changeIndex ? 2 : 1} />
            </div>
            <form
              action="post"
              onSubmit={handleSubmit}
              className="flex flex-col items-center w-full"
            >
              <div className="map mt-[60px] w-full lg:w-[700px] h-[280px] md:h-[300px] lg:h-[400px] rounded-lg overflow-hidden">
                {validCoords && (
                  <Map
                    wheelZoom
                    position={selectedCoords}
                    zoom={14}
                    events={true}
                    geolocalisation
                  />
                )}
              </div>
              <Button className="mt-6" radius="md" type="submit">
                Créer la publication
              </Button>
            </form>
          </div>
        </DashboardLayout>
      </section>
    </Fragment>
  );
};

export default protectedHOC(Second);

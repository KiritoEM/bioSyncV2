import Title from "@/components/meta/Title";
import { Stepper } from "@/components/UI/stepper";
import { protectedHOC } from "@/core/HOC/authHOC";
import DashboardLayout from "@/layouts/DashboardLayout";
import { useRouter } from "next/router";
import { FC, Fragment, useEffect, useState } from "react";
import { Map } from "@/components/common/sections/dashboard/DashboardMap";
import useLocalisation from "@/core/hooks/useLocalisation";
import { Button } from "@/components/UI/button";
import postActions from "@/actions/postActions";
import { Toast } from "@/components/UI/toast";

const second: FC = (): JSX.Element => {
  const router = useRouter();
  const { id } = router.query;
  const { selectedCoords } = useLocalisation();
  const [validCoords, setCoords] = useState<boolean>(false);
  const [changeIndex, setIndex] = useState<boolean>(false);
  const { addLocation } = postActions();
  const { addToast } = Toast();

  useEffect(() => {
    if (selectedCoords) {
      setCoords(selectedCoords[0] !== 0 && selectedCoords[1] !== 0);
    }
  }, [selectedCoords]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (await addLocation(e, selectedCoords, id as string)) {
      setIndex(true);
      router.push("/dashboard/");
    } else {
      addToast({
        title: "Erreur",
        description: "Un erreur s' est produit",
        status: "error",
      });
    }
  };
  return (
    <Fragment>
      <Title title="Biosync | créér un post" />
      <section className="dashboard-post bg-gray01 h-screen overflow-x-hidden overflow-y-auto">
        <DashboardLayout>
          <div className="dashboard-post__container container mx-auto mt-8 mb-12 flex flex-col items-center">
            <div className="stepper w-[700px]">
              <Stepper index={changeIndex ? 2 : 1} />
            </div>
            <form
              action="post"
              onSubmit={handleSubmit}
              className="flex flex-col items-center"
            >
              <div className="map mt-[60px] w-[700px] h-[400px] rounded-lg overflow-hidden">
                {validCoords && (
                  <Map wheelZoom position={selectedCoords} zoom={14} />
                )}
              </div>
              <Button className="mt-6" radius="md" type="submit">
                {" "}
                Créer la publication
              </Button>
            </form>
          </div>
        </DashboardLayout>
      </section>
    </Fragment>
  );
};

export default protectedHOC(second);

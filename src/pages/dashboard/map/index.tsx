import postActions from "@/actions/postActions";
import { Map } from "@/components/common/map";
import Title from "@/components/meta/Title";
import { protectedHOC } from "@/core/HOC/authHOC";
import { useLocation } from "@/core/hooks/useLocation";
import { RootState } from "@/core/redux/store.config";
import { IpostCard } from "@/helpers/types";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Image } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC, Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const DashboardMap: FC = (): JSX.Element => {
  const { coords } = useLocation();
  const router = useRouter();
  const [validCoords, setCoords] = useState<boolean>(false);
  const posts = useSelector((state: RootState) => state.post.posts);
  const { getAllPosts } = postActions();
  const { id } = router.query;

  useEffect(() => {
    getAllPosts();
  }, []);

  useEffect(() => {
    if (coords) {
      setCoords(coords[0] !== 0 && coords[1] !== 0);
    }
  }, [coords]);
  return (
    <Fragment>
      <Title title="BioSync | map" />
      <section className="dashboard-map">
        <DashboardLayout>
          <div
            className="close-btn fixed right-5 mt-4 bg-yellow01 opacity-85 w-[47px] h-[47px] flex items-center justify-center rounded-full"
            style={{ zIndex: 60 }}
            onClick={() => router.push("/dashboard/")}
          >
            <Image
              src="/icons/close.svg"
              className="cursor-pointer"
              width={18}
            />
          </div>
          <div
            className="map w-screen h-screen relative"
            style={{ zIndex: 20 }}
          >
            {validCoords && posts.length > 0 && (
              <Map
                zoom={14}
                wheelZoom
                posts={posts}
                position={
                  (posts[(id as unknown as number) ?? 0] as IpostCard).location
                }
                geolocalisation={false}
                events={false}
              />
            )}
          </div>
        </DashboardLayout>
      </section>
    </Fragment>
  );
};

export default protectedHOC(DashboardMap);

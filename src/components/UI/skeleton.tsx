import { CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";
import { Card, Skeleton } from "@nextui-org/react";
import { FC } from "react";

export interface IskeletonMap {
  size?: { width: string; height: string };
}

const PostSkeleton: FC = (): JSX.Element => {
  return (
    <Card radius="sm" className="post-card shadow-none p-1 bg-white mb-5">
      <CardHeader>
        <div className="flex gap-3">
          <Skeleton className="h-[45px] w-[45px] rounded-full"></Skeleton>
          <Skeleton className="h-[45px] w-[75px] rounded-lg"></Skeleton>
        </div>
      </CardHeader>
      <CardBody>
        <Skeleton className="h-[305px] w-full rounded-lg"></Skeleton>
      </CardBody>
      <CardFooter>
        <Skeleton className="h-[45px] w-full rounded-lg"></Skeleton>
      </CardFooter>
    </Card>
  );
};

const MapSkeleton: FC<IskeletonMap> = ({ size }): JSX.Element => {
  const width = size?.width ?? "full";
  const height = size?.height ?? "screen";
  return <Skeleton className={`w-${width} h-${height} rounded-lg`}></Skeleton>;
};

const UserCardSkeleton = () => {
  return (
    <Card className="w-full bg-white h-max rounded-lg p-1 mb-[20vh]">
      <CardHeader className="flex flex-col h-max">
        <Skeleton className="h-[125px] w-full rounded-lg"></Skeleton>
        <div className="profile-content relative -mt-[44px] px-[30px] flex flex-col gap-3 items-center">
          <Skeleton className="h-[81px] w-[80px] rounded-full"></Skeleton>
          <div className="flex flex-col items-center">
            <Skeleton className="h-[21px] w-[140px] rounded-lg"></Skeleton>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <div className="profile-details flex gap-7 mt-3 px-4">
          <Skeleton className="h-[32px] w-full rounded-lg"></Skeleton>
          <Skeleton className="h-[32px] w-full rounded-lg"></Skeleton>
          <Skeleton className="h-[32px] w-full rounded-lg"></Skeleton>
        </div>
      </CardBody>
      <CardFooter className="flex flex-col items-start">
        <Divider />
        <div className="profile-pictures mt-3 w-full">
          <header>
            <h5 className="font-medium">Vos photos</h5>
          </header>
          <div className="grid grid-cols-3 mt-2 gap-1">
            {Array.from({ length: 7 }).map((_, index) => (
              <Skeleton
                key={index}
                className="h-[85px] w-full rounded-lg"
              ></Skeleton>
            ))}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export { PostSkeleton, MapSkeleton, UserCardSkeleton };
